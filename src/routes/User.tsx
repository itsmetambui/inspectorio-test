import * as React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider  from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";

import { User } from '../types/user';

const UserBox = ({ avatarUrl, username, location }: { avatarUrl: string, username: string, location:string }) => (
  <Box display="flex" gap={2}>
    <Avatar
      alt={username}
      src={avatarUrl}
      sx={{ width: 56, height: 56 }}
    />
    <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
      <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
        {username}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom color={grey[500]} fontSize={14}>
        {location}
      </Typography>
      <Divider />
    </Box>
  </Box>
)

export default function UserPage() {
  const { username } = useParams();

  const { isLoading, error, data } = useQuery<User>(['users', username], () =>
    fetch(`https://api.github.com/users/${username}`).then(res =>
      res.json()
    ),
    {
      enabled: !!username
    }
  )

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            component={Link}
            to="/"
            sx={{
              zIndex: 1
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center", position: "absolute", left: 0, width: "100%" }}>
            Person
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error || !data ? (
          <p>An error has occurred</p>
        ) : (
          <UserBox avatarUrl={data.avatar_url} username={data.login} location={data.location} />
        )}
        </Box>
      </Container>
    </Box>
  )
}
