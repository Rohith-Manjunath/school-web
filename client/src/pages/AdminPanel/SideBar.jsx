import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FaUsers, FaMessage } from 'react-icons/fa6';
import { ImUserCheck } from 'react-icons/im';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { VscGraph } from "react-icons/vsc";


const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminPanel() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [queriesOpen, setQueriesOpen] = React.useState(false);
  const [enrollmentsOpen, setEnrollmentsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleQueriesClick = () => {
    setQueriesOpen(!queriesOpen);
  };

  const handleEnrollmentsClick = () => {
    setEnrollmentsOpen(!enrollmentsOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={drawerOpen}
        style={{
          left: '0px',
          top: '120px',
          backgroundColor: 'transparent',
          color: 'black',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
          >
            <MenuIcon className='text-secondary' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#580B57",
            color:"white"

          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton sx={{color:"white"}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/admin-users">
            <ListItemIcon>
              <FaUsers className="text-2xl" style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleQueriesClick}>
            <ListItemIcon>
              <FaMessage style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Queries" />
            {queriesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={queriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/admission-queries">
                <ListItemIcon />
                <ListItemText primary="Admission Queries" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={handleEnrollmentsClick}>
            <ListItemIcon>
              <ImUserCheck className="text-2xl" style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Enrollments" />
            {enrollmentsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={enrollmentsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/parents-enrollments">
                <ListItemIcon />
                <ListItemText primary="Parents Enrollments" />
              </ListItem>
              <ListItem button component={Link} to="/home-enrollments">
                <ListItemIcon />
                <ListItemText primary="Home Enrollments" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin-payments">
              <ListItemIcon>
                <BsFillCreditCard2FrontFill className="text-2xl" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItem>
          </List>
        </List>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/admin-statistics">
            <ListItemIcon>
              <VscGraph className="text-2xl" style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
        <Divider />

        <List component="div" disablePadding>
          <ListItem button component={Link} to="/signout">
            <ListItemIcon>
              <FiLogOut className="text-2xl" style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
       
      </Drawer>
    </Box>
  );
}
