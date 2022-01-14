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
  const { email, setEmail, handleEmailChange } = useInput("");
  const { username, setUsername, handleUsernameChange } = useInput("");
  const { password, setPassword, handlePasswordChange } = useInput("");
  const { confirmPassword, setConfirmPassword, handleConfirmPasswordChange} = useInput("");
  const { firstName, setFirstName, handleFirstNameChange } = useInput("");
  const { lastName, setLastName, handleLastNameChange } = useInput("");

  return (
    <Container>
      <form onSubmit={() => { }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ width: "100%", margin: 0 }}
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Typography component="div"><h1>V Career</h1></Typography>
          </Grid>
          <Grid item>
            <Typography component="div"><h2>Register</h2></Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              onChange={() => { }}
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
              onChange={() => { }}
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
              helperText={"Test"}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Lock /></InputAdornment>) }}
              onChange={() => { }}
              type="password"
              required></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Confirm Password"
              error={true}
              helperText={"Test"}
              InputProps={{ startAdornment: (< InputAdornment position="start" ><Lock /></InputAdornment>) }}
              onChange={() => { }}
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
