export interface ResourceDetailField {
  name: string;
  path: string;
  type?: 'enum';
  enum?: Record<string, string>;
}

export interface ResourceDetailsSpec {
  fields: ResourceDetailField[];
}

export interface ResourceDetails {
  spec: ResourceDetailsSpec;
}