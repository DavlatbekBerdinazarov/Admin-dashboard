import React from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "../../assets";
import Animate from "./Animate";


const serviceMenus = [
  {
    path: "home",
    title: "Document",
    icon: <OtherHousesOutlinedIcon />,
    state: "Document1"
  },
  {
    path: "employees",
    title: "Employees",
    icon: <PeopleAltOutlinedIcon/>,
    state: "overview"
  },
  {
    path: "tasks",
    title: "Tasks",
    icon: <TextSnippetOutlinedIcon/>,
    state: "insurance"
  },
  {
    path: "userinfo",
    title: "User info",
    icon: <PersonOutlineOutlinedIcon/>,
    state: "userinfo"
  },
  {
    path: "userkpi",
    title: "User KPI",
    icon: < MonitorOutlinedIcon />,
    state: "userkpi"
  },
];

const investmentMenus = [
  {
    path:"settings",
    title: "Sozlamalar",
    icon: <SettingsOutlinedIcon />,
    state: "financeadvice"
  },
  {
    path:"logout",
    title: "Chiqish",
    icon: <ExitToAppOutlinedIcon />,
    state: "savingaccount"
  }
];

const Sidebar = ({ sidebarWidth }) => {
  const activeState = serviceMenus.state
  const navigate = useNavigate()

  // const container = window !== undefined ? () => window.document.body : undefined;

  const MenuItem = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.item.path;
  
    return (
      <NavLink exact to={props.item.path}>
        <ListItem onClick={() => {navigate(`${props.item.path}`)}} key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
          <ListItemButton
            sx={{
              borderRadius: "10px",
              bgcolor: isActive ? "#f5f7f9" : "",
              color: isActive ? "#4623e9" : "",
            }}
          >
            <ListItemIcon
              className="sidebar-icon"
              sx={{
                minWidth: "40px",
                color: isActive ? "#4623e9" : "",
              }}
            >
              {props.item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight={600}>{props.item.title}</Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  };
  
  const drawer = (
    <Box
      padding={0}
      paddingBottom={0}
      display="flex"
      bgcolor="#EFF0F4"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
    

      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          
            {/* logo */}
            <Box sx={{ alignItems: "center",display:"flex", gap:"20px", marginLeft:"15px"}}>
              <img src={images.logo} alt="logo" height={55} />
              <Typography variant='h5'>Dashboard</Typography>
            </Box>
            {/* logo */}
          {/* menu group 2 */}
          <List>
            <ListItem>
              <Typography fontWeight={500} color={colors.grey[600]}>
                Main menu
              </Typography>
            </ListItem>
            {serviceMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === item.title}
              />
            ))}
          </List>
          {/* menu group 2 */}

          {/* menu group 3 */}
          <List sx={{position:'fixed', bottom:"0px"}}>
            <ListItem>
              <Typography fontWeight={600} color={colors.grey[600]}>
                Preferences
              </Typography>
            </ListItem>
            {investmentMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 3 */}
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* large screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* large screen */}
    </Box>
  );
};

export default Sidebar;


// <NavLink to={(props.item.path)}>
//         <ListItem  key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
//           <ListItemButton sx={{
//             borderRadius: "10px", 
//             // bgcolor: props.isActive ? "#f7f5fd" : "",
//             // color: props.isActive ? "#4623e9" : "",
//           }}>
//             <ListItemIcon className="sidebar-icon" sx={{
//               minWidth: "40px",
//               // color: props.isActive ? "#4623e9" : "",
//             }}>
//               {props.item.icon}
//             </ListItemIcon>
//             <ListItemText primary={
//               <Typography fontWeight={600}>
//                 {props.item.title}
//               </Typography>
//             } />
//           </ListItemButton>
//         </ListItem>
//       </NavLink>