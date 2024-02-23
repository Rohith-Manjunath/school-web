import Slider from "react-slick";

const Events = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller screens
        },
      },
    ],
  };

  return (
    <div className="w-[80%] py-20 mx-auto tracking-wide font-semibold">
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
