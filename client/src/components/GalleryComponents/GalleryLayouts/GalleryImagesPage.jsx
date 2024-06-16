import { useSelector } from "react-redux"
import Tilt from 'react-parallax-tilt';
import { useNavigate } from "react-router-dom";


const GalleryImagesPage = () => {

      const images=useSelector(state=>state?.gallery?.images)
      const navigate=useNavigate()

  return (
    <div className="mt-12 p-10 bg-secondary">
      <div className="md:grid space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <h2 className="col-span-full text-center font-semibold tracking-wide text-white text-2xl font-custom  sm:text-3xl my-4">{images?.title}</h2>
            {
                  images?.avatar?.map(img=> (

<Tilt
  key={img?._id}
  glareEnable={true}
  glareMaxOpacity={0.8}
  scale={1.05}
  perspective={1000}
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  transitionSpeed={400}
>

<img
  onClick={() => window.location.href = img?.url}
  className="rounded-md border-white border-2 hover:cursor-pointer"
  src={img?.url}
  alt={img?.title}
/>
                              
                           
                        </Tilt>

                  ))
            }

      </div>
    </div>
  )
}

export default GalleryImagesPage