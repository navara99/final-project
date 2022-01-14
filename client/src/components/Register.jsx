import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  InputAdornment,
  TextField,
  Box
} from '@mui/material'
import { Person, Email, Lock } from "@mui/icons-material"
import useInput from '../hooks/useInput'

function Register() {
  const [email, handleEmailChange] = useInput("");
  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const [firstName, handleFirstNameChange] = useInput("");
  const [lastName, handleLastNameChange] = useInput("");

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={registerUser}>
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ width: "100%", margin: 0 }}
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Typography component="div"><h2>Register</h2></Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              onChange={handleFirstNameChange}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Person /></InputAdornment>) }}
              label="First Name"
              error={false}
              required
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              onChange={handleLastNameChange}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Person /></InputAdornment>) }}
              label="Last Name"
              error={false}
              required
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              onChange={handleEmailChange}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Email /></InputAdornment>) }}
              label="Email"
              type="email"
              error={false}
              required
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              onChange={handleUsernameChange}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Person /></InputAdornment>) }}
              label="Username"
              error={false}
              required
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Password"
              error={false}
              helperText={""}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Lock /></InputAdornment>) }}
              onChange={handlePasswordChange}
              type="password"
              required></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Confirm Password"
              error={false}
              helperText={""}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Lock /></InputAdornment>) }}
              onChange={handleConfirmPasswordChange}
              type="password"
              required></TextField>
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >Sign Up</Button>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" style={{ width: "100%" }}>
              <Typography component="div"><h5>Already have an account?</h5></Typography>
              <Button color="primary" href="/login">Login</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Register
