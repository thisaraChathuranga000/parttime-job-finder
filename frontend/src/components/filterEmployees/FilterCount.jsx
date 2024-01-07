import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = ["Select", "Select All"];

const ITEM_HEIGHT = 48;

function FilterCount() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25",}}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 4px 8px #4A4A4A",
          marginBottom: "20px",
          border: "1px solid #0069c4",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginLeft: "40px" }}
          >
            All Peoples - 836
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: "520px" }}>
          <Button size="large" sx={{ textTransform: "none" }}>
            Send request
          </Button>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                   
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default FilterCount;
