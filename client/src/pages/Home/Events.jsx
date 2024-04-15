import Slider from "react-slick";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDeleteEventByIdMutation, useEventsQuery } from "../../../Redux/adminAuth";
import { useAlert } from 'react-alert';
import { LuRefreshCcw } from "react-icons/lu";


const Events = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const { isLoading: queryLoading, data: queryData ,refetch} = useEventsQuery();
  const [deletePostMutation] = useDeleteEventByIdMutation();
  const alert = useAlert();

  useEffect(() => {
    setIsLoading(queryLoading);
    setData(queryData);
  }, [queryLoading, queryData]);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this post?")) {
        const data = await deletePostMutation(id).unwrap();
        alert.success(data?.message);
        console.log(data);
        return;
      }
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  const settings = {
    dots: data?.events?.length > 3,
    arrows: data?.events?.length > 3 && true,
    infinite: true,
    speed: 800,
    slidesToShow: Math.min(data?.events?.length, 3),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fetchData=async()=>{
    await refetch()
  }

  return (
    <div className="w-[80%] py-20 mx-auto tracking-wide font-semibold relative">
      {
        isLoading ? <h2>Loading...</h2> :<>
        <button  ><LuRefreshCcw onClick={fetchData} className="w-full font-semibold my-4 text-[25px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90 absolute top-0 right-[-500px]" /></button>
        <Slider {...settings} className="">
          {data?.events?.length > 0 ? (
            data.events.map((item) => (
              <div className="text-center text-textSecondary rounded-md border m-auto mr-10 relative" key={item._id}>
                <div className="bg-white underline underline-offset-4 p-8">{item.title}</div>
                <div className="py-14 bg-secondary text-white space-y-2">
                  <span className="font-semibold">{item.days}</span>
                  <h2 className="font-semibold text-8xl">{item.date}</h2>
                </div>
                <div className="p-6 bg-white">Duration: {item.duration}</div>
                {isAdmin && (
                  <>
                    <MdDelete
                      onClick={() => handleDelete(item?._id)}
                      className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                    />
                    <FaPen
                      className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
                    />
                  </>
                )}
              </div>
            ))
          ) : (
            <h2>No data yet</h2>
          )}
        </Slider>
        </>
      }
    </div>
  );
}

export default Events;
