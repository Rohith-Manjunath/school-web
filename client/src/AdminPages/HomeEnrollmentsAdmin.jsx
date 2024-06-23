import { useAlert } from "react-alert";
import { useDeleteEnrollmentMutation, useEnrollmentsQuery } from "../../Redux/adminAuth"
import HomeEnrollmentsCard from "../components/AdminpanelComponents/AdminCards/HomeEnrollmentsCard";
import HomeEnrollmentDeleteModal from "../components/AdminpanelComponents/AdminModals/HomeEnrollmentDeleteModal";
import { useState } from "react";

const HomeEnrollmentsAdmin = () => {

  const {isLoading,data}=useEnrollmentsQuery();

  const [deleteEnrollment, { isLoading:deleteLoading }] = useDeleteEnrollmentMutation();

  const [open,setOpen]=useState(false)

  const alert=useAlert()

  const [id,setId]=useState(null)

  const handleDelete=async(id)=>{

try{

  const data=await deleteEnrollment(id).unwrap();
  alert.success(data?.message)
  setOpen(false)
  return;

}catch(e){

  alert.error(e?.data?.err)
  return;

}

  }

const handleClose=()=>{

  setOpen(false)
  setId(null)

}
const handleOpen=(id)=>{

  setOpen(true)
  setId(id)

}

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 w-full">

      {
        data?.data?.map(user=>(
          <HomeEnrollmentsCard key={user?._id} user={user} handleOpen={handleOpen} handleClose={handleClose}/>
        ))
      }

    </div>

<HomeEnrollmentDeleteModal handleClose={handleClose} handleOpen={handleOpen} deleteLoading={deleteLoading} handleDelete={handleDelete} id={id} open={open}/>

</>



  )
}

export default HomeEnrollmentsAdmin