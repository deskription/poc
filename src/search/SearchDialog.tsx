'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';

import Search from './Search';

export interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog(props: SearchDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog open={props.open} fullScreen={fullScreen} fullWidth maxWidth="md" onClose={props.onClose}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            {/* TODO: translation */}
            Search
          </Box>
          <Button onClick={props.onClose}>
            {/* TODO: translation */}
            ESC
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Search onClose={props.onClose} />
      </DialogContent>
    </Dialog>
  )
}
