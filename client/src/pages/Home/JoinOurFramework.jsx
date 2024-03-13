import React from 'react';
import EarlyYearsImage from "../../assets/Images/HomeImages/joinourframework/EarlyYears.jpg";
import PYPImage from "../../assets/Images/HomeImages/joinourframework/cbse.jpg";
import MYPImage from "../../assets/Images/HomeImages/joinourframework/nios.jpg";

const JoinOurFramework = () => {
  return (
    <div className="flex justify-center bg-secondary py-[80px]">
      <div className="container flex flex-col items-center">
        <div>
          <p className="font-title tracking-wider font-bold text-4xl text-white text-center ">BEGIN YOUR JOURNEY WITH US</p>
          <h2 className="text-center text-2xl font-subtext tracking-wider text-white font-bold">Programme Framework at Mysore International School</h2>
          <p className="text-center pb-5 font-subtext tracking-wider text-white font-semibold tracking-wider text-l">Explore our comprehensive programme offerings designed to nurture your child's growth and development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">

          {/* Card 1 */}
          <div className="  border border-grey-300 bg-white rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary">
            <div>
              <div>
                <a >
                  <img src={EarlyYearsImage} alt="Course Image" className="w-full h-[250px] object-cover" />
                </a>
              </div>
              <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
                <span className="font-title text-3xl font-bold tracking-wider text-secondary">Early Years</span>
                <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">The Early Years Programme</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-grey-300 rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary bg-white">
            <div>
              <div>
                <a >
                  <img src={PYPImage} alt="Course Image" className="w-full h-[250px] object-cover" />
                </a>
              </div>
              <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
                <span className="font-title text-3xl font-bold tracking-wider text-secondary">CBSE</span>
                <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">The CBSE Programme</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-grey-300 rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary bg-white">
            <div>
              <div>
                <a >
                  <img src={MYPImage} alt="Course Image" className="w-full h-[250px] object-cover" />
                </a>
              </div>
              <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
                <span className="font-title text-3xl font-bold tracking-wider text-secondary">NIOS</span>
                <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">The CBSE NIOS Programme</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default JoinOurFramework;
