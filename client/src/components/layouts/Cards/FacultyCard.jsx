import { useState } from "react";
import Modal from "react-modal";

const FacultyCard = ({ name, img, designation, quote, education, contact }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="lg:grid grid-cols-2 border border-slate-300 p-5 rounded-lg hover:outline hover:outline-slate-300 hover:cursor-pointer hover:scale-105 transition-all  duration-300 hover:outline-offset-1"
      >
        <div>
          <img src={img} alt="" className="w-full rounded-md " />
        </div>
        <div className="px-4 space-y-4 flex items-start justify-start flex-col font-bold mt-6 lg:mt-0">
          <h2>Name : {name}</h2>
          <h3>Designation : {designation}</h3>
        </div>
      </div>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        className=""
        style={{
          overlay: {
            zIndex: 9999, // Set a high z-index for the modal overlay
            backgroundColor: `rgba(0,0,0,0.2)`,
          },
          content: {
            width: "1000px",
            height: "580px",
            margin: "0 auto",
            color: "#580B57",
            zIndex: 10000, // Set a high z-index for the modal content
          },
        }}
      >
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <p>{quote}</p>
        <span>{education}</span>
        <span>{contact}</span>
      </Modal>
    </>
  );
};

export default FacultyCard;
