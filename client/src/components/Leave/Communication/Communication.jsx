import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../Panel/Panel";

import Inbox from "./Inbox/inbox";
import MessageBody from "./Message/MessageBody";
import { getPosts } from "../../../action/posts";

import { Root, Overlay, Content } from "@radix-ui/react-dialog";

const Communication = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [currentId, setCurrentId] = useState(user.result.id);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <div style={{ padding: "5px", display: "flex" }}>
        <div>
          <Panel />
        </div>
        <Grid sx={{ bgcolor: "#047782", display: "flex" }}>
          <div
            style={{
              border: "0.5px dotted gray",
              background: "white",
              height: "600px",
              overflow: "auto",
              // position: "fixed",
              top: "100px",
              // zIndex: 99999,
              width: "350px",
              pointerEvents: "auto",
            }}
          >
            <div>
              {user &&
                posts.map(
                  (post) =>
                    post.name === user.result.name && (
                      <div key={post.name}>
                        <Inbox post={post} setCurrentId={setCurrentId} />
                      </div>
                    )
                )}
            </div>
          </div>

          <div>
            <div style={{ width: "500", height: "600" }}>
              <div
                style={{
                  border: "0.5px dotted gray",
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
