import React from "react";

import { Box, Grid, Typography, Divider, Stack, Avatar } from "@mui/material";

import avatar1 from "../../assets/MD.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/sush.jpg";

const ManagingTeam = () => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Box
        sx={{
          display: "flex",
          padding: "3px",
          bgcolor: "#e9edf7",
          boxShadow: 1,
          borderRadius: "10px",
          width: "300px",
          overflow: "hidden",
          position: "relative", // Set position to relative
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <Grid>
            <Typography
              sx={{
                color: "#16355d",
                fontFamily: "Roboto",
                fontWeight: "bolder",
                mt: "5px",
                mb: "1px",
                ml: "10px",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              Leadership
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Stack flexDirection="row">
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                  alt="Femy sharp"
                  src={avatar1}
                />
              </Stack>
            </div>
            <Grid>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Mr.Abhishek kumar
              </Typography>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  fontFamily: "Roboto",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Managing director
              </Typography>
            </Grid>
            {/* <Grid>
              <Typography
                sx={{
                  color: "#f7100c",
                  marginLeft: "30px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Only Today
              </Typography>
            </Grid> */}
          </Grid>
          <Divider orientation="horizontal" />

          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid>
              <div>
                <Stack flexDirection="row">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                    alt="Femy sharp"
                    src={avatar2}
                  />
                </Stack>
              </div>
            </Grid>

            <Grid>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Mr.Santosh kumar jha
              </Typography>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  fontFamily: "Roboto",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                CEO
              </Typography>
            </Grid>

            {/* <Grid>
              <Typography
                sx={{
                  color: "#f7100c",
                  marginLeft: "55px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                21st To 22nd
              </Typography>
            </Grid> */}
          </Grid>
          <Divider orientation="horizontal" />
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid>
              <div>
                <Stack flexDirection="row">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                    alt="Femy sharp"
                    src={avatar3}
                  />
                </Stack>
              </div>
            </Grid>

            <Grid>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Mr. Srinivas Prasanna
              </Typography>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  fontFamily: "Roboto",
                  fontSize: "10px",

                  fontWeight: "bold",
                }}
              >
                CTO
              </Typography>
            </Grid>
          </Grid>

          <Divider orientation="horizontal" />
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid>
              <div>
                <Stack flexDirection="row">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                    alt="Femy sharp"
                    src={avatar4}
                  />
                </Stack>
              </div>
            </Grid>

            <Grid>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Ms. Sushila Ramamoorthi
              </Typography>
              <Typography
                sx={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  fontFamily: "Roboto",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Advisor
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ManagingTeam;
