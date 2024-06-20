const JoinOurFrameWorkCard = ({motion,programme,index,Link}) => {
  return (
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
      viewport={{ once: true }}
      className="grid border border-grey-300 bg-white rounded-md overflow-hidden hover:shadow-lg hover:shadow-primary"
    >
      <div>
        <div>
          <img src={programme.imageSrc} alt={programme.alt} className="w-full h-[250px] object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white items-center gap-y-4 p-4">
        <span className="font-title text-3xl font-bold tracking-wider text-secondary">{programme.title}</span>
        <Link to={programme.link} className="btn-primary">
          <h3 className="font-subtext font-bold tracking-wider text-xl text-white bg-secondary py-2 px-4 rounded-md">{programme.buttonText}</h3>
        </Link>
      </div>
    </motion.div>
  )
}

export default JoinOurFrameWorkCard