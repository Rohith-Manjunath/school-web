import React from 'react';
import cbse from '../../../assets/Files/Merged CBSE.pdf';
import others from '../../../assets/Files/MIS Annual Calendar.pdf';

const Links = () => {
  const handleLinkClick = (url) => {
    if (url === 'cbse') {
      window.open(cbse, '_blank');
    } else if (url === 'others') {
      window.open(others, '_blank');
    }
  };

  return (
    <div className="fixed mt-[0rem]  right-0 z-50 bg-primary rounded-bl-xl max-w-max border-2 border-b-secondary shadow-lg shadow-secondary border-l-secondary md:mt-[3.5rem] ">
      <div className="flex justify-end ml-4">
        <button
          className="px-2 py-1  md:px-4 md:y-2 text-sm md:text-lg text-secondary rounded hover:text-secondary hover:scale-110 hover:font-bold"
          onClick={() => handleLinkClick('cbse')}
        >
          CBSE
        </button>
        <button
          className="px-4 py-2 text-secondary rounded text-sm md:text-lg hover:text-secondary hover:scale-110 hover:font-bold"
          onClick={() => handleLinkClick('others')}
        >
          Others
        </button>
      </div>
    </div>
  );
};

export default Links;