import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import App from '../App';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default async function APIs() {
  return (
    <main>
      <App />
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {/* {breadcrumbs} */}
          <Typography key="3" color="text.primary">
            APIs
          </Typography>
        </Breadcrumbs>

      </Container>
    </main>
  )
}
