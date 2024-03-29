import React, { useState, useEffect } from "react";
import { Grid, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../Panel/Panel";

import Inbox from "./Inbox/inbox";
import MessageBody from "./Message/MessageBody";
import { getPosts } from "../../../action/posts";

const Communication = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [currentId, setCurrentId] = useState(user.result.id);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  const verifyTheRole = () => {
    if (user.result.role === "admin" || user.result.role === "manager") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div
        style={{
          padding: "5px",
          display: "flex",
          backgroundColor: "white",
          "@media (maxWidth: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Panel />
        <Grid
          sx={{
            bgcolor: "white",
            display: "flex",
            boxShadow: 2,
            margin: "15px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            style={{
              // border: "0.5px dotted gray",
              background: "white",
              height: "600px",
              overflow: "auto",
              // position: "fixed",
              top: "100px",
              // zIndex: 99999,
              width: "300px",
              pointerEvents: "auto",
              marginLeft: "10px",
              margin: "10px",
            }}
          >
            <div>
              {verifyTheRole()
                ? posts.map((post) => (
                    <div key={post._id} style={{ marginTop: "10px" }}>
                      <Inbox post={post} setCurrentId={setCurrentId} />
                      <Divider
                        variant="inset"
                        sx={{ borderWidth: "1px", fontWeight: "15px" }}
                      />
                    </div>
                  ))
                : posts.map(
                    (post) =>
                      post._id === user.result._id && (
                        <div key={post._id} style={{ marginTop: "10px" }}>
                          <Inbox post={post} setCurrentId={setCurrentId} />
                          <Divider
                            variant="inset"
                            sx={{ borderWidth: "1px", fontWeight: "15px" }}
                          />
                        </div>
                      )
                  )}
            </div>
          </div>

          <div>
            <div style={{ height: "600" }}>
              <div
                style={{
                  // border: "0.5px dotted gray",
                  background: "white",
                  height: "600px",
                  overflow: "auto",
                  // position: "fixed",
                  top: "100px",
                  zIndex: 99999,
                  width: "auto",
                  pointerEvents: "auto",
                }}
              >
                {user &&
                  posts.map(
                    (post) =>
                      post._id === currentId && (
                        <div key={post._id}>
                          {" "}
                          {/* Use post._id as the key */}
                          <MessageBody post={post} currentId={currentId} />
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Communication;
