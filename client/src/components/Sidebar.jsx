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
import FlexBetween from "./FlexBetween";
import {
  HomeOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
  TrendingUpOutlined,
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
    name: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    name: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    name: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    name: "Geography",
    icon: <PublicOutlined />,
  },
  {
    name: "Sales",
    icon: null,
  },
  {
    name: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    name: "Daily",
    icon: <TodayOutlined />,
  },
  {
    name: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    name: "Admin",
    icon: null,
  },
  {
    name: "Settings",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    name: "Reports",
    icon: <PieChartOutlined />,
  },
  {
    name: "Trending",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  console.log(isNonMobile);

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
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <div className="flex justify-center items-center">
                <Box className="flex items-center gap-2">
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
                        backgroundColor: active === lcText && "primary.main",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: active === lcText && "common.white",
                          ml: "2rem",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={name} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
