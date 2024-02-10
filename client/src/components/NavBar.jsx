import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
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
            <AccountCircleIcon className="text-white" sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
