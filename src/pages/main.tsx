import { Card, CardContent, Chip, Grid2, Stack, Typography } from '@mui/material';

const concepts = [
  {
    title: 'Algebra',
    text: 'Manipulate equations, simplify expressions, and solve unknown values step by step.'
  },
  {
    title: 'Geometry',
    text: 'Explore shapes, angles, and spatial reasoning through visual intuition and proofs.'
  },
  {
    title: 'Calculus',
    text: 'Understand change and accumulation with derivatives, integrals, and practical examples.'
  },
  {
    title: 'Trigonometry',
    text: 'Master sine, cosine, and tangent relationships across triangles and periodic functions.'
  },
  {
    title: 'Probability',
    text: 'Model uncertainty, random outcomes, and expected values for real-world decisions.'
  },
  {
    title: 'Statistics',
    text: 'Interpret data distributions, variability, and confidence with meaningful visual summaries.'
  }
];

export default function MainPage() {
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Chip color="primary" label="Main Page" sx={{ width: 'fit-content' }} />
        <Typography variant="h2">Mathematics Learning Boxes</Typography>
        <Typography className="max-w-3xl text-slate-600" variant="body1">
          Pick a topic to begin learning with clear explanations and structured practice.
        </Typography>
      </Stack>

      <Grid2 container spacing={3}>
        {concepts.map((item) => (
          <Grid2 key={item.title} size={{ xs: 12, sm: 6, lg: 4 }}>
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
    </Stack>
  );
}
