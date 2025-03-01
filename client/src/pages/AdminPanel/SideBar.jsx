import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FaUsers, FaMessage } from 'react-icons/fa6';
import { ImUserCheck } from 'react-icons/im';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { VscGraph,VscDashboard } from "react-icons/vsc";
import { useLogoutMutation } from '../../../Redux/authApi';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../../Redux/UserSlice';
import { useAlert } from 'react-alert';
import { Button } from '@mui/material';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [queriesOpen, setQueriesOpen] = React.useState(false);
  const [enrollmentsOpen, setEnrollmentsOpen] = React.useState(false);
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const logoutUser = async () => {
    try {
      const data = await logout().unwrap();
      alert.success(data?.message);
      dispatch(LogoutUser());
      navigate("/login");
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
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
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          boxShadow: 'none',
        }}
      >
        <Toolbar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#580B57",
            color: "white"
          },
        }}
        variant="permanent"
        anchor="left"
        open={true}
      >
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
            <ListItem button component={Link} to="/admin-marketingCampaigns">
              <ListItemIcon>
                <VscDashboard className="text-2xl" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Marketing Campaign" />
            </ListItem>
          </List>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button component={Button} onClick={logoutUser}>
              <ListItemIcon>
                <FiLogOut className="text-2xl" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </List>
      </Drawer>
    </Box>
  );
}