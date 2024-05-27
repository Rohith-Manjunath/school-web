import * as React from "react";
import Box from "@mui/system/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../../Redux/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { LogoutUser } from "../../../Redux/UserSlice";

export default function UserOptions({ user }) {
  const [open, setOpen] = React.useState(false);
  const [backdropOpen, setBackdropOpen] = React.useState(false); // Manage backdrop state
  const navigate = useNavigate();
  const [logout,{isLoading,isError,error,data,isSuccess}]=useLogoutMutation()
  const dispatch=useDispatch()
  const alert=useAlert()

  const handleOpen = () => {
    setOpen(true);
    setBackdropOpen(true); // Open backdrop when SpeedDial opens
  };

  const handleClose = () => {
    setOpen(false);
    setBackdropOpen(false); // Close backdrop when SpeedDial closes
  };

 

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

  const logoutUser=async()=>{

    try{

      const data=await logout().unwrap();
      alert.success(data?.message)
      dispatch(LogoutUser())
      navigate("/login")


    }catch(e){
      toast.error(e?.data?.err);
      return;
    }

  }


  const actions = [
    { icon: <PersonIcon />, name: "Profile", func: profile },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },

  ];

  const isAdmin=useSelector(state=>state?.user?.user?.isAdmin ?? false);

  if (isAdmin) {
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
        icon={<img src={user?.avatar?.url} alt="" className="rounded-full w-full h-full" />}
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
  </>
  );
}
