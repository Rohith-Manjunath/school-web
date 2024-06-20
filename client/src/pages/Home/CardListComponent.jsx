// CardListComponent.jsx
import CardComponent from './CardComponent'; // Adjust the path accordingly
import image1 from '../../assets/Images/HomeImages/Cards/curriculum.png'
import image2 from '../../assets/Images/HomeImages/Cards/beyond.png'
import image3 from '../../assets/Images/HomeImages/Cards/awards.png'
const CardListComponent = () => {
  const cardsData = [
    {
      id:1,
      link: 'CbseCurriculum',
      imageSrc: image1,
      title: 'Curriculum Overview',
      description: ' MIS curriculum blends academics, hands-on learning, and innovative teaching.',
    },
    {
      id:2,
      link: 'HolisticEdu',
      imageSrc: image2,
      title: 'Holistic Education',
      description: 'It integrates academics with social, emotional, and physical development, fostering critical thinking and creativity.',
    },
    {
      id:3,
      link: 'awards',
      imageSrc: image3,
      title: 'Awards and Achievements',
      description: 'MIS shines with awards across academics, sports, and activities, commitment to excellence.',
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
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardListComponent;
