import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const LoginPage = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const fied = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fied] = value;
        setLoginData(newLoginData);


    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();

    }
    return (
        <div style={{ paddingBottom: '1rem', width: '100%' }}>
            <Box sx={{ flexGrow: 1, }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={8} sx={{ mx: "auto" }}>
                        <form onSubmit={handleLogin}>
                            <Typography style={{ marginTop: '10rem', }} variant="h4" component="h2">
                                Login
                            </Typography><br />
                            <Box style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}

                                {authError && <Alert severity="error">{authError}</Alert>}
                            </Box>

                            <TextField sx={{ width: '50%', mt: 5 }}
                                id="standard-password-input"
                                label="email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <TextField sx={{ width: '50%', mt: 5, mb: 2 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                                <Button variant="text">New user?Please register</Button>
                            </NavLink>
                            <br />
                            <Button type="submit" sx={{ width: '50%', mt: 2, backgroundColor: 'rgba(29, 29, 29, 0.849)', marginBottom: '10rem' }} variant="contained">Login</Button><br />

                        </form>
                        {
                            isLoading && <CircularProgress />
                        }


                    </Grid>

                </Grid>
            </Box>



        </div >
    );
};

export default LoginPage;