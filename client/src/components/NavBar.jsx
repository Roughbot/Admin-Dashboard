import {
  ArrowDropDownOutlined,
  Menu as MenuIcon,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const NavBar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
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

        <div className="flex items-center ">
          <IconButton onClick={handleMenu}>
            {/* <AccountCircleIcon className="text-white" sx={{ fontSize: 40 }} />
             */}
            <Button
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
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
