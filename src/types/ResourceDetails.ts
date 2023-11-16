export interface ResourceDetailsSpec {
  name: string;
  // tmp
  resourceGroup: string;
  resourcesName: string;
}
  
export interface ResourceDetails {
  spec: ResourceDetailsSpec;
}