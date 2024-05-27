import React from 'react';

const ReasonToPursueCard = ({ motion, item, toggleExpanded }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      viewport={{ once: true }}
      key={item?.id}
      className="space-y-5"
    >
      <img src={item?.icon} alt="" className="w-[4rem] h-[4rem]" />
      <h3 className="text-2xl font-semibold">{item?.title}</h3>
      <p
        className={`text-left transition-all duration-400 ${
          item?.expanded ? "" : "line-clamp-4"
        }`}
      >
        {item?.description}
      </p>
      <button
        className="font-semibold tracking-wider"
        onClick={() => toggleExpanded(item?.id)}
      >
        {item?.expanded ? "Read less" : "Read more"}
      </button>
    </motion.div>
  );
};

export default ReasonToPursueCard;
