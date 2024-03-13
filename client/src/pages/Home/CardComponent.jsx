import React from 'react';

const CardComponent = ({ link, imageSrc, title, description }) => {
  return (
    <div className="col max-mb-30" data-aos="fade-up">
      <a href={link} className="icon-box text-center" data-bg-color="#fff">
        <div className="icon">
          <img src={imageSrc} alt="" />
        </div>
        <div className="content">
          <h3 className="title fz-20">{title}</h3>
          <div className="desc">
            <p>{description}</p>
          </div>
          <span className="">View More <i className="fas fa-arrow-right"></i></span>
        </div>
      </a>
    </div>
  );
};

export default CardComponent;
