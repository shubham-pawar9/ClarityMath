import Link from 'next/link';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid2,
  Stack,
  Typography
} from '@mui/material';

export default function HomePage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Chip color="primary" label="Professional Setup" sx={{ mb: 2 }} />
        <Typography gutterBottom variant="h1">
          Next.js + TypeScript + Tailwind + Material UI
        </Typography>
        <Typography className="max-w-3xl text-slate-600" variant="body1">
          Your app is configured with modern tooling, component architecture, and page routing using the Pages Router.
        </Typography>
      </Box>

      <Grid2 container spacing={3}>
        {[
          { title: 'Type-Safe Foundation', text: 'TypeScript strict mode, aliases, and linting ready.' },
          { title: 'Styling Layer', text: 'Tailwind utilities plus MUI theming with a clean design system.' },
          { title: 'Routing', text: 'Pages Router configured with example routes and shared layout.' }
        ].map((item) => (
          <Grid2 key={item.title} size={{ xs: 12, md: 4 }}>
            <Card className="h-full">
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>
                <Typography className="text-slate-600" variant="body2">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Box>
        <Button component={Link} endIcon={<ArrowForwardRounded />} href="/about" size="large" variant="contained">
          View About Page
        </Button>
      </Box>
    </Stack>
  );
}
