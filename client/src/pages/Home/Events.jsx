import Slider from "react-slick";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      title: "ES House Event: Yoga",
      duration: "Duration : All day",
      day: "Wed - Nov",
      date: "22",
    },
    {
      title: "ES House Event: Yoga",
      duration: "Duration : All day",
      day: "Wed - Nov",
      date: "22",
    },
    {
      title: "ES House Event: Yoga",
      duration: "Duration : All day",
      day: "Wed - Nov",
      date: "22",
    },
    {
      title: "ES House Event: Yoga",
      duration: "Duration : All day",
      day: "Wed - Nov",
      date: "22",
    },
  ];

  return (
    <div className="w-[90%] py-20 mx-auto tracking-wide font-semibold">
      <Slider {...settings} className="">
        {data.map((item) => {
          return (
            <div
              className="text-center text-textSecondary rounded-md border m-auto mr-10"
              key={item.title}
            >
              <div className="bg-white underline underline-offset-4 p-8">
                {item.title}
              </div>
              <div className="py-14 bg-secondary text-white space-y-2">
                <span className="font-semibold">{item.day}</span>
                <h2 className="font-semibold text-8xl">{item.date}</h2>
              </div>
              <div className="p-6 bg-white ">{item.duration}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Events;
