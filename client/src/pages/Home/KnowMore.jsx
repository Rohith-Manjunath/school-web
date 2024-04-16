import React from 'react';
import KnowMoreCarousel from './KnowMoreCarousel';

const KnowMore = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-[50px]">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Discover Mysore International School
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-secondary">
            Explore our vision, mission, and commitment to excellence in
            education.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">Our Vision</h3>
              <p className="mt-2 text-base text-secondary">
                Embracing our legacy as the best school in India, we aspire to
                nurture empathetic and innovative global citizens who excel as
                discerning thinkers, collaborative problem solvers, and
                proactive contributors.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">Our Mission</h3>
              <p className="mt-2 text-base text-secondary">
                At Mysore International School, our mission embodies a commitment
                to fostering a dynamic and innovative educational environment.
                We wholeheartedly embrace the pursuit of excellence as we inspire
                and challenge every student to attain their utmost potential,
                tailoring our approach to each individual's functional level.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">
                Our Commitment
              </h3>
              <p className="mt-2 text-base text-secondary">
                We are dedicated to providing a world-class education that
                nurtures the physical, intellectual, emotional, social, and
                cultural aspects of our students. This foundation equips each
                student with the tools necessary to metamorphose into a
                well-rounded, highly educated, and productive adult, capable of
                navigating the intricacies of our ever-evolving global landscape.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full md:my-[110px] mt-[120px]'>
        <KnowMoreCarousel />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">
                Tangible Learning Tools
              </h3>
              <p className="mt-2 text-base text-secondary">
                We provide tangible learning tools and foster opportunities for
                exploration, discovery, and comprehension, empowering our
                students to learn how to learn rather than just memorize facts.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">
                Nurturing Environment
              </h3>
              <p className="mt-2 text-base text-secondary">
                We create a nurturing educational environment where learning is
                both enjoyable and an integral part of life, cultivating motor
                skills and coordination through diverse indoor and outdoor
                activities.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden rounded-lg border-2 border-secondary shadow-lg shadow-secondary">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-secondary">
                Positive Relationships
              </h3>
              <p className="mt-2 text-base text-secondary">
                We encourage the development of positive relationships with peers
                and family, emphasizing the values of sharing and caring, as we
                believe these are crucial for a well-rounded education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;