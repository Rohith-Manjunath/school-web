import Slider from "react-slick";
import Image1 from "../../assets/Images/HomeImages/NewsAndEventsImages/one.png";
import Image2 from "../../assets/Images/HomeImages/NewsAndEventsImages/two.jpg";
import Image3 from "../../assets/Images/HomeImages/NewsAndEventsImages/three.png";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      title: "Innovation Expo 2023",
      date: "Nov 18 2023 1:00 PM",
      image: Image1,
    },
    {
      title: "Artistic Showcase",
      date: "Nov 18 2023 1:00 PM",
      image: Image2,
    },
    {
      title: "Sports Spectacle",
      date: "Nov 18 2023 1:00 PM",
      image: Image3,
    },
    {
      title: "Innovation Expo 2023",
      date: "Nov 18 2023 1:00 PM",
      image: Image1,
    },
    {
      title: "Artistic Showcase",
      date: "Nov 18 2023 1:00 PM",
      image: Image2,
    },
    {
      title: "Sports Spectacle",
      date: "Nov 18 2023 1:00 PM",
      image: Image3,
    },
  ];

  return (
    <div className="w-[100%] lg:w-[90%] py-20 mx-auto ">
      <Slider {...settings} className="">
        {data.map((item) => {
          return (
            <div
              className="p-6 bg-white rounded-md space-y-4 text-textSecondary font-semibold tracking-wide"
              key={item.title}
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[220px] rounded-lg "
                />
              </div>
              <div className="space-y-4">
                <span className="text-[12px]">{item.date}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>Author</p>
                </div>
                <button className="tracking-wider text-[12px]">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default News;
