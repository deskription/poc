import type { Metadata } from 'next'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { Container, Drawer } from '@mui/material'
import MainNavigation from './MainNavigation'

export const metadata: Metadata = {
  title: 'Deskription POC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Drawer variant="permanent">
            <nav>
              <MainNavigation />
            </nav>
          </Drawer>
          <main>
            <Container>
              {children}
            </Container>
          </main>
        </ThemeRegistry>
      </body>
    </html>
  )
}
