import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  return (
    <div className="static bg-transparent shadow-none py-1">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <div>
            <IconButton onClick={() => console.log("side Bar icon")}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="flex justify-between gap-3 items-center rounded-lg bg-slate-500 px-4 py-1.5">
            <input
              className="rounded-md bg-slate-300"
              placeholder="  Search..."
            />
            <IconButton>
              <Search className="text-white" />
            </IconButton>
          </div>
        </div>
        <div className="flex items-center ">
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
