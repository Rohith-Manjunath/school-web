import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const JoinCbse = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    studentCount: 0,
    schoolCount: 0,
    countryCount: 0,
    cbseCount: 0
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounters(prevCounters => ({
          studentCount: prevCounters.studentCount < 1600000 ? prevCounters.studentCount + 50000 : 1600000,
          schoolCount: prevCounters.schoolCount < 240 ? prevCounters.schoolCount + 10 : 240,
          countryCount: prevCounters.countryCount < 28 ? prevCounters.countryCount + 1 : 28,
          cbseCount: prevCounters.cbseCount < 27000 ? prevCounters.cbseCount + 500 : 27000
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div ref={elementRef} className="py-16 px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between p-10 gap-[10px] lg:gap-[110px]">
          <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-xl mr-10">
            <span className="font-subtext tracking-wide text-lg font-medium text-secondary">EDUCATION FOR A WORLD</span>
            <h2 className="font-title text-3xl lg:text-4xl font-bold lg:mb-3 tracking-wide text-secondary">Join the CBSE Community Through MIS.</h2>
            <p className="font-subtext tracking-wide text-lg font-medium text-secondary">Get better choice of course, lessons, Knowledge
            and a blend curricular and cocurricular activities by our facilitators to reach the highest
            international level of excellence.</p>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="col max-mb-60">
                <div>
                  <div><span className="counter text-secondary text-2xl font-black font-Bnumber">{counters.studentCount.toLocaleString()} +</span></div>
                  <h2 className="font-description tracking-wider text-xl lg:text-2xl text-secondary">STUDENT WORLDWIDE</h2>
                </div>
              </div>
              <div className="col max-mb-60">
                <div>
                  <div className="number"><span className="counter text-secondary text-2xl font-black font-Bnumber">{counters.schoolCount} +</span></div>
                  <h3 className="font-description tracking-wide text-xl lg:text-2xl text-secondary ">SCHOOL GLOBALLY</h3>
                </div>
              </div>
              <div className="col max-mb-60" >
                <div className="funfact">
                  <div className="number"><span className="counter text-secondary text-2xl font-black font-Bnumber">{counters.countryCount} +</span></div>
                  <h6 className="font-description tracking-wide text-xl lg:text-2xl text-secondary">COUNTRIES FOLLOWED</h6>
                </div>
              </div>
              <div className="col max-mb-60" >
                <div className="funfact">
                  <div className="number"><span className="counter text-secondary text-2xl font-black font-Bnumber">{counters.cbseCount.toLocaleString()} +</span></div>
                  <h6 className="font-description tracking-wide text-xl lg:text-2xl text-secondary">CBSE SCHOOLS IN INDIA</h6>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinCbse;
