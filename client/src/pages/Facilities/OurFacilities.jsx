import Slider from "../../components/layouts/Slider";
// Example using absolute path
import image1 from "../../assets/Images/FacilitiesImages/FacilityCarousel/image1.jpg";
import image2 from "../../assets/Images/FacilitiesImages/FacilityCarousel/img2.jpg";
import image3 from "../../assets/Images/FacilitiesImages/FacilityCarousel/img3.jpg";
import image4 from "../../assets/Images/FacilitiesImages/FacilityCarousel/img4.jpg";
import image5 from "../../assets/Images/FacilitiesImages/FacilityCarousel/img5.jpg";
import image6 from "../../assets/Images/FacilitiesImages/FacilityCarousel/img6.jpg";

const slides = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  },
  {
    id: 6,
    url: image6,
  }, 
];

const OurFacilities = () => {
  return (
    <div className="py-10 slider-container w-[100vw] h-[100vh] mx-auto flex flex-col tracking-wide text-white bg-secondary align-center items-center">
      <h2 className=" md:text-center lg:text-4xl font-semibold text-white  text-2xl sm:text-3xl font-title">
        FACILITIES   </h2>
      <p className=" text-white md:text-center w-[80%] font-sans md:text-md lg:text-[16px] tracking-wider">
        Welcome to Mysore International School's state-of-the-art facilities
        designed to enhance the learning experience and provide a safe,
        nurturing environment for our students. Our commitment to excellence
        extends beyond the classroom, and our facilities reflect that
        dedication. Explore our campus and discover the resources that make
        Mysore International School a unique place of learning.{" "}
      </p>
      <div className="w-[60%] h-[100%]  self-center my-10">
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default OurFacilities;
