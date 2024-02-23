const Hero = ({ text, image, description }) => {
  return (
    <div
      className="flex items-center justify-start min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-start bg-white ] text-textSecondary w-full  p-10 rounded-md mx-10 text-[13px] md:text-[15px] lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sans">
          {text}
        </h1>
        <p className="mb-8 font-semibold font-sans tracking-wide">{description}</p>
        {/* <a
          href={"#directory"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
