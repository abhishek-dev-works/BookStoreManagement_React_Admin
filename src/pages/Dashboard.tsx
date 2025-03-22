import { Box, Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RecordModal from "../components/RecordModal";
import BookModal from "../components/BookModal";

const Dashboard = () => {
    const [openRecordModal, setOpenRecordModal] = React.useState(false);
    const [openBookModal, setOpenBookModal] = React.useState(false);
  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "#222725" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          py: 8
        }}
      >
        <Button sx={{ bgcolor: "#F7F7F2", color: "black" }}>
          <PersonAddIcon /> New User
        </Button>
        <Button sx={{ bgcolor: "#F7F7F2", color: "black" }} onClick={() => setOpenBookModal(true)}>
          <PostAddIcon /> New Book
        </Button>
        <Button sx={{ bgcolor: "#F7F7F2", color: "black" }} onClick={() => setOpenRecordModal(true)}>
          <AddCircleOutlineIcon /> New Entry
        </Button>
      </Box>
        <RecordModal open={openRecordModal} onClose={() => setOpenRecordModal(false)} />
        <BookModal open={openBookModal} onClose={() => setOpenBookModal(false)} />
    </Box>
  );
};

export default Dashboard;
