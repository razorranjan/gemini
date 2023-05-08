import * as React from 'react';
import { Container, Typography, Box, CssBaseline, Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
function Login() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        console.log(data.get('wallet_address'));
        navigate('/dashboard');
    };
    return (
        <ThemeProvider theme={theme}>
            <Container>
            <CssBaseline/>
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        <TextField id='wallet_address' margin='normal' required fullWidth label='Wallet Address' name='wallet_address' autoComplete='' autoFocus/>
                        <FormControlLabel control={<Checkbox value='is_remembered' color='primary'/>} label='Remember me' name='is_remembered'/>
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot Wallet Address
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    {"Don't have an address? Create One"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;