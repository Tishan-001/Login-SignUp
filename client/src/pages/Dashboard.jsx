import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { useAuth } from '../context/AuthContext.jsx';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function Dashboard() {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
              Dashboard
            </Typography>
            <Divider sx={{ width: '100%', mb: 3 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              Welcome,
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              {userData?.firstname} {userData?.lastname}
            </Typography>
            <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={handleLogout}
                  sx={{ mb: 2 }}
                >
                  Logout
                </Button>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}