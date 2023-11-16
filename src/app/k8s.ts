// Fetched in the backend, so that it bypass CORS issues
const baseUrl = `http://nimo-fedora:9015/api/kubernetes/apis`;

const namespace = `christoph`;

export const getList = async (resourceGroup: string, resourcesName: string) => {
  const url = `${baseUrl}/${resourceGroup}/namespaces/${namespace}/${resourcesName}?limit=250`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unxpected status: ${response.status} ${response.statusText}`)
  }
  return response.json();
}
