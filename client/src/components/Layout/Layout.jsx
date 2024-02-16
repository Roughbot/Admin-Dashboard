import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useGetUserQuery } from "../../state/getDataApi";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userId = useSelector((state) => state.user.user);
  const { data } = useGetUserQuery(userId);

  return (
    <div className="flex bg-zinc-300 overflow-auto h-screen">
      <Box display={isNonMobile ? "flex" : "block"} width="100%" heigh="100%">
        <Sidebar
          user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
