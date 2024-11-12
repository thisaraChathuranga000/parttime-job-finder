import * as React from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            minHeight: 20,
            borderBottom: "1px solid gray",
            boxShadow: "none",
          }}
        >
          <Toolbar>
              <IconButton
                size="extra-large"
                edge="start"
                color="primary"
                aria-label="open drawer"
                sx={{ mr: 1 }}
                component={Link}
                to="/"
              >
                <PanoramaFishEyeIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                color="primary"
                sx={{ display: { xs: "none", sm: "block" } }}
                component={Link}
                to="/"
              >
                Parttimez
              </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack spacing={2} direction="row" marginTop={1} marginRight={1}>
                <Link to="/login">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      fontSize: "12px",
                      width: "100px",
                      height: "30px",
                    }}
                  >
                    Log in
                  </Button>
                </Link>

                <Link to="/sign-up">
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      fontSize: "12px",
                      width: "100px",
                      height: "30px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    component={Link}
                    to="/SignUpStudent"
                    onClick={handleClose}
                  >
                    UnderGraduate
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/SignUpOrg"
                    onClick={handleClose}
                  >
                    Employer
                  </MenuItem>
                </Menu>
              </Stack>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="primary"
                sx={{ marginRight: 1 }}
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="primary"
                sx={{ marginRight: 1 }}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Link to="/internal-profile">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
