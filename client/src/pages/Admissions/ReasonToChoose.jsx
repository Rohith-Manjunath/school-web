import { MdLock } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ReasonToChoose = () => {
  const data = [
    {
      id: "1",
      title: "Secure Transactions",
      des: "Our online platform ensures the confidentiality and security of your payment information.",
      icon: <MdLock />,
    },
    {
      id: "2",
      title: "Time-Saving",
      des: "Skip the queues and complete your transactions swiftly, allowing you more time for what matters.",
      icon: <LuClock />,
    },
    {
      id: "3",
      title: "Convenience",
      des: "Pay fees anytime, anywhere, without the need to visit the school in person.",
      icon: <FaMapMarkedAlt />,
    },
  ];

  return (
    <div className="text-textSecondary  px-4 py-8  tracking-wide md:py-16 md:px-8">
      <motion.h2 
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-center font-semibold text-2xl md:text-3xl capitalize">
        A few reasons to choose Online Payment Method
      </motion.h2>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="text-center space-y-10 md:space-y-0 md:grid grid-cols-3 gap-6 md:p-4">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex items-center justify-center p-20">
                <span className="text-6xl">{item.icon}</span>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">{item.title}</h4>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ReasonToChoose;
