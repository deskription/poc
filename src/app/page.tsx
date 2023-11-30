import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default async function Home() {
  return (
    <Container>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* {breadcrumbs} */}
        <Typography key="3" color="text.primary">
          Dashboard
        </Typography>
      </Breadcrumbs>

    </Container>
  )
}
