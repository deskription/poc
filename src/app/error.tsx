'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => console.error('app/error', error), [error]);
 
  return (
    <Alert
      severity="error"
      variant="outlined"
      action={
        <Button color="inherit" size="small" onClick={reset}>
          Retry
        </Button>
      }
    >
      <AlertTitle>Something went wrong!</AlertTitle>
      <Typography variant="subtitle2">{error.toString()}</Typography>
      <Typography variant="caption">Digest: {error.digest}</Typography>
    </Alert>
  );
}
