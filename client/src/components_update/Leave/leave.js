import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useStyles from "./style";
import Panel from "../Dashboard/Panel/Panel";
import { sendMail, sendMailData } from "../../action/mail";
import Calender from "../Dashboard/Calender/Calender";
import { CChart } from "@coreui/react-chartjs";
import ChartComponent from "./pieGraph";

const Leave = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);

  const { id } = useParams();

  // console.log(id);

  const [select, setSelect] = useState("");
  const [mailData, setMailData] = useState({
    recipient: "",
    requiredMessage: "",
    subject: "",
  });

  // useEffect(
  //   (mailData) => {
  //     if (mailData) {
  //       setMailData({
  //         recipient: "",
  //         requiredMessage: "",
  //         subject: "",
  //       });
  //     }
  //   },
  //   [mailData]
  // );

  // const date = new Date();

  const [valueTo, setValueTo] = useState();

  const [valueFrom, setValueFrom] = useState();

  const options = [
    { label: "SELECT LEAVE", value: "" },
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "P Leave", value: "P Leave" },
    { label: "Floating Leave", value: "Floating Leave" },
  ];

  const UsFormatter = new Intl.DateTimeFormat("en-US");
  const fromDate = UsFormatter.format(valueTo);
  const toDate = UsFormatter.format(valueFrom);

  const handleSelect = (event) => setSelect(event.target.value);

  switch (select) {
    case "Casual Leave":
      break;

    case "Sick Leave":
      break;

    case "P Leave":
      // console.log("You have selected P Leave");

      break;

    case "Floating Leave":
      // console.log("You have selected Floating Leave");

      break;

    default:
      console.log(Error);
      break;
  }

  const leaveType = select;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mailData) {
      // dispatch(sendMail(mailData, navigate));
      dispatch(sendMailData(id, mailData));
      if (posts) {
        posts.map((post) =>
          navigate(`/mail/${post._id}/communication`, { replace: true })
        );
      }
    }
    clear();
  };

  const clear = () => {
    setMailData({
      recipient: "",
      requiredMessage: "",
      subject: "",
    });
    console.log("clicked me in clear");
  };

  return (
    <div
      className={classes.mainContainer}
      style={{ padding: "5px", display: "flex" }}
    >
      <Panel />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ padding: "3px", textAlign: "center" }}>
          Inbox- farheen.k@ashkamenergy.com
        </Typography>
        <div
          className={classes.mainContainer}
          style={{
            padding: "5px",
            display: "flex",
            marginLeft: "10px",
          }}
        >
          <Card
            elevation={10}
            sx={{
              padding: "10px",
              width: {
                sx: 1.0, // 100%
                sm: 250,
                md: 700,
              },
            }}
          >
            <TextField
              type="email"
              name="recipient"
              label="Recipient"
              variant="outlined"
              required
              fullWidth
              sx={{ marginTop: "10px" }}
              onChange={(e) =>
                setMailData({ ...mailData, recipient: e.target.value })
              }
            />

            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                },
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="From"
                    value={valueTo}
                    onChange={(newValue) => setValueTo(newValue)}
                    required
                    fullWidth
                  />
                </DemoContainer>
              </LocalizationProvider>

              <div style={{ margin: "10px 0px" }}>
                <select
                  value={select ? select : ""}
                  onChange={handleSelect}
                  placeholder="Select Leave"
                  className={classes.dropDown}
                >
                  {options.map((option) => (
                    <option key={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </Grid>

            <Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="To"
                    value={valueFrom}
                    required
                    halfWidth
                    onChange={(newValue) => setValueFrom(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            {select && (
              <TextField
                name="subject"
                label="Subject"
                required
                fullWidth
                sx={{ marginTop: "10px", fontWeight: "500px" }}
                value={
                  (mailData.subject = `Applying for ${leaveType} from ${fromDate} to ${toDate}`)
                }
                onChange={(e) =>
                  setMailData({
                    ...mailData,
                    [e.target.subject]: e.target.value,
                  })
                }
              />
            )}
            <Grid>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                minRows={4}
                sx={{ marginTop: "10px", fontWeight: "200px" }}
                onChange={(e) =>
                  setMailData({
                    ...mailData,
                    requiredMessage: e.target.value,
                  })
                }
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ float: "right", marginTop: "10px" }}
              >
                Send
              </Button>
            </Grid>
          </Card>
          <div style={{ marginLeft: "10px" }}>
            <Card
              elevation={10}
              sx={{
                "@media (max-width: 600px)": {
                  marginTop: "20px",
                },
              }}
            >
              <Calender />
            </Card>
            <Card elevation={10} sx={{ marginTop: "10px", padding: "5px" }}>
              <ChartComponent />
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Leave;

/* <div
                style={{
                  backgroundColor: "#4dabf5",
                  height: "50px",
                  border: "2px solid white",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Total Leave - 24
                </Typography>
              </div>
              <Grid
                sx={{
                  backgroundColor: "#f73378",
                  height: "50px",
                  border: "2px solid white",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Available Leave - 14
                </Typography>
              </Grid> */
