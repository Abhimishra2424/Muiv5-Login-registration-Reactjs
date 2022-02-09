import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic1 from "../../images/pic1.png";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>

        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Tabs
                  textColor="secondary"
                  indicatorColor="secondary"
                  value={value}
                  onChange={handleChange}
                >
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
              <TabPanel value={value} index={0}>
                User Login
              </TabPanel>
              <TabPanel value={value} index={1}>
                User Registration
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
