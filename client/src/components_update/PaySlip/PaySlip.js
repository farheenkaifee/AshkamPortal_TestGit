import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Divider,
  Input,
  TextField,
  Container,
} from "@mui/material";

const PaySlip = () => {
  return (
    <div
      maxWidth="true"
      style={{
        display: "flex",
        // justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {/* <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      > */}
      <Paper
        elevation={20}
        sx={{
          display: "flex",
          bgcolor: "background.paper",
          boxShadow: "5px",
          width: "900px",
          marginLeft: "200px",
          // marginRight: "50px",
          marginTop: "10px",
        }}
      >
        <Grid
          sx={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
          }}
        >
          <Grid>
            <Grid>
              <Typography
                variant="h4"
                sx={{
                  // flexGrow: 1,
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Salary Slip
              </Typography>
            </Grid>
            <Divider
              sx={{
                borderWidth: "2px",
              }}
            />

            <Typography sx={{ marginTop: "20px", marginBottom: "0px" }}>
              Employee Pay Summary
            </Typography>

            <Divider orientation="horizontal" color="black" />

            <TextField
              sx={{ display: "flex", mt: "10px" }}
              type="text"
              name="employeeId"
              label="Employee Id"
              variant="outlined"
              fullWidth
              required
            />
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <TextField
                  type="text"
                  name="firstName"
                  // id="standard-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid>
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid>
              <TextField
                type="text"
                name="lastName"
                // id="standard-basic"
                label="last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PaySlip;
