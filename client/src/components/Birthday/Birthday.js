/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Typography, Avatar, Container } from "@mui/material";



import { getPosts } from "../../action/posts";
// import AlertDialogSlide from "../Birthday/BirthdayMail";
import AlertDialogSlide from "../Birthday/Dialog";

import Image from "../../assets/final.jpg";



const Birthday = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };



  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension]);


  useEffect(() => {
    dispatch(getPosts());
    isBirthdayToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentId]);



  const isBirthdayToday = () => {
    let status = true;
    for (let index = 0; index < posts.length; index++) {
      // eslint-disable-next-line no-loop-func, array-callback-return
      posts.map((post) => {
        // console.log(post.firstName)
        let day = new Date(post.dob).getDate();
        let month = new Date(post.dob).getMonth() + 1;
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        if (currentDay === day && currentMonth === month) {
          status = false;
          // return false
          // return false
        }
      });
    }
    return status;
  };



  

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Container
        sx={{
          display: "flex",
          marginTop: "10px",
          maxWidth: "500px",
          marginLeft: "20px",
          padding: "10px",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: "10px",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
        }}
      >
        <Grid sx={{ display: "flex" }}>
          <div>
            {isBirthdayToday() ? (
              // eslint-disable-next-line jsx-a11y/no-distracting-elements
              <marquee
                direction="down"
                style={{ color: "#047681", fontFamily: "Roboto" }}
              >
                <strong style={{ color: "#e55d17", fontFamily: "Roboto" }}>
                  No Event Today!
                </strong>
                <br />
                <br />
                There are no event today. <br />
                Please check back tomorrow or try again later.
              </marquee>
            ) : (
              <div style={{ padding: "10px", width: "100%" }}>
                {posts.map((post) => {
                  let day = new Date(post.dob).getDate();
                  let month = new Date(post.dob).getMonth() + 1;
                  if (currentDay === day && currentMonth === month) {
                    return (
                      <React.Fragment key={post.dob}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "Roboto",
                            textAlign: "left",
                            color: "#16355d",
                          }}
                        >
                          Happy Birthday To
                        </Typography>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                          {/* <Card
                          elevation={15}
                          sx={{
                            display: "flex",
                            marginTop: "15px",
                            alignItems: "center",
                            width: "70%",
                          }}
                        > */}
                          <Typography>{`\u2022`}</Typography>
                          <Avatar
                            post={post}
                            sx={{
                              width: 31,
                              height: 30,
                              marginLeft: "20px",
                            }}
                            alt="user"
                            src={post.selectedFile}
                          />
                          <Typography
                            post={post}
                            variant="h6"
                            sx={{
                              marginLeft: "20px",
                              fontFamily: "Roboto",
                              fontSize: "18px",
                              color: "#e55d17",
                            }}
                          >
                            {post.firstName + " " + post.lastName}
                          </Typography>
                        </div>
                      </React.Fragment>
                    );
                  }
                })}{" "}
              </div>
            )}
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                backgroundColor: "#16355d",
              }}
            >
              {/* <Typography sx={{ marginLeft: "10px" }}>{`\u2022`}</Typography> */}
              <marquee
                direction="right"
                style={{ color: "", fontFamily: "Roboto" }}
              >
                <strong style={{ color: "white", fontFamily: "Roboto" }}>
                  Holi
                </strong>
              </marquee>

              {/* <Typography sx={{ marginLeft: "30px" }}>Holi</Typography> */}
            </div>
          </div>
          <div
            style={{
              marginRight: "0px",
              bgcolor: "#ecd0f5",
              // fontSize: "13px",
              // marginLeft: "20vh",
            }}
          >
            <AlertDialogSlide />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Birthday;
