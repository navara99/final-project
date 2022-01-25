import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import Unauthorized from "./Unauthorized/index";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const LogIn = ({
  setCurrentUser,
  currentUser,
  logout,
  setErrorMessage,
  setShowError,
}) => {
  const navigate = useNavigate();

  useTitle("Login");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const logInDetail = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const { data } = await axios.post("/api/users/login", logInDetail);
      const { error } = data;

      if (error) {
        setErrorMessage(error);
        setShowError(true);
      }
      if (!error) {
        setCurrentUser(data);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (currentUser) {
    return <Unauthorized action="login again" logout={logout} />;
  }

  return (
    <Container className="centered-container" maxWidth="xs">
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
