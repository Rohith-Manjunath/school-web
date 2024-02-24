import Slider from "../../components/layouts/Slider";

const Achievements = () => {
  const slides = [
    {
      id: 1,
      url: "https://source.unsplash.com/random/300×300/?achievement",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/random/300×300/?achievement",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/random/300×300/?game",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/random/300×300/?win",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/random/300×300/?fruit",
    },
  ];

  return (
    <div className=" h-[40rem] mx-auto text-textSecondary my-4 space-y-10 py-10 w-[90%] mb-[220px] lg:mb-[150px]">
    
      <Slider slides={slides} />
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        consequatur perferendis reprehenderit. Quod in, dolore eveniet harum qui
        nesciunt voluptatum molestiae inventore reiciendis alias pariatur iste
        incidunt id, ipsam omnis.
      </p>
    </div>
  );
};

export default Achievements;
