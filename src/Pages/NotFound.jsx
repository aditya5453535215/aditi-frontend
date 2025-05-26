import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        bgcolor: '#f5f5f5',
        p: 4,
      }}
    >
      <Typography variant="h1" color="primary" sx={{ fontSize: '6rem' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="h3" sx={{ mb: 4 }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Go to Home
      </Button>
    </Box>
  );
}
