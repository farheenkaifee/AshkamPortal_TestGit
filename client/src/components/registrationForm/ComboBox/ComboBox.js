import React, { useState } from "react";
import { Card } from "@mui/material";

const ComboBox = ({ posts, setCurrentId }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setCurrentId(value);
  };

  return (
    // <Card elevation={5} sx={{ backgroundColor: "blue" }}>
    <select
      value={selectedOption}
      onChange={handleChange}
      style={{
        color: "#16355d",
        float: "right",
        marginTop: "10px",
        width: "200px",
        backgroundColor: "#f2f2f2",
        fontFamily: "Roboto",
        fontSize: "15px",
      }}
    >
      <option
        style={{ fontWeight: "bold", textAlign: "center", fontStyle: "italic" }}
        value=""
      >
        Select Employee{" "}
      </option>
      {posts.map((option, index) => (
        <option key={index} value={option._id}>
          {option.firstName.charAt(0).toUpperCase() +
            option.firstName.slice(1).toLowerCase() +
            " " +
            option.lastName.charAt(0).toUpperCase() +
            option.lastName.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
    // </Card>
  );
};

export default ComboBox;
