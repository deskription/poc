import { Resource } from '@/types/Resource';
import { ResourceTable } from '@/types/ResourceTable';
import { ResourceDetails } from '@/types/ResourceDetails';

export const resource: Resource = {
  spec: {
    name: 'Services',
    apiGroup: 'serving.knative.dev',
    apiVersion: 'v1',
    plural: 'services',
  },
};

export const resourceTable: ResourceTable = {
  spec: {
    columns: [
      {
        name: 'Status',
        // TODO
        type: 'status',
        path: '',
      },
      {
        name: 'Type',
        path: 'metadata.labels.[\'function.knative.dev\']',
        type: 'enum',
        enum: {
          true: 'Function',
          false: 'Service',
          default: 'ServiceX',
        }
      },
      {
        name: 'Name',
        path: 'metadata.name',
      },
      {
        name: 'URL',
        path: 'status.url',
      },
      {
        name: 'Created',
        path: 'metadata.creationTimestamp',
      },
    ],
  },
};

export const resourceDetails: ResourceDetails = {
  spec: {
    fields: [
      {
        name: 'Type',
        path: 'metadata.labels.[\'function.knative.dev\']',
        type: 'enum',
        enum: {
          true: 'Function',
          false: 'Service',
          default: 'ServiceX',
        }
      },
      {
        name: 'Name',
        path: 'metadata.name',
      },
      {
        name: 'URL',
        path: 'status.url',
      },
      {
        name: 'Created',
        path: 'metadata.creationTimestamp',
      },
    ]
  },
};
