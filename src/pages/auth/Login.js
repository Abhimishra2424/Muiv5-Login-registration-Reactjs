import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
    } else {
      console.log("Please fill all the fields");
    }
  };

  return (
    <>
      <Box
        component="form"
        onValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          required
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              mb: 2,
              px: 5,
              color: "white",
              backgroundColor: "red",
            }}
          >
            Login
          </Button>
        </Box>
        <NavLink to={"/"}>Forgot password</NavLink>
        <Alert>All fields are required</Alert>
      </Box>
    </>
  );
};

export default Login;
