import * as React from "react";
import Box from "@mui/system/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLogoutMutation } from "../../../Redux/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../Redux/UserSlice";


export default function UserOptions({ user }) {
  const [open, setOpen] = React.useState(false);
  const [backdropOpen, setBackdropOpen] = React.useState(false); // Manage backdrop state
  const navigate = useNavigate();
  const [logout,{isError,isLoading,error}]=useLogoutMutation()
  const dispatch=useDispatch()

  const handleOpen = () => {
    setOpen(true);
    setBackdropOpen(true); // Open backdrop when SpeedDial opens
  };

  const handleClose = () => {
    setOpen(false);
    setBackdropOpen(false); // Close backdrop when SpeedDial closes
  };

  React.useEffect(()=>{


    if(isError && error.data.err.trim()==="jwt expired"){
      toast.error(error.data.err)
      navigate("/login");

    }

  },[isError,error,navigate])

  const handleBackdropClick = () => {
    setOpen(false);
    setBackdropOpen(false); // Close SpeedDial and backdrop on backdrop click
  };

  const dashboard = () => {
    navigate("/admin-panel");
  };
  const profile = () => {
    navigate("/profile");
  };

  const logoutUser = async() => {

    try{
const data=await logout();
toast.success(data.message)
navigate("/login");
dispatch(clearUser())

    }catch(e){
      toast.error(e.message)
    }

  };

  if(isLoading){
    return <h2>Loading...</h2>
  }

  const actions = [
    { icon: <PersonIcon />, name: "Profile", func: profile },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },

  ];

  if (user.isAdmin) {
    actions.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
  <>
    <Box
      sx={{
        position: "fixed",
        top: "5.5rem",
        right: "1.5rem",
        zIndex: 100,
        height: open ? "auto" : "2rem",
      }}
    >
      {backdropOpen && <div className="backdrop" onClick={handleBackdropClick} />} {/* Render backdrop if open */}
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<img src={user.avatar.url} alt="" className="rounded-full w-full h-full" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.func}
            style={{ visibility: open ? "visible" : "hidden" }}
          />
        ))}
      </SpeedDial>
    </Box>
    <ToastContainer/>
  </>
  );
}
