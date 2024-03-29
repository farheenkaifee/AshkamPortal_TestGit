import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Divider, Card } from "@mui/material";

import { getPosts } from "../../action/posts";
import { dailyAttendance, logList } from "../../action/posts";
import HalfDoughnutWithPointer from "../Attendance/AttendanceChart";

const AttendanceDetail = ({ currentId, posts }) => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    presentEmployee: "",
    absentEmployee: "",
  });

  const [logData, setLogData] = useState({
    logDate: "",
    logIn: "",
    logOut: "",
  });

  const array = [];

  useEffect(() => {
    array.length = 0;
    dispatch(getPosts()).then(() => {
      // eslint-disable-next-line array-callback-return
      posts.forEach((post) => {
        if (post._id === currentId) {
          for (let i = 0; i < post.logDate.length; i++) {
            array.push({
              logDate: post.logDate[i],
              logIn: post.logIn[i],
              logOut: post.logOut[i],
            });
          }
        }
      });
    });
  }, [currentId]);

  const handleSubmit = async (e) => {
    await dispatch(logList(logData, currentId))
      .then(() => {
        alert("Successfully Logged!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    dispatch(dailyAttendance(formData));
    navigate("/home");
  };

  // eslint-disable-next-line array-callback-return
  posts.forEach((post) => {
    if (post._id === currentId) {
      for (let i = 0; i < post.logDate.length; i++) {
        array.push({
          logDate: post.logDate[i],
          logIn: post.logIn[i],
          logOut: post.logOut[i],
        });
      }
    }
  });

  const role = user.result.role;

  const verifyTheRole = () => {
    if (user.result.role === "admin") {
      return true;
    } else {
      return false;
    }
  };

  const calculateTotalHours = (logIn, logOut) => {
    const loginTime = new Date(`01/01/2022 ${logIn}`);
    const logoutTime = new Date(`01/01/2022 ${logOut}`);

    const diffInMilliseconds = logoutTime - loginTime;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return diffInHours.toFixed(2);
  };

  return (
    <div style={{ marginBottom: "180px" }}>
      <h2
        style={{ color: "#16355d", marginLeft: "20px", fontFamily: "Roboto" }}
      >
        Employee Attendance
      </h2>
      <Divider sx={{ fontSize: "50px", fontWeight: "bold" }} />
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        {verifyTheRole() && (
          <>
            <Grid
              sx={{
                padding: "10px",
                width: "20%",
                backgroundColor: "whitesmoke",
                margin: "0px 20px 0px 20px",
              }}
            >
              <form
                className="time-sheet-form"
                onSubmit={handleAttendanceSubmit}
              >
                <div className="form-group">
                  <label
                    style={{ color: "#16355d", fontFamily: "Roboto" }}
                    htmlFor="projectCode"
                  >
                    Present Employee :
                  </label>

                  <input
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "8px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      color: "#e55d17",
                    }}
                    type="text"
                    id="projectCode"
                    value={formData.presentEmployee}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        presentEmployee: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label
                    style={{ color: "#16355d", fontFamily: "Roboto" }}
                    htmlFor="activityCode"
                  >
                    Absent Employee :
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "8px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      color: "#e55d17",
                    }}
                    type="text"
                    id="activityCode"
                    value={formData.absentEmployee}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        absentEmployee: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  style={{ display: "flex", float: "right", marginTop: "50px" }}
                >
                  <button style={{ fontFamily: "Roboto" }} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </Grid>

            <Grid
              sx={{
                padding: "10px",
                width: "30%",
                backgroundColor: "whitesmoke",
                margin: "0px 20px 0px 20px",
              }}
            >
              <form className="time-sheet-form" onSubmit={handleSubmit}>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label
                    style={{ color: "#16355d", fontFamily: "Roboto" }}
                    htmlFor="logout"
                  >
                    Date :
                  </label>
                  <input
                    style={{ width: "120px" }}
                    width="100"
                    type="date"
                    id="netTime"
                    value={logData.logDate}
                    onChange={(e) =>
                      setLogData({ ...logData, logDate: e.target.value })
                    }
                  />
                </div>

                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label
                    style={{ color: "#16355d", fontFamily: "Roboto" }}
                    htmlFor="login"
                  >
                    Log In Time :
                  </label>
                  <input
                    style={{}}
                    type="time"
                    id="netTime"
                    value={logData.logIn}
                    onChange={(e) =>
                      setLogData({ ...logData, logIn: e.target.value })
                    }
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label
                    style={{ color: "#16355d", fontFamily: "Roboto" }}
                    htmlFor="logout"
                  >
                    Log Out Time :
                  </label>
                  <input
                    width="100"
                    type="time"
                    id="netTime"
                    value={logData.logOut}
                    onChange={(e) =>
                      setLogData({ ...logData, logOut: e.target.value })
                    }
                  />
                </div>
                <div
                  style={{ display: "flex", float: "right", marginTop: "50px" }}
                >
                  <button style={{ fontFamily: "Roboto" }} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </Grid>
          </>
        )}
        <Grid sx={{ padding: "2px" }}>
          <Card sx={{ padding: "5px" }}>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "10px",
                color: "#16355d",
              }}
            >
              Employee Name :{" "}
              {posts.map((post) => {
                if (post._id === currentId) {
                  return post?.firstName + " " + post?.lastName;
                }
                return null;
              })}
            </Typography>
            <div style={{ display: "flex" }}>
              <div>
                <table
                  className="time-sheet-table"
                  style={{
                    padding: "10px",
                    borderCollapse: "collapse",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    // width: "100%",
                    minWidth: "100vh",
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ color: "#16355d", fontFamily: "Roboto" }}>
                        Date
                      </th>
                      <th style={{ color: "#16355d", fontFamily: "Roboto" }}>
                        Log In
                      </th>
                      <th style={{ color: "#16355d", fontFamily: "Roboto" }}>
                        Log Out
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {array.map((item, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            color: "#e55d17",
                            fontFamily: "Roboto",
                            padding: "10px",
                            alignContent: "center",
                            whiteSpace: "pre-wrap", // Add this CSS property
                          }}
                        >
                          {item?.logDate}
                        </td>
                        <td
                          style={{
                            color: "#e55d17",
                            fontFamily: "Roboto",
                            padding: "10px",
                            alignContent: "center",
                            whiteSpace: "pre-wrap", // Add this CSS property
                          }}
                        >
                          {item?.logIn}
                        </td>
                        <td
                          style={{
                            color: "#e55d17",
                            fontFamily: "Roboto",
                            padding: "10px",
                            alignContent: "center",
                            whiteSpace: "pre-wrap", // Add this CSS property
                          }}
                        >
                          {item?.logOut}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {(role === "employee" || role === "manager") && (
                <div style={{ margin: "0px 20px 20px 50px" }}>
                  {posts.map((post, index) => {
                    if (post._id === currentId) {
                      const totalHours = calculateTotalHours(
                        post.logIn[post.logIn.length - 1],
                        post.logOut[post.logOut.length - 1]
                      );
                      return (
                        <div key={index}>
                          <HalfDoughnutWithPointer totalHours={totalHours} />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AttendanceDetail;
