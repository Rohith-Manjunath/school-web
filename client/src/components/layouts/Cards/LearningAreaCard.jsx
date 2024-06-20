const LearningAreaCard = ({area}) => {
  return (
      <div
      className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2 border-2 border-secondary shadow-secondary cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">{area.title}</h3>
      <p className="text-gray-700 ">
        {area.description}
      </p>
    </div>
  )
}

export default LearningAreaCard