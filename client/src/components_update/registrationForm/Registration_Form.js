import React, { useState, useEffect } from "react";
import {
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/posts";

const RegistrationForm = ({ currentId, setCurrentId }) => {
  const [dob, setdob] = useState("");

  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    maritalStatus: "",
    contactNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    jobTitle: "",
    employeeId: "",
    department: "",
    ReportingManager: "",
    emergencyName: "",
    emergencyAddress: "",
    emergencyContact: "",
    relationship: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    console.log(postData);
  };

  useEffect(() => {
    if (post) return setPostData(post);
  }, [post]);

  const handleReset = () => {
    setPostData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      maritalStatus: "",
      contactNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      pincode: "",
      jobTitle: "",
      employeeId: "",
      department: "",
      ReportingManager: "",
      emergencyName: "",
      emergencyAddress: "",
      emergencyContact: "",
      relationship: "",
      selectedFile: "",
    });
  };

  const handleDOB = (dob) => {
    setdob(dob);
    const UsFormatter = new Intl.DateTimeFormat("en-US");
    const date = UsFormatter.format(dob);
    setPostData({ ...postData, dob: date });
  };

  return (
    <Container
      maxWidth={true}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Paper elevation={24} sx={{ width: "800px", justifyContent: "center" }}>
        <Grid
          sx={{ marginLeft: "30px", marginRight: "30px", marginBottom: "30px" }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Employee Registration Form
              </Typography>
            </div>

            <Divider
              sx={{
                borderWidth: "7px",
              }}
            />

            <div sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  margin: "30px 0px 0px 0px",
                  fontSize: "18px",
                  fontWeight: "200px",
                }}
              >
                Full Name
              </Typography>
              <TextField
                type="text"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                sx={{ marginTop: "10px" }}
                value={postData.firstName}
                onChange={(e) =>
                  setPostData({ ...postData, firstName: e.target.value })
                }
              />
              <TextField
                type="text"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                sx={{ marginTop: "10px" }}
                value={postData.lastName}
                onChange={(e) =>
                  setPostData({ ...postData, lastName: e.target.value })
                }
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid sx={{ fontSize: "20px", marginTop: "40px" }}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
              </Grid>

              <div
                style={{ width: "150px", height: "100px", marginTop: "40px" }}
              >
                <img
                  style={{ width: "150px", height: "100px" }}
                  src={postData.selectedFile}
                  alt="Profile_Picture"
                />
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    slotProps={{
                      textField: {
                        error: false,
                      },
                    }}
                    value={dob}
                    name="birthDate"
                    dateFormat="dd/MM/yyyy"
                    label="Date of Birth"
                    onChange={handleDOB}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div>
              <FormControl>
                <Typography
                  sx={{
                    margin: "30px 0px 0px 0px",
                    fontSize: "18px",
                    fontWeight: "200px",
                  }}
                >
                  Gender
                </Typography>
                <RadioGroup
                  defaultValue="female"
                  name="controlled-radio-buttons-group"
                  onChange={(e) =>
                    setPostData({ ...postData, gender: e.target.value })
                  }
                >
                  <Radio value="female" label="Female" color="primary" />
                  <Radio value="male" label="Male" color="primary" />
                  <Radio value="other" label="Other" color="primary" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                variant="outlined"
                required
                fullWidth
                type="email"
                name="email"
                label="Email"
                placeholder="example@example.com"
                value={postData.email}
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
              />
            </div>
            <div>
              <select
                style={{
                  width: "300px",
                  height: "50px",
                  fontSize: "16px",
                  marginTop: "30px",
                }}
                name="maritalStatus"
                onChange={(e) =>
                  setPostData({ ...postData, maritalStatus: e.target.value })
                }
              >
                <option value="default" selected disabled="disabled" hidden>
                  Marital Status
                </option>

                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>

            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                variant="outlined"
                required
                fullWidth
                label="Contact Number"
                name="contactNumber"
                value={postData.contactNumber}
                onChange={(e) =>
                  setPostData({ ...postData, contactNumber: e.target.value })
                }
              />
            </div>
            <div>
              <Typography
                sx={{
                  margin: "30px 0px 0px 0px",
                  fontSize: "18px",
                  fontWeight: "200px",
                }}
              >
                Address
              </Typography>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Street Address"
                name="streetAddress"
                value={postData.streetAddress}
                onChange={(e) =>
                  setPostData({ ...postData, streetAddress: e.target.value })
                }
              />
            </div>

            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <TextField
                  sx={{ marginTop: "10px" }}
                  variant="outlined"
                  required
                  fullWidth
                  label="City"
                  name="city"
                  value={postData.city}
                  onChange={(e) =>
                    setPostData({ ...postData, city: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  sx={{ marginTop: "10px" }}
                  variant="outlined"
                  required
                  fullWidth
                  label="State"
                  name="state"
                  value={postData.state}
                  onChange={(e) =>
                    setPostData({ ...postData, state: e.target.value })
                  }
                />
              </div>

              <div>
                <TextField
                  sx={{ marginTop: "10px" }}
                  variant="outlined"
                  required
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={postData.pincode}
                  onChange={(e) =>
                    setPostData({ ...postData, pincode: e.target.value })
                  }
                />
              </div>
            </Grid>

            <Divider sx={{ margin: "20px 0px 20px 0px", borderWidth: "7px" }} />
            <h2>Job Informations</h2>
            <div sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Job Role"
                name="jobTitle"
                value={postData.jobTitle}
                onChange={(e) =>
                  setPostData({ ...postData, jobTitle: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Employee Id"
                name="employeeId"
                value={postData.employeeId}
                onChange={(e) =>
                  setPostData({ ...postData, employeeId: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Department"
                name="department"
                value={postData.department}
                onChange={(e) =>
                  setPostData({ ...postData, department: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Reporting Manager"
                name="ReportingManager"
                value={postData.ReportingManager}
                onChange={(e) =>
                  setPostData({ ...postData, ReportingManager: e.target.value })
                }
              />
            </div>

            <Divider sx={{ margin: "20px 0px 20px 0px", borderWidth: "7px" }} />
            <h2>Emergency Contact Informations</h2>
            <div sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                name="emergencyName"
                value={postData.emergencyName}
                onChange={(e) =>
                  setPostData({ ...postData, emergencyName: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Address"
                name="emergencyAddress"
                value={postData.emergencyAddress}
                onChange={(e) =>
                  setPostData({ ...postData, emergencyAddress: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Contact Number"
                name="emergencyContact"
                value={postData.emergencyContact}
                onChange={(e) =>
                  setPostData({ ...postData, emergencyContact: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "10px" }}
                variant="outlined"
                required
                fullWidth
                label="Relationship"
                name="relationship"
                value={postData.relationship}
                onChange={(e) =>
                  setPostData({ ...postData, relationship: e.target.value })
                }
              />
            </div>

            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",

                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Grid>
                <Button type="submit" variant="contained" required fullWidth>
                  Register
                </Button>
              </Grid>

              <Grid>
                <Button
                  variant="contained"
                  onClick={handleReset}
                  required
                  fullWidth
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
