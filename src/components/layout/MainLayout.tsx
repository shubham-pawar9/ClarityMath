import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';

import type { NavItem } from '@/types/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Main', href: '/main' },
  { label: 'About', href: '/about' }
];

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();

  return (
    <Box className="min-h-screen bg-slate-50">
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar className="border-b border-slate-200 bg-white/90 backdrop-blur">
          <Container className="flex items-center justify-between py-2">
            <Typography color="primary" fontWeight={700} variant="h6">
              ClarityMath
            </Typography>
            <Stack direction="row" spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color={router.pathname === item.href ? 'primary' : 'inherit'}
                  component={Link}
                  href={item.href}
                  variant={router.pathname === item.href ? 'contained' : 'text'}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Container className="py-12">{children}</Container>
    </Box>
  );
}
