// LazyLoadImage.jsx

import React, { useRef, useEffect } from 'react';

const LazyLoadImage = ({ src, alt }) => {
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageRef.current.src = src;
          observer.unobserve(imageRef.current);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={imageRef} alt={alt} />;
};

export default LazyLoadImage;
