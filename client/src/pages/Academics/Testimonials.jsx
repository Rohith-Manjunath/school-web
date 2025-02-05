import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import userIcon from '../../assets/Images/Others/PNG/user-icon.png'
const testimonials = [
  {
    id: 1,
    name: 'Srikant',
    quote: 'Excellent.. Great management team, great facilities.. One of the best CBSE school in Mysore..',
    // company: 'Company A',
    image: userIcon,
  },
  {
    id: 2,
    name: 'Harsha',
    quote: 'Children are given individual attention and excellent teaching faculty.',
    company: 'Company B',
    image: userIcon,
  },
  {
    id: 3,
    name: 'B V Nagesh',
    quote: 'Infrastructure is good for school kids to learn with the latest technology. My LKG kid has 2 teachers teaching him in the class. Keep up the good work management.',
    company: 'Company C',
    image: userIcon,
  },
  {
    id: 4,
    name: 'M R Nagaraj',
    quote: 'Focuses on academics and co-curricular activities. Good school..',
    company: 'Company B',
    image: userIcon,
  },
  {
    id: 5,
    name: 'Sunil Rao',
    quote: 'Fantastic School, Great Campus, Great Teachers ..... We are extremely happy.',
    company: 'Company C',
    image: userIcon,
  },
  {
    id: 6,
    name: 'Mrs. Shashi Rekha',
    quote: 'Good school with good teachers and children are taught well.',
    company: 'Company C',
    image: userIcon,
  },
  {
    id: 7,
    name: 'Srinivasa',
    quote: 'Excellent school with good teaching staff and non-teaching staff.',
    company: 'Company B',
    image: userIcon,
  },
  {
    id: 8,
    name: 'Chandu',
    quote: 'My daughter was studying in Chrisalis in Bangalore and we got transferred to Mysore I decided to take admission in Mount litera. Even Chrisalis does not have Smartclass but here they have Smart Class.',
    company: 'Company C',
    image: userIcon,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-primary py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl tracking-wider font-bold font-title text-secondary text-center ">TESTIMONIALS</h2>
        <h4 className="text-xs lg:text-1xl font-bold font-description  text-secondary text-center mb-12">Know What Our Parents Saying</h4>
        <div className="relative flex items-center justify-center  pl-9 lg:pl-0">
          <button
            className="bg-white rounded-full p-2 text-gray-600 hover:text-secondary transition-colors focus:outline-none absolute left-0"
            onClick={prevTestimonial}
          >
            <FaChevronLeft size={24} />
          </button>
          <div className="max-w-md lg:mx-auto w-[80%] mr-8">
            <div className={`bg-white p-8 rounded-lg shadow-xl flex flex-col items-center transition-all duration-500 ${currentIndex === 0 ? 'scale-100' : 'scale-95'}`}>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <blockquote className="text-gray-700 text-center">
                <p className="mb-4">{testimonials[currentIndex].quote}</p>
                <footer>
                  <cite className="font-bold">{testimonials[currentIndex].name}</cite>
                  {/* <span className="text-gray-600"> - {testimonials[currentIndex].company}</span> */}
                </footer>
              </blockquote>
            </div>
          </div>
          <button
            className="bg-white rounded-full p-2 text-gray-600 hover:text-secondary transition-colors focus:outline-none absolute right-0"
            onClick={nextTestimonial}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-secondary' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;