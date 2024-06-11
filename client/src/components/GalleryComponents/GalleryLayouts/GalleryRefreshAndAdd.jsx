import { IoAddOutline } from "react-icons/io5"
import { LuRefreshCcw } from "react-icons/lu"

const GalleryRefreshAndAdd = ({isAdmin,fetchData,setIsModalOpen}) => {
  return (
    <>
     {
        isAdmin && <div className="flex items-center justify-center gap-4 absolute top-0 right-0">
        <button onClick={fetchData}>
          <LuRefreshCcw                         title="Refetch Data"
 className="w-full font-semibold my-4 text-[25px] tracking-wider text-white  duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
        </button>
        <button >
         <IoAddOutline                       title="Add Gallery"
 className="w-full font-semibold my-4 text-[30px] tracking-wider text-white duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
        </button>
      </div>
      }
    </>
  )
}

export default GalleryRefreshAndAdd