import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getList } from './k8s';
import { dateTimeFormat } from './utils';

export default async function Home() {
  const services: any[] = (await getList('serving.knative.dev/v1', 'services')).items;

  return (
    <main>
      <Container>
        <Box>
           <Card>
            <Typography variant="h2">Services</Typography>
          </Card>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service: any, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {service.metadata?.labels?.['function.knative.dev'] === 'true' ? 'Function' : 'Service'}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {service.metadata?.name}
                  </TableCell>
                  <TableCell>
                    {service.status?.url && <a href={service.status?.url} target="_blank" rel="noreferrer">{service.status?.url}</a>}
                  </TableCell>
                  <TableCell>
                    {service.metadata?.creationTimestamp && dateTimeFormat.format(new Date(service.metadata.creationTimestamp))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Container>
    </main>
  )
}
