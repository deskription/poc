import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getDetails } from '../../k8s';
import App from '../../App';

import { resource, resourceDetails } from '@/knative';
import Details from '@/app/Details';

export default async function Page({ params }: { params: { name: string } }) {
  const object: any = (await getDetails(resource, params.name));

  delete object.metadata.managedFields;

  return (
    <main>
      <App />
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>
        <Box>
           <Card>
            <Typography variant='h2'>app: {params.name}</Typography>
          </Card>
        </Box>
        <Details object={object} resourceDetails={resourceDetails} />
        <pre>
          {JSON.stringify(object, null, 2)}
        </pre>
      </Container>
    </main>
  )
}
