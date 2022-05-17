import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet";

export default function Home() {
  const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]

  return (
    <Box>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Top 5 GitHub users
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Tap the username to see more information
          </Typography>

          <Box display="flex" gap={1} mt={2} flexWrap="wrap">
          {topFive.map(user => (
            <Button key={user} component={Link} to={`/user/${user}`} variant="contained">{user}</Button>
          ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
