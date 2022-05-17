import * as React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function User() {
  const { username } = useParams();

  const { isLoading, error, data } = useQuery(['users', username], () =>
    fetch(`https://api.github.com/users/${username}`).then(res =>
      res.json()
    ),
    {
      enabled: !!username
    }
  )

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error has occurred</p>
        ) : (
          <h1>User {data.login}</h1>
        )}
      </Box>
    </Container>
  )
}
