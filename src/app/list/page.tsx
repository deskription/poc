import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getList } from '../k8s';
import ColumnField from '../ColumnField';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { resource, resourceTable } from '@/knative';

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const resourceRef = {
    apiGroup: searchParams.apiGroup || '',
    apiVersion: searchParams.apiVersion || 'v1',
    plural: searchParams.plural || '',
    scope: searchParams.scope || 'namespace',
  }

  const items: any[] = (await getList(resourceRef)).items || [];
  const columns = resourceTable.spec.columns;

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* {breadcrumbs} */}
        <Typography key="3" color="text.primary">
          {searchParams.apiGroup} {searchParams.plural}
        </Typography>
      </Breadcrumbs>

      <TableContainer>
        <Table size='small'>
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
    </>
  )
}
