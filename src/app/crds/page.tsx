import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default async function CRDs() {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* {breadcrumbs} */}
        <Typography key="3" color="text.primary">
          CRDs
        </Typography>
      </Breadcrumbs>
    </>
  )
}
