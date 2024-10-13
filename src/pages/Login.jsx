import React, { useState } from 'react';
import { Container, Paper, Stack, IconButton, TextField, Typography, Button, Avatar, InputAdornment } from '@mui/material';
import { CameraAlt as CameraAltIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { usernameValidator } from '../utils/validator';
import { useInputValidation } from '6pp';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [avatar, setAvatar] = useState(null); // State to hold the uploaded image
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

    const toggleLogin = () => setIsLogin(prev => !prev); // Toggle between login and signup
    const togglePasswordVisibility = () => setShowPassword(!showPassword); // Toggle password visibility

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAvatar(URL.createObjectURL(event.target.files[0])); // Create a URL for the uploaded image
        }
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        // Handle login logic here
        setTimeout(() => setIsSubmitting(false), 2000); // Simulate loading for 2 seconds
    };

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        // Handle signup logic here
        setTimeout(() => setIsSubmitting(false), 2000); // Simulate loading for 2 seconds
    };

    const name = useInputValidation('',usernameValidator);
    const username = useInputValidation('');
    const password = useInputValidation('');
    const bio = useInputValidation('');

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Paper
                elevation={24}
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            value={username.value}
                            onChange={username.changeHandler}
                            variant="outlined"
                            margin="normal"
                        />

                        {username.error && (
                            <Typography color="error" variant="caption">
                                {username.error}
                            </Typography>
                        )}

                        <TextField
                            required
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password.value}
                            onChange={password.changeHandler}
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            sx={{ marginTop: '1rem' }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>

                        <Typography>Or</Typography>

                        <Button
                            sx={{ marginTop: '1rem' }}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            type="button"
                            onClick={toggleLogin}
                        >
                            Sign up
                        </Button>
                        <Button
                            sx={{ marginTop: '1rem' }}
                            fullWidth
                            variant="text"
                            color="primary"
                        >
                            Forgot Password?
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={handleSignupSubmit}>
                        <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                            <Avatar 
                                sx={{
                                    width: "10rem",
                                    height: "10rem",
                                    objectFit: "contain"
                                }} 
                                src={avatar} // Display the uploaded image
                            />
                            <IconButton 
                                aria-label="upload picture" 
                                sx={{
                                    position: 'absolute', 
                                    bgcolor: 'rgba(255,255,255,0.5)', 
                                    ':hover': { bgcolor: 'rgba(255,255,255,0.7)' }
                                }}
                                component="label" 
                            >
                                <CameraAltIcon />
                                <VisuallyHiddenInput type='file' onChange={handleFileChange} />
                            </IconButton>
                        </Stack>

                        <TextField
                            required
                            fullWidth
                            label="Name"
                            type="text"
                            variant="outlined"
                            margin="normal"
                            value={name.value}
                            onChange={name.changeHandler}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Bio"
                            type="text"
                            variant="outlined"
                            value={bio.value}
                            onChange={bio.changeHandler}
                            margin="normal"
                        />
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={username.value}
                            onChange={username.changeHandler}
                            margin="normal"
                        />

                        <TextField
                            required
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={password.value}
                            onChange={password.changeHandler}
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            sx={{ marginTop: '1rem' }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing up...' : 'Sign up'}
                        </Button>

                        <Typography>Or</Typography>

                        <Button
                            sx={{ marginTop: '1rem' }}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            type="button"
                            onClick={toggleLogin}
                        >
                            Login
                        </Button>
                    </form>
                )}
            </Paper>
        </Container>
    );
};

export default Login;
