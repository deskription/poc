import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MainNavigation from './MainNavigation';

export default function App() {
  return (
    <Drawer variant="permanent">
      <MainNavigation />
    </Drawer>
  );
}
