import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <Card variant="outlined">
      <CardContent>
        <h3>List of editable tasks on my agenda</h3>
        <ul>
          <li>
            <Link to="/edit">All Tasks</Link>
          </li>

          <li>
            <Link to="/today">Today's Tasks</Link>
          </li>
          <li>
            <Link to="/next7">This Week's Tasks</Link>
          </li>
          <li>
            <Link to="/status">Tasks by Status</Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  </React.Fragment>
);

function Cards() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <div className="mx-20 my-20">
        <Card variant="outlined">{card}</Card>
      </div>
    </Box>
  );
}
export default Cards;
