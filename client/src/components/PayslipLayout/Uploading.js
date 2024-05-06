import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Grid, Typography } from "@mui/material";

import { getPosts, salarySlipData } from "../../action/posts";
import ComboBox from "./ComboBox";
import { useParams } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Uploading = () => {
  const id = useParams();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [selectedFile, setSelectedFile] = useState(null); // Change to null
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (!currentId) setCurrentId(id);
    dispatch(getPosts()).then(() => {
      console.log("Data received");
    });
  }, [currentId, dispatch, id]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Set selected file directly
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (currentId && selectedFile) {
      const formData = new FormData();
      formData.append("pdf", selectedFile);
      formData.append("title", title);

      try {
        await dispatch(
          salarySlipData(currentId, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        );
        console.log("upload:  ", formData);
        alert("Uploaded Successfully!");
        // Refresh the page
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Current ID or file not set");
    }
  };

  return (
    <>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Grid>
          <Card sx={{ textAlign: "center", margin: "50px 0px 50px 100px" }}>
            <Grid
              container
              sx={{
                padding: "30px",
                display: "flex",
                width: "auto",
                justifyContent: "space-evenly",
              }}
            >
              <Grid item sx={{ marginLeft: "20px" }}>
                <ComboBox posts={posts} setCurrentId={setCurrentId} />
              </Grid>
              <Grid item sx={{ display: "flex", marginLeft: "100px" }}>
                <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
                  File Upload
                </Typography>
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleTitleChange}
                    placeholder="Enter the Title"
                  />
                  <input
                    style={{ marginLeft: "50px" }}
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"
                  />
                </div>
              </Grid>
              <Grid item sx={{ marginLeft: "0px" }}>
                <Button onClick={handleUpload}>
                  upload <FileUploadIcon />
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <Grid>
            <div>
              <table
                className="time-sheet-table"
                style={{
                  padding: "15px",
                  // backgroundColor: "#f2f2f2",
                  borderCollapse: "collapse",
                  border: "1px solid black",
                  marginLeft: "70px",
                  marginRight: "auto",
                  borderSpacing: "0",
                  width: "100%",
                  marginBottom: "10px",
                  maxWidth: "500px",
                }}
              >
                <thead>
                  <tr>
                    <th>abc</th>
                  </tr>
                </thead>
              </table>
            </div>
          </Grid>
          <Grid>
            <div>
              <table
                className="time-sheet-table"
                style={{
                  padding: "15px",
                  // backgroundColor: "#f2f2f2",
                  borderCollapse: "collapse",
                  border: "1px solid black",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderSpacing: "0",
                  width: "100%",
                  marginBottom: "10px",
                  maxWidth: "800px",
                }}
              >
                <thead>
                  <tr>
                    <th>abc</th>
                  </tr>
                </thead>
              </table>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Uploading;