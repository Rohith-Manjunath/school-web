import Tilt from 'react-parallax-tilt';
import { useParams } from "react-router-dom";
import { useSingleGalleryQuery } from "../../../../Redux/authApi";
import { LinearProgress, Stack } from '@mui/material';


const GalleryImagesPage = () => {

  const searchParam=useParams()
  const id=searchParam?.id
  const {data,isLoading}=useSingleGalleryQuery(id);
  console.log(data)






  return (
    <div className="mt-12 p-10 bg-secondary">
      <div className="md:grid space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <h2 className="col-span-full text-center font-semibold tracking-wide text-white text-2xl font-custom  sm:text-3xl my-4">{ data?.content?.title}</h2>
            {
                  data?.content ? data?.content?.avatar?.map(img=> (

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
  loading="lazy"
/>
                              
                           
                        </Tilt>

                  )):<Stack className='col-span-full' sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="secondary" />
                 
                </Stack>
            }

      </div>
    </div>

  )
}

export default GalleryImagesPage