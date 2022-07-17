import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  CreateSharp,
  Leaderboard,
  MarkEmailRead,
  MarkEmailUnread,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const MainListItems = () => {
  const navigate = useNavigate();

  return (
    <>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <MarkEmailUnread />
        </ListItemIcon>
        <ListItemText primary="Questions" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/answered")}>
        <ListItemIcon>
          <MarkEmailRead />
        </ListItemIcon>
        <ListItemText primary="Answered Questions" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/add-question")}>
        <ListItemIcon>
          <CreateSharp />
        </ListItemIcon>
        <ListItemText primary="Add Questions" />
      </ListItemButton>
      {/* <ListItemButton onClick={() => navigate("/new-questions")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="New Questions" />
      </ListItemButton> */}
      <ListItemButton onClick={() => navigate("/leaderboard")}>
        <ListItemIcon>
          <Leaderboard />
        </ListItemIcon>
        <ListItemText primary="Leaderboard" />
      </ListItemButton>
    </>
  );
};
