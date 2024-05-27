import { IoAddOutline } from 'react-icons/io5'
import { LuRefreshCcw } from 'react-icons/lu'

const NewsAddAndRefresh = ({fetchData,setIsModalOpen}) => {
  return (
      <div className="flex items-center justify-end gap-2">
      <button onClick={fetchData} className="">
        <LuRefreshCcw title="Refetch Data" className="w-full font-semibold my-4 text-[25px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
      </button>
      <button>
       <IoAddOutline title="Add News" className="w-full  font-semibold my-4 mx-1  text-[30px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
      </button>
      </div>
  )
}

export default NewsAddAndRefresh