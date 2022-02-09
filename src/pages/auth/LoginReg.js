import React from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic1 from "../../images/pic1.png";

const LoginReg = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "90vh",
        }}
      >
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>

        <Grid item lg={5} sm={7}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Tabs textColor="secondary" indicatorColor="secondary">
                  <Tab
                    label="Login"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  ></Tab>
                </Tabs>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
