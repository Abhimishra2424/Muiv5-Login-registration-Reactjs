import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              abhi-shop
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#ffc107" : "",
                };
              }}
              sx={{
                color: "white",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              sx={{
                color: "white",
                textTransform: "none",
              }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#ffc107" : "",
                };
              }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="/login"
              sx={{
                color: "white",
                textTransform: "none",
              }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#ffc107" : "",
                };
              }}
            >
              Login/Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
