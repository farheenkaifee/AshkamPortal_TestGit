import React from "react";
import { useState } from "react";
import { Box, Grid } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calender = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          bgcolor: " #f2e6e8",
          boxShadow: 1,
          borderRadius: "10px",
          justifyContent: "space-between",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            marginLeft: "20px",
            marginRight: "0px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{
              display: "flex",
              marginLeft: "0px",
              color: "#16355d",
              fontFamily: "Roboto",
            }}
          >
            <DateCalendar
              showDaysOutsideCurrentMonth
              show="true"
              onChange={onChange}
            />
          </LocalizationProvider>
        </Grid>
      </Box>
    </div>
  );
};

export default Calender;
