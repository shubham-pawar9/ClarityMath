import Link from 'next/link';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import CalculateRounded from '@mui/icons-material/CalculateRounded';
import FunctionsRounded from '@mui/icons-material/FunctionsRounded';
import PercentRounded from '@mui/icons-material/PercentRounded';
import ScienceRounded from '@mui/icons-material/ScienceRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { alpha, keyframes } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography
} from '@mui/material';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.82; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.82; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const mathIcons = [
  { Icon: CalculateRounded, delay: '0s', top: '8%', left: '8%' },
  { Icon: FunctionsRounded, delay: '0.4s', top: '20%', right: '12%' },
  { Icon: PercentRounded, delay: '0.8s', bottom: '18%', left: '14%' },
  { Icon: ScienceRounded, delay: '1.2s', bottom: '10%', right: '10%' }
] as const;

export default function HomePage() {
  return (
    <Card
      className="overflow-hidden"
      sx={{
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        background: (theme) =>
          `linear-gradient(145deg, ${alpha(theme.palette.primary.light, 0.2)}, ${alpha(theme.palette.secondary.light, 0.16)} 45%, ${theme.palette.background.paper})`
      }}
    >
      <CardContent sx={{ p: { xs: 4, md: 8 }, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none'
          }}
        >
          {mathIcons.map(({ Icon, delay, ...position }, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                ...position,
                color: 'primary.main',
                opacity: 0.35,
                animation: `${float} 3.2s ease-in-out infinite`,
                animationDelay: delay,
                '& svg': {
                  fontSize: { xs: 34, md: 42 },
                  animation: `${rotate} 18s linear infinite`
                }
              }}
            >
              <Icon />
            </Box>
          ))}
        </Box>

        <Stack alignItems="center" spacing={3} textAlign="center">
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.3rem', md: '4.3rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #2563eb, #7c3aed, #0ea5e9)',
              backgroundClip: 'text',
              color: 'transparent',
              animation: `${pulse} 2.4s ease-in-out infinite`
            }}
          >
            ClarityMath
          </Typography>

          <Typography className="max-w-2xl" color="text.secondary" variant="h6">
            Understand formulas visually, discover patterns faster, and build confidence with math animations designed for clarity.
          </Typography>

          <Button
            component={Link}
            endIcon={<ArrowForwardRounded />}
            href="/main"
            size="large"
            startIcon={<AutoAwesomeRounded />}
            variant="contained"
          >
            Explore Math with Clarity
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
