import {
  ArrowDropDownOutlined,
  Logout,
  Menu as MenuIcon,
  PersonAdd,
  Search,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NavBar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleMenu = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="static bg-transparent shadow-none">
      <div className="flex flex-row justify-between  bg-slate-500">
        <div className="flex items-center  bg-slate-500">
          <div>
            <IconButton
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="flex justify-between gap-3 items-center bg-slate-600 px-4 py-1.5">
            <input
              className="rounded-md bg-slate-300"
              placeholder=" Search..."
            />
            <IconButton>
              <Search className="text-white" />
            </IconButton>
          </div>
        </div>

        {/* Right side of the navbar */}

        <div className="flex items-center bg-slate-600">
          <Button
            onClick={handleMenu}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              alt="profile"
              src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
              height="40px"
              width="40px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{
                  color: "white",
                }}
              >
                {user.name}
              </Typography>
              <Typography
                fontSize="0.75rem"
                sx={{
                  color: "white",
                }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <ArrowDropDownOutlined
              className="text-white"
              sx={{
                fontSize: "25px",
              }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={isOpen}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
