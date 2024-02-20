import { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [index, slides.length]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-[100%] relative rounded">
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2  p-2 rounded-md text-white font-bold"
      >
        <IoIosArrowDropleft className="text-5xl rounded-full active:bg-[rgba(0,0,0,0.2)] active:text-red-500 transition-all duration-200 hover:text-red-500 bg-[rgba(0,0,0,0.2)] p-2" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2  p-2 rounded-md text-white font-bold"
      >
        <IoIosArrowDropright className="text-5xl rounded-full active:bg-[rgba(0,0,0,0.2)] active:text-red-500 transition-all duration-200 hover:text-red-500 bg-[rgba(0,0,0,0.2)] p-2" />
      </button>
      <div
        style={{
          backgroundImage: `url(${slides[index].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100%",
          height: "100%",
          transition: "all 0.3s ease",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
      ></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-5 h-1 hover:cursor-pointer focus:bg-white rounded-full ${
                index === i ? "bg-white" : "bg-red-500"
              }`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
