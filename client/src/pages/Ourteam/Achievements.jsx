import React from 'react';
import Slider from '../../components/layouts/Slider';
import LazyLoadImage from '../../components/layouts/Common/LazyLoader';
import image1 from '../../assets/Images/Ourteamslide/ourteam2.jpg';
import image2 from '../../assets/Images/Ourteamslide/ourteam3.jpg';
import image4 from '../../assets/Images/Ourteamslide/ourteam5.jpg';

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
    url: image4,
  },
];

const Achievements = () => {
  return (
    <div className="h-[40rem] mx-auto text-textSecondary my-5 w-[90%] lg:mb-[150px]">
      <Slider slides={slides} imageComponent={LazyLoadImage} />
    </div>
  );
};

export default Achievements;
