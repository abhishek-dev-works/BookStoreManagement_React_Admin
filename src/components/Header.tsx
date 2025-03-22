import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{bgcolor: '#121113'}}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h4" component="div" sx={{color: '#F7F7F2'}}>
          <MenuBookIcon sx={{color: '#F7F7F2'}} fontSize="large"/> {`  Library`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
