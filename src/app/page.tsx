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
import ColumnField from './ColumnField';
import App from './App';

import { resource, resourceTable } from '@/knative';

export default async function Home() {
  const items: any[] = (await getList(resource)).items;
  const columns = resourceTable.spec.columns;

  return (
    <main>
      <App />
      <Container>
        <Box>
           <Card>
            <Typography variant='h2'>{resource.spec.name}</Typography>
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
              {items.map((item: any, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.name}><ColumnField object={item} column={column} /></TableCell>
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
