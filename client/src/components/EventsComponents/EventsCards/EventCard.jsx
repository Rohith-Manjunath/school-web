import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";



const EventCard = ({isAdmin,item,handleDelete,handleEditEvent}) => {
  return (
      <div className="text-center text-textSecondary rounded-md border m-auto mr-10 relative h-[400px]" key={item?._id}>
      <div className="bg-white underline underline-offset-4 p-8 capitalize tracking-wider h-1/3" >{item?.title}</div>
      <div className="py-14 bg-secondary text-white space-y-2 h-1/2">
        <span className="font-semibold uppercase">{item?.days}</span>
        <h2 className="font-semibold text-3xl md:text-4xl">{item?.date}</h2>
      </div>
      <div className="p-6 bg-white h-1/3 uppercase">Duration: {item?.duration}</div>
      {isAdmin && (
       <>
          <MdDelete
            onClick={() => handleDelete(item?._id)}
            className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
            title="Delete Event"
          />
          <FaPen
          onClick={()=>handleEditEvent(item?._id)}
            className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
            title="Edit Event"

          />
        </>
      )}
    </div>
  )
}

export default EventCard