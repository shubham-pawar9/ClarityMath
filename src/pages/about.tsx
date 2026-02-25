import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h2">About this starter</Typography>
      <Card>
        <CardContent>
          <Typography className="text-slate-700" variant="body1">
            This project uses the Next.js Pages Router with a shared layout, Material UI theme provider, and Tailwind utility classes.
            It is designed to be a production-ready foundation for growing your web app.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
