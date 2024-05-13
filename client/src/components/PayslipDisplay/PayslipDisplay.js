import React, { useEffect, useState } from "react";
import Uploading from "./PayslipLayout/Uploading";
import SlipDownload from "./PayslipDownload/SlipDownload";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../action/posts";
import { useParams } from "react-router-dom";
import Panel from "../Panel/Panel";

const PayslipDisplay = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("profile"));
  // const role = user.result.department;
  const verify = () => {
    if (
      // user.result.role === "admin" ||
      (user.result.department.toLowerCase() === "human resource" &&
        user.result.role === "manager") ||
      user.result.role === "admin"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [currentId, setCurrentId] = useState(id);
  const [post, setPost] = useState();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts) {
      dispatch(getPosts());

      posts.map((post) => {
        if (post._id === currentId) {
          setPost(post);
        }
      });
    }
  }, [dispatch, currentId]);

  console.log(window.innerWidth);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // "@media (max-width: 600px)": {
        //   flexDirection: "row",
        //   // width: "50%",
        // },
      }}
    >
      <div>
        <strong
          style={{
            color: "#16355d",
            marginLeft: "50px",
            fontFamily: "Roboto",
            fontSize: "30px",
          }}
        >
          Salary Slip
        </strong>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div>
          <Panel />
        </div>
        <div>
          {verify() === true && (
            <Uploading
              posts={posts}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          )}

          <SlipDownload posts={posts} currentId={currentId} />
        </div>
      </div>
    </div>
  );
};

export default PayslipDisplay;
