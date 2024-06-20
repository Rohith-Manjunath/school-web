const LearningPhaseCard = ({phase}) => {
  return (
      <div
      className="bg-white rounded-lg shadow-md p-6 mb-5 transition-transform hover:-translate-y-2 hover:border-2 hover:border-secondary cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2 text-secondary">{phase.title}</h3>
      <p className="text-gray-700">
        {phase.description}
      </p>
    </div>
  )
}

export default LearningPhaseCard