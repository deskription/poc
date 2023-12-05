import type { Metadata } from 'next'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ThemeRegistry from '@/theme/ThemeRegistry'
import MainNavigation from './MainNavigation'

export const metadata: Metadata = {
  title: 'Deskription POC',
}

const drawerWidth = 400;

export default async function RootLayout(props: { children: React.ReactNode }) {
  console.log('xxx RootLayout props', props);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>

          <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: 1300 }}>
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  🔥 POC
                </Typography>
              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              <Toolbar />
              <nav>
                <MainNavigation />
              </nav>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <main>
                {props.children}
              </main>
            </Box>
          </Box>

        </ThemeRegistry>
      </body>
    </html>
  )
}
