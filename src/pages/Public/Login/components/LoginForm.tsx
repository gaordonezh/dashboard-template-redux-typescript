import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {  Visibility, VisibilityOff } from '@mui/icons-material';



const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = () => {
    navigate("/admin/dashboard")
  }

  return (

    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email address"
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">

                  {showPassword ? (

                    <Visibility />
                  ) : (
                    <VisibilityOff />

                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}

        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
        />

        <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Login
      </LoadingButton>
    </form>

  );
}

export default LoginForm