export interface ResourceTableColumn {
  name: string;
  path: string;
  type?: 'enum';
  enum?: Record<string, string>;
}

export interface ResourceTableSpec {
  columns: ResourceTableColumn[];
}

export interface ResourceTable {
  spec: ResourceTableSpec;
}