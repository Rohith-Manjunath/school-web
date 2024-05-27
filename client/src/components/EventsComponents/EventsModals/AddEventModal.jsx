import { IoMdClose } from "react-icons/io"

const AddEventModal = ({Modal,isModalOpen,setIsModalOpen,handleSubmit,setDays,setDuration,setDate,setTitle,addNewEventLoading}) => {
  return (
      <Modal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      className=""
      style={{
        overlay: {
          zIndex: 98,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
        content: {
          width: '90%', // Adjust the width for small screens
          maxWidth: '600px',
          height: '50vh', // Set height to auto for responsiveness
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center',
          flexDirection: 'column',
          color: '#580B57',
          overflowY: 'auto', // Enable vertical scrolling
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          border: 'none',
          outline: 'none',
        },
      }}
    >
        <button
        className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
        onClick={() => setIsModalOpen(false)}
      >
        <IoMdClose />
      </button>
      <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
         Add Event
      </h2>
  
  
  
      <form
            className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleSubmit}
          >
        <div className="flex flex-col gap-2">
          <label className="text-black font-sans tracking-wide font-semibold" htmlFor="duration">
            Duration
          </label>
          <input
            className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
            type="text"
            name="duration"
            id='duration'
            onChange={(e)=>setDuration(e.target.value)}
            placeholder="Ex : All day"
            
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-sans tracking-wide font-semibold" htmlFor="date">
            Date
          </label>
          <input
            className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
            type="date"
            name="date"
            id='date'
            onChange={(e)=>setDate(e.target.value)}
  
  
            
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-sans tracking-wide font-semibold" htmlFor="title">
            Title
          </label>
          <input
            className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
            type="text"
            name="title"
            id='title'
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Ex : Cultural Event"
  
  
            
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-sans tracking-wide font-semibold" htmlFor="days">
            Days
          </label>
          <input
            className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
            type="text"
            name="days"
            id='days'
            onChange={(e)=>setDays(e.target.value)}
            placeholder="Ex : Mon - Fri"
  
          />
        </div>
  
        <div className="col-span-2 text-center">
          <button
          disabled={addNewEventLoading}
            type="submit"
            className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
          >
           {addNewEventLoading ? "Submitting...":"Submit"}
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddEventModal
