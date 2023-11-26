export interface ResourceSpec {
  name: string;
  apiGroup: string;
  apiVersion: string;
  plural: string;
}

export interface Resource {
  spec: ResourceSpec;
}
