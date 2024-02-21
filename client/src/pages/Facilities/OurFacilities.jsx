import Slider from "../../components/layouts/Slider";
import image1 from "../../assets/Images/FacilitiesImages/FacilityCarousel/download_1.png"; // Adjust the path accordingly
import image2 from "../../assets/Images/FacilitiesImages/FacilityCarousel/DSC_1109.png"; // Adjust the path accordingly
import image3 from "../../assets/Images/FacilitiesImages/FacilityCarousel/Field-TripCecri-1-min.jpg"; // Adjust the path accordingly
import image4 from "../../assets/Images/FacilitiesImages/FacilityCarousel/school7.png"; // Adjust the path accordingly
import image5 from "../../assets/Images/FacilitiesImages/FacilityCarousel/SchoolEdu.png"; // Adjust the path accordingly

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
];

const OurFacilities = () => {
  return (
    <div className="slider-container w-[90vw] h-[100vh] mx-auto  rounded-lg flex flex-col tracking-wide">
      <h2 className="my-8 md:text-center lg:text-4xl font-semibold text-textSecondary text-2xl sm:text-3xl">
        Facilities
      </h2>
      <p className=" text-textSecondary md:text-center font-semibold text-sm md:text-md lg:text-[16px] tracking-wide">
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
