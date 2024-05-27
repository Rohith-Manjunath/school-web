import { IoAddOutline } from "react-icons/io5"
import { LuRefreshCcw } from "react-icons/lu"

const EventsAddAndRefresh = ({fetchData,setIsModalOpen}) => {
  return (
      <div className="flex items-center justify-center gap-4 absolute top-0 right-0">
      <button onClick={fetchData}>
        <LuRefreshCcw                         title="Refetch Data"
className="w-full font-semibold my-4 text-[25px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
      </button>
      <button>
       <IoAddOutline                         title="Add Event"
className="w-full font-semibold my-4 text-[30px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
      </button>
    </div>
  )
}

export default EventsAddAndRefresh