import { useEnrollmentsQuery } from "../../Redux/adminAuth"
import HomeEnrollmentsCard from "../components/AdminpanelComponents/AdminCards/HomeEnrollmentsCard";

const HomeEnrollmentsAdmin = () => {

  const {isLoading,data}=useEnrollmentsQuery();

  console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 w-full">

      {
        data?.data?.map(user=>(
          <HomeEnrollmentsCard key={user?._id} user={user}/>
        ))
      }

    </div>
  )
}

export default HomeEnrollmentsAdmin