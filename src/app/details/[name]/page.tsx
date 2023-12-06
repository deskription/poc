import * as React from 'react';
import NextLink from 'next/link'
import { Breadcrumbs, Divider, Link, Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { getDetails } from '@/k8s/poc';
import { resource, resourceDetails } from '@/resource-deskriptions/knative';
import Details from '@/app/Details';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default async function Page({ params, searchParams }: { params: { name: string }, searchParams: { tab: string } }) {
  const object: any = (await getDetails(resource, params.name));

  delete object.metadata.managedFields;

  const selectedTab = searchParams.tab ?? 'details';

  const breadcrumbs = [
    <Link key="2" component={NextLink} href="/" underline="hover" color="inherit">
      Services
    </Link>,
  ];

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
        <Typography key="3" color="text.primary">
          {params.name}
        </Typography>
      </Breadcrumbs>

      <Tabs value={selectedTab}>
        <Tab label="Details" value="details" LinkComponent={NextLink} href="/details/kn-func-node-http?tab=details" sx={{ textTransform: 'none' }} />
        <Tab label="YAML" value="yaml" LinkComponent={NextLink} href="/details/kn-func-node-http?tab=yaml" sx={{ textTransform: 'none' }} />
      </Tabs>
      <Divider />

      <div hidden={selectedTab !== 'details'}>
        <Details object={object} resourceDetails={resourceDetails} />
      </div>
      <div hidden={selectedTab !== 'yaml'}>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(object, null, 2)}
        </pre>
      </div>
    </>
  )
}
