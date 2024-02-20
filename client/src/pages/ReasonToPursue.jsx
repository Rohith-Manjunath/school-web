import icon1 from "../assets/Images/HomeImages/Icons/acheivment.svg"; // Adjust the path accordingly
import icon2 from "../assets/Images/HomeImages/Icons/leadership.svg"; // Adjust the path accordingly
import icon3 from "../assets/Images/HomeImages/Icons/idea.svg"; // Adjust the path accordingly
import icon4 from "../assets/Images/HomeImages/Icons/edu_1-8.png"; // Adjust the path accordingly
import { useState } from "react";
import { motion } from "framer-motion";

const ReasonToPursue = () => {
  const [data, setData] = useState([
    {
      expanded: false,
      id: 1,
      icon: icon1,
      title: "Pinnacle of Achievement",
      description:
        "Unlock academic distinction and holistic growth at Mysore International School, where every student reaches new heights of success. Our tailored approach ensures that each student not only achieves success but also develops essential life skills, fostering a well-rounded and empowered individual.",
    },
    {
      expanded: false,
      id: 2,
      icon: icon2,
      title: "Unity in Leadership",
      description:
        "Mysore International School fosters unity in leadership, encouraging collaboration, resilience, and essential skills for a future of influence. Discover a unique educational ethos at Mysore International School, where unity in leadership extends beyond classrooms. Our emphasis on collaboration and resilience equips students with the essential skills needed to navigate.",
    },
    {
      expanded: false,
      id: 3,
      icon: icon3,
      title: "Transformative Learning",
      description:
        "Embark on a transformative education odyssey at Mysore International School, where impactful learning shapes well-rounded, empowered individuals. Embark on an educational odyssey at Mysore International School, where impactful learning shapes well-rounded, empowered individuals.",
    },
    {
      expanded: false,
      id: 4,
      icon: icon4,
      title: "Mastery in Education",
      description:
        "Experience mastery in education at Mysore International School, where devoted educators inspire academic excellence and guide students on a path of personal development. Our commitment is to provide more than just knowledge; we aim to empower students for a future of success and fulfillment.",
    },
  ]);

  const toggleExpanded = (id) => {
    // Toggle the expanded state for the clicked item
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <div className="p-8 text-white bg-secondary space-y-10 tracking-wider md:py-28 md:px-10">
      <div>
        <motion.h5
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold"
        >
          Reason to pursue
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="uppercase font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Mysore International School
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            key={item.id}
            className="space-y-5"
          >
            <img src={item.icon} alt="" className="w-[4rem] h-[4rem]" />
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p
              className={`text-left transition-all duration-400 ${
                item.expanded ? "" : "line-clamp-4"
              } `}
            >
              {item.description}
            </p>
            <button
              className="font-semibold tracking-wider"
              onClick={() => toggleExpanded(item.id)}
            >
              {item.expanded ? "Read less" : "Read more"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReasonToPursue;
