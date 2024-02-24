import { useState } from "react";
import Modal from "react-modal";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const FacultyCard = ({ name, img, designation, quote, education, contact, socialMedia }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="lg:grid grid-cols-2 border hover:border-fuchsia-700 hover:drop-shadow-2xl hover:shadow-580B57/70 p-5 rounded-lg hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 "
      >
        <div>
          <img src={img} alt="" className="w-full rounded-md" />
        </div>
        <div className="px-4 flex flex-col justify-center">
          <h2 className="text-lg font-semibold font-sans">{name}</h2>
          <h3 className="text-md font-serif tracking-wide">{designation}</h3>
        </div>
      </div>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        className="flex flex-col items-center justify-center text-center"
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            width: "80%",
            maxWidth: "600px",
            height: "auto",
            margin: "0 auto",
            padding: "20px",
            color: "#580B57",
            background: "#fff",
            borderRadius: "8px",
          },
        }}
        
      >
        <img src={img} alt={name} className="w-full h-auto rounded-md " />
        <h2 className="text-xl mt-3 font-bold border-b border-fuchsia-800 font-sans ">{name}</h2>
        <h3 className="text-md font-serif">{designation}</h3>
        <span className=" mb-3 font-serif">{education}</span>
        <p className=" mb-4 font-serif">{quote}</p>

        {/* Check if socialMedia is defined before mapping */}
        <div className="flex items-center mb-2">
  <p className="font-serif mr-1">Social Media handle's :</p>
  {socialMedia &&
    socialMedia.map((social, index) => (
      <a
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className={` hover:underline flex items-center mr-2`}
      >
        {social.platform === "Instagram" && (
          <FaInstagram className="mr-1 text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon" />
        )}
        {social.platform === "Facebook" && (
          <FaFacebook className="mr-1 text-4xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md" />
        )}
      </a>
    ))}
</div>


        <span className="text-gray-800">{contact}</span>
      </Modal>
    </>
  );
};

export default FacultyCard;
