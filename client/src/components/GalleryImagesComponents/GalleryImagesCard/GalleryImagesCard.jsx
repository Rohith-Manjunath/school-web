
const GalleryImagesCard = ({Tilt,handleOpenModal,img}) => {
  return (
      <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      scale={1.05}
      perspective={1000}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      transitionSpeed={400}
    >
      <img
        onClick={() => handleOpenModal(img)}
        className="rounded-md border-white border-2 hover:cursor-pointer"
        src={img?.url}
        alt={img?.title}
        loading="lazy"
      />
    </Tilt>
  )
}

export default GalleryImagesCard