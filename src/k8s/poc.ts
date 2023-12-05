// Fetched in the backend, so that it bypass CORS issues
const baseUrl = `http://nimo-fedora:9000/api/kubernetes`;

const namespace = `christoph`;

export interface ResourceRef {
  apiGroup: string;
  apiVersion: string;
  plural: string;
  scope?: string,
}

export const getURL = (resourceRef: ResourceRef, namespace: string, name?: string): string => {
  let url = baseUrl;
  if (baseUrl.endsWith('/')) {
    url = url.substring(0, baseUrl.length - 1);
  }

  if (resourceRef.apiGroup && resourceRef.apiGroup !== 'core') {
    url = `${url}/apis/${resourceRef.apiGroup}`;
  } else {
    url = `${url}/api`;
  }

  if (resourceRef.apiVersion) {
    url = `${url}/${resourceRef.apiVersion}`;
  }

  if (namespace && resourceRef.scope !== 'cluster') {
    url = `${url}/namespaces/${namespace}`;
  }

  if (resourceRef.plural) {
    url = `${url}/${resourceRef.plural}`;
  }

  if (name) {
    url = `${url}/${name}`;
  }

  return url;
}

export const getList = async (resourceRef: ResourceRef) => {
  const url = getURL(resourceRef, namespace);
  console.log(`GET ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unxpected status: ${response.status} ${response.statusText}`)
  }
  return response.json();
}

export const getDetails = async (resourceRef: ResourceRef, name: string) => {
  const url = getURL(resourceRef, namespace, name);
  console.log(`GET ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unxpected status: ${response.status} ${response.statusText}`)
  }
  return response.json();
}
