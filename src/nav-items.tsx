import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';

export const navigationItems = [
  {
    name: 'Workload',
    items: [
      { name: 'Pods' },
      { name: 'Deployments' },
      { name: 'Cron Jobs' },
      { name: 'Jobs' },
      { name: 'DeploymentConfigs' },
      { name: 'Knative Services '}
    ],
  },
  {
    name: 'Compute',
    icon: <Dns />,
    items: [
      { name: 'Clusters' },
      { name: 'Nodes' },
      { name: 'VMs' },
    ],
  },
  {
    name: 'Storage',
    icon: <PermMedia />,
    items: [
      { name: 'ConfigMaps' },
      { name: 'Secrets' },
      { name: 'PC' },
      { name: 'PCV' },
    ],
  },
  {
    name: 'Database',
    icon: <Dns />,
  },
  {
    name: 'Network',
  },
  {
    name: 'Orchastration',
  },
  {
    name: 'CI / CD',
    items: [
      { name: 'OpenShift BuildConfigs' },
      { name: 'OpenShift Builds' },
      { name: 'Tekton Pipelines' },
      { name: 'Tekton PipelineRuns' },
      { name: 'Tekton Tasks' },
      { name: 'Tekton TaskRuns' },
      { name: 'Shipwright Builds' },
      { name: 'Shipwright BuildRuns' },
    ],
  },
  {
    name: 'Big Data & AI',
  },
  {
    name: 'Security',
    icon: <People />,
    items: [
      { name: 'User' },
      { name: 'Groups' },
      { name: 'ServiceAccounts' },
      { name: 'Roles' },
      { name: 'RoleBindings' },
      { name: 'Policies' },
    ],
  },
  {
    name: 'Network',
    items: [
      { name: 'VPN' },
      { name: 'Ingress' },
      { name: 'Routes' },
    ],
  },
];
