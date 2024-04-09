const Hero = ({ text, image, description }) => {
  return (
    <div
      className="flex items-center justify-start h-[70vh] md:h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-start bg-white ] text-textSecondary w-full  p-10 rounded-md mx-10 text-[13px] md:text-[15px] lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  font-title">
          {text}
        </h1>
        <p className="m tracking-wide font-description">{description}</p>
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
