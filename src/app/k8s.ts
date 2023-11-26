import { Resource } from "@/types/Resource";

// Fetched in the backend, so that it bypass CORS issues
const baseUrl = `http://nimo-fedora:9015/api/kubernetes/apis`;

const namespace = `christoph`;

export const getList = async (resource: Resource) => {
  const url = `${baseUrl}/${resource.spec.apiGroup}/${resource.spec.apiVersion}/namespaces/${namespace}/${resource.spec.plural}?limit=250`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unxpected status: ${response.status} ${response.statusText}`)
  }
  return response.json();
}

export const getDetails = async (resource: Resource, name: string) => {
  const url = `${baseUrl}/${resource.spec.apiGroup}/${resource.spec.apiVersion}/namespaces/${namespace}/${resource.spec.plural}/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unxpected status: ${response.status} ${response.statusText}`)
  }
  return response.json();
}
