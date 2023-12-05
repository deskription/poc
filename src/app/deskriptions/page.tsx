import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getAllResources } from '@/local-files';

export default async function Deskriptions() {
  const allResources = await getAllResources();

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* {breadcrumbs} */}
        <Typography key="3" color="text.primary">
          Deskriptions
        </Typography>
      </Breadcrumbs>

      <h2>Resources</h2>

      <TableContainer>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Kind</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allResources.map((resource: any, index) => (
              <TableRow key={index}>
                <TableCell>{resource.kind}</TableCell>
                <TableCell>{resource.metadata?.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
