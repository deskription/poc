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
import { ResourceTable } from '@/types/ResourceTable';
import { ResourceDetails } from '@/types/ResourceDetails';
import { getList } from './k8s';
import ColumnField from './ColumnField';

const resourceDetails: ResourceDetails = {
  spec: {
    name: 'Services',
    resourceGroup: 'serving.knative.dev/v1',
    resourcesName: 'services',
  },
};

const resourceTable: ResourceTable = {
  spec: {
    columns: [
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

const columns = resourceTable.spec.columns;

export default async function Home() {
  const services: any[] = (await getList(resourceDetails.spec.resourceGroup, resourceDetails.spec.resourcesName)).items;

  return (
    <main>
      <Container>
        <Box>
           <Card>
            <Typography variant='h2'>{resourceDetails.spec.name}</Typography>
          </Card>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.name}>{column.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service: any, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.name}><ColumnField object={service} column={column} /></TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </main>
  )
}
