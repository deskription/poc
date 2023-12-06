'use client';

import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NextLink from 'next/link'

import SearchDialog from './SearchDialog';

export default function MainNavigationSearchButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ListItemButton href="/search" LinkComponent={NextLink}>
        <ListItemText inset primaryTypographyProps={{ fontWeight: 'bold' }}>Search</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={handleOpen}>
        <ListItemText inset primaryTypographyProps={{ fontWeight: 'bold' }}>Search Modal</ListItemText>
      </ListItemButton>

      <SearchDialog
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
