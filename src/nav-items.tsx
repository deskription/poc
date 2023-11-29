import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';

export interface NavigationGroup {
  name: string;
  icon?: any;
  items?: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  apiGroup?: string;
  apiVersion?: string;
  plural: string;
  scope?: 'cluster' | 'namespace',
}

export type NavigationItems = NavigationGroup[];

export const navigationItems: NavigationItems = [
  {
    name: 'Workload',
    items: [
      { name: 'Pods', plural: 'pods' },
      { name: 'Deployments', apiGroup: 'apps', plural: 'deployments' },
      { name: 'Cron Jobs', apiGroup: 'batch', plural: 'cronjobs' },
      { name: 'Jobs', apiGroup: 'batch', plural: 'jobs' },
      { name: 'DeploymentConfigs', apiGroup: 'apps.openshift.io', plural: 'deploymentconfigs' },
      { name: 'Knative Services', apiGroup: 'serving.knative.dev', plural: 'services' }
    ],
  },
  {
    name: 'Compute',
    icon: <Dns />,
    items: [
      // { name: 'Clusters', plural: 'clusters', scope: 'cluster' },
      { name: 'Nodes', plural: 'nodes', scope: 'cluster' },
      // { name: 'VMs' },
    ],
  },
  {
    name: 'Storage',
    icon: <PermMedia />,
    items: [
      { name: 'ConfigMaps', plural: 'configmaps' },
      { name: 'Secrets', plural: 'secrets' },
      { name: 'PC', plural: 'persistentvolumes', scope: 'cluster' },
      { name: 'PCV', plural: 'persistentvolumeclaims' },
    ],
  },
  // {
  //   name: 'Database',
  //   icon: <Dns />,
  // },
  // {
  //   name: 'Network',
  // },
  // {
  //   name: 'Orchastration',
  // },
  {
    name: 'CI / CD',
    items: [
      { name: 'OpenShift BuildConfigs', apiGroup: 'build.openshift.io', plural: 'buildconfigs' },
      { name: 'OpenShift Builds', apiGroup: 'build.openshift.io', plural: 'builds' },
      { name: 'Tekton Pipelines', apiGroup: 'tekton.dev', plural: 'pipelines' },
      { name: 'Tekton PipelineRuns', apiGroup: 'tekton.dev', plural: 'pipelineruns' },
      { name: 'Tekton Tasks', apiGroup: 'tekton.dev', plural: 'tasks' },
      { name: 'Tekton TaskRuns', apiGroup: 'tekton.dev', plural: 'taskruns' },
      { name: 'Shipwright Builds', apiGroup: 'shipwright.io', apiVersion: 'v1alpha1', plural: 'builds' },
      { name: 'Shipwright BuildRuns', apiGroup: 'shipwright.io', apiVersion: 'v1alpha1', plural: 'buildruns' },
    ],
  },
  // {
  //   name: 'Big Data, AI/ML',
  // },
  {
    name: 'Security',
    icon: <People />,
    items: [
      { name: 'User', apiGroup: 'user.openshift.io', plural: 'users' },
      { name: 'Groups', apiGroup: 'user.openshift.io', plural: 'groups' },
      { name: 'ServiceAccounts', plural: 'serviceaccounts' },
      { name: 'Roles', apiGroup: 'rbac.authorization.k8s.i', plural: 'roles' },
      { name: 'RoleBindings', apiGroup: 'rbac.authorization.k8s.i', plural: 'rolebindings' },
      // { name: 'Policies', apiGroup: 'user.openshift.io', plural: 'users' },
    ],
  },
  // {
  //   name: 'Network',
  //   items: [
  //     { name: 'VPN' },
  //     { name: 'Ingress' },
  //     { name: 'Routes' },
  //   ],
  // },
];
