import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Breadcrumbs, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default async function Buttons() {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* {breadcrumbs} */}
        <Typography key="3" color="text.primary">
          Buttons
        </Typography>
      </Breadcrumbs>

      <Button>Primary</Button><br/><br/>
      <Button disabled>Disabled</Button><br/><br/>
      <Button href="#text-buttons">Link</Button><br/><br/>

      <Button variant="text">Text</Button><br/><br/>
      <Button variant="contained">Contained</Button><br/><br/>
      <Button variant="outlined">Outlined</Button><br/><br/>

      <Button variant="contained">Contained</Button><br/><br/>
      <Button variant="contained" disabled>
        Disabled
      </Button><br/><br/>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button><br/><br/>

      <Button variant="outlined">Primary</Button><br/><br/>
      <Button variant="outlined" disabled>
        Disabled
      </Button><br/><br/>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button><br/><br/>

      <Button color="secondary">Secondary</Button><br/><br/>
      <Button variant="contained" color="success">
        Success
      </Button><br/><br/>
      <Button variant="outlined" color="error">
        Error
      </Button><br/><br/>
    </>
  )
}
