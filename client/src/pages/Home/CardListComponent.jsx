import React from 'react';
import CardComponent from './CardComponent'; // Adjust the path accordingly

const CardListComponent = () => {
  const cardsData = [
    {
      link: 'best-curriculum-in-international-schools-in-coimbatore',
      imageSrc: 'assets/images/mainHome/Icon-1.png',
      title: 'Curriculum Overview',
      description: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
    },
    {
      link: 'student-achievement.html',
      imageSrc: 'assets/images/mainHome/Icon-2.png',
      title: 'Beyond the Classrooms',
      description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
    },
    {
      link: 'manchester-awards-and-accolades',
      imageSrc: 'assets/images/mainHome/Icon-3.png',
      title: 'Awards and Achievements',
      description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
    },
  ];

  return (
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 max-mb-n30">
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
  );
};

export default CardListComponent;
