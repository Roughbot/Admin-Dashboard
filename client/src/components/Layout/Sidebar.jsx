import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  ChevronLeft,
  Group,
  ChevronRightOutlined,
  PublicOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
  TrendingUpOutlined,
  AspectRatio,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    name: "Client Facing",
    icon: null,
  },
  {
    name: "Posts",
    icon: <AspectRatio />,
  },
  {
    name: "Customers",
    icon: <Group />,
  },

  {
    name: "Geography",
    icon: <PublicOutlined />,
  },

  {
    name: "Admin",
    icon: null,
  },
  {
    name: "Trending",
    icon: <TrendingUpOutlined />,
  },
  {
    name: "Settings",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    name: "Reports",
    icon: <PieChartOutlined />,
  },
];

const Sidebar = ({
  user,
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: "text.primary",
              backgroundColor: "background.paper",
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box
            width="100%"
            className="bg-slate-400 flex flex-col justify-between h-full"
          >
            <Box m="1.5rem 2rem 2rem 3rem">
              <div className="flex justify-between items-center">
                <Box className="flex items-center mt-5 gap-2">
                  <Typography variant="h5" color="text.primary">
                    BlackClover
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </div>
            </Box>
            <List>
              {navItems.map(({ name, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={name} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {name}
                    </Typography>
                  );
                }
                const lcText = name.toLowerCase();
                return (
                  <ListItem key={name} disablePadding>
                    <ListItemButton
                      selected={active === lcText}
                      onClick={() => navigate(`/${lcText}`)}
                      sx={{
                        backgroundColor:
                          active === lcText ? "primary.main" : undefined,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: active === lcText && "#F0F3FF",
                          ml: "2rem",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: active === lcText && "#F0F3FF",
                        }}
                        primary={name}
                      />
                      {active === lcText && (
                        <ChevronRightOutlined
                          sx={{
                            ml: "auto",
                            color: active === lcText && "#F0F3FF",
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

            <Box className="py-3 ml-1 bg-slate-400 ">
              <div className="flex items-center notransform mr-3  ml-2 gap-4">
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
                    fontSize="0.9rem"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.7rem"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
