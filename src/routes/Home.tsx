import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Home() {
  const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Top 5 GitHub users
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Tap the username to see more information
        </Typography>

        <Box display="flex" gap={1} mt={2}>
        {topFive.map(user => (
          <Button component={Link} to={`/user/${user}`} variant="contained">{user}</Button>
        ))}
        </Box>
      </Box>
    </Container>
  );
}
