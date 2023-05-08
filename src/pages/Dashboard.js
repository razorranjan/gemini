import * as React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography, Toolbar, IconButton } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar'
import Chart from './Chart';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {
    const transactions = [
        {
            name: "address1230",
            jc: 4000
        },
        {
            name: "address1231",
            jc: 3000
        },
        {
            name: "address1235",
            jc: 2000
        },
        {
            name: "address1230",
            jc: 2780
        },
        {
            name: "address1237",
            jc: 1890
        },
        {
            name: "address1231",
            jc: 2390
        },
        {
            name: "address1239",
            jc: 3490
        }
    ];
    const [lineData, setLineChartData] = useState([]);
    const [walletAddress, setWalletAddress] = useState('');
    if (walletAddress === '') {
        setWalletAddress(localStorage.getItem('wallet_address'));
    }
    // console.log('localStorage.getItem::::::', localStorage.getItem('wallet_address'));
    // console.log('walletAddress::::::', walletAddress);
    if (lineData.length === 0) {
        setLineChartData(transactions);
    }
    const sendJobcoins = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        // console.log(formData);
        let transaction = {
            name: formData.get('recepient_address'),
            jc: formData.get('amount_to_send')
        };
        // console.log('after',lineData);
        setLineChartData([...lineData, transaction]);
    }
    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault();
        navigate('/');
    }
    // let jobcoins = {
    //     "address1": 50,
    //     "address2": 100,
    //     "address3": 25
    // };
    // const defaultAddressCoins = () => {
    //     return [
    //         {}
    //     ];
    // }
    // console.log(lineData);
    // const drawerWidth = 0;
    const theme = createTheme();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(() => ({
        
      }));
    return (
        <ThemeProvider theme={theme}>  
            <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{ pr: '24px', }}>
                        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{ marginRight: '36px',...(open && { display: 'none' }), }} >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                        <Badge color="secondary">
                            <LogoutIcon onClick={handleLogout}/>
                        </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3} sx={{pt:10}}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 100,}}>
                            <Typography component="div" variant='h5'>Wallet Address: { walletAddress }</Typography>
                            <Typography sx={{ mb: 1.5 }}>Address Balance: JC 980292</Typography>
                        </Paper>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mt: 2 }}>
                            <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={sendJobcoins}>
                                <Typography component="div" variant='h5' sx={{ mb:2 }}>Send Jobcoins</Typography>
                                <TextField id='recepient_address' name='recepient_address' placeholder='Recepient Address' fullWidth label='Recepient Address' sx={{ mb: 2 }}/>
                                <TextField id='amount_to_send' name='amount_to_send' placeholder='Enter Amount' fullWidth label='Jobcoins'/>
                                <Button type='submit' fullWidth variant='contained' sx={{ mt: 2, mb: 2 }}>
                                    Send
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Chart props={lineData}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default Dashboard;