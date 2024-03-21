// CardListComponent.jsx
import React from 'react';
import CardComponent from './CardComponent'; // Adjust the path accordingly
import image1 from '../../assets/Images/HomeImages/Cards/curriculum.png'
import image2 from '../../assets/Images/HomeImages/Cards/beyond.png'
import image3 from '../../assets/Images/HomeImages/Cards/awards.png'

const CardListComponent = () => {
  const cardsData = [
    {
      link: '',
      imageSrc: image1,
      title: 'Curriculum Overview',
      description: 'MIS offers a flexible curriculum  and a holistic program including academics, arts, technology, and sports.',
    },
    {
      link: '',
      imageSrc: image2,
      title: 'Holistic Education',
      description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
    },
    {
      link: '',
      imageSrc: image3,
      title: 'Awards and Achievements',
      description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-16 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <CardComponent
            key={index}
            link={card.link}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardListComponent;
