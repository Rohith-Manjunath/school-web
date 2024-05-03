import React, { useEffect, useState } from 'react';
import { useDeleteGalleryMutation, useGetAllGalleryQuery, useGetSingleGalleryQuery, usePostGalleryMutation, useUpdateGalleryMutation } from '../../../Redux/adminAuth';
import { LuRefreshCcw } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { useAlert } from 'react-alert';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Gallery = () => {
  const { data: galleryData, isLoading, refetch } = useGetAllGalleryQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postGallery, { isLoading: postLoading }] = usePostGalleryMutation();
  const [data, setData] = useState(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const alert = useAlert();
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
  const [deleteGallery] = useDeleteGalleryMutation();
  const [id, setId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updateGallery, { isLoading: updateLoading }] = useUpdateGalleryMutation();
  const { data: singleGalleryData, refetch: singleGalleryRefetch } = useGetSingleGalleryQuery(id);
  const [gallery, setGallery] = useState({
    title: "",
    image: ""
  });

  useEffect(() => {
    setData(galleryData);
  }, [galleryData]);

  console.log(gallery);

  useEffect(() => {
    setGallery(singleGalleryData?.content);
  }, [singleGalleryData]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageUrl = reader.result;
        setImage(imageUrl);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postGallery({ title, image }).unwrap();
      alert.success(data?.message);
      setIsModalOpen(false);
      refetch();
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const handleEditEvent = (id) => {
    setId(id);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this post?")) {
        const data = await deleteGallery(id).unwrap();
        alert.success(data?.message);
        return;
      }
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const handleEditSubmit = async (e) => {
    const { title } = gallery;

    e.preventDefault();

    try {
      const data = await updateGallery({ id, data: { image, title } }).unwrap();
      alert.success(data?.message);
      setIsEditModalOpen(false);
      await singleGalleryRefetch();
      setGallery({});
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  return (
    <>
      <div className="bg-secondary py-12 md:px-12">
        <div className=" mx-auto px-8 ">
          <div className='flex items-center justify-between'>
            <h2 className="text-4xl font-bold text-white font-title mb-4">Gallery</h2>
            {isAdmin && (
              <div className='flex items-center justify-center'>
                <button onClick={() => refetch()} className="">
                  <button>
                    <IoAddOutline
                      className="w-full  font-semibold my-4 mx-1  text-[30px] tracking-wider text-white hover:text-white duration-200 transition-all hover:scale-105 active:scale-90 "
                      onClick={() => setIsModalOpen(true)}
                    />
                  </button>
                  <LuRefreshCcw
                    className="w-full font-semibold my-4 text-[25px] tracking-wider text-white hover:text-white duration-200 transition-all hover:scale-105 active:scale-90  animate-spin "
                  />
                </button>
              </div>
            )}
          </div>
          {data?.content?.length > 0 && <p className="text-white mb-8">Explore our stunning collection of images.</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.content?.length > 0 ? (
              data?.content?.map((image, index) => (
                <a
                  key={index}
                  href={image?.avatar?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
                >
                  <img
                    src={image?.avatar?.url}
                    alt={`Image ${index + 1}`}
                    className="w-full h-60 object-cover" // Increased width and height
                  />
                  {isAdmin && (
                    <>
                      <MdDelete
                        onClick={() => handleDelete(image?._id)}
                        className="text-red-600 absolute top-[-3px] text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500 z-10"
                      />
                      <FaPen
                        onClick={() => handleEditEvent(image?._id)}
                        className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500 z-10"
                      />
                    </>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 hover:cursor-pointer">
                    <h3 className="text-white text-xl font-bold">{image?.title}</h3>
                  </div>
                </a>
              ))
            ) : (
              <h2 className="text-center font-semibold tracking-wider text-[25px] text-white animate-bounce">
                No data yet &#58; &#40;
              </h2>
            )}
          </div>
        </div>
      </div>

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
            width: '90%',
            maxWidth: '600px',
            height: '50vh',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#580B57',
            overflowY: 'auto',
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
         Add Gallery Content
       </h2>

       <form
         className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6"
         onSubmit={handleSubmit}
       >
         <div className="flex flex-col gap-2">
           <label
             className="text-black font-sans tracking-wide font-semibold"
             htmlFor="title"
           >
             Title
           </label>
           <input
             className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
             type="text"
             name="title"
             id="title"
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Ex : Something"
           />
         </div>

         <div className="flex flex-col gap-2">
           <label
             className="text-black font-sans tracking-wide font-semibold"
             htmlFor="image"
           >
             Image
           </label>
           <input
             className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
             type="file"
             accept="image/*"
             name="image"
             id="image"
             onChange={(e) => handleImageUpload(e)}
           />
         </div>

         <div className="col-span-2 text-center">
           <button
             disabled={postLoading}
             type="submit"
             className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
           >
             {postLoading ? "Submitting..." : "Submit"}
           </button>
         </div>
       </form>
     </Modal>

     <Modal
       isOpen={isEditModalOpen}
       shouldCloseOnOverlayClick={true}
       className=""
       style={{
         overlay: {
           zIndex: 98,
           backgroundColor: `rgba(0, 0, 0, 0.5)`,
         },
         content: {
           width: '90%',
           maxWidth: '600px',
           height: '50vh',
           margin: '0 auto',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           flexDirection: 'column',
           color: '#580B57',
           overflowY: 'auto',
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
         onClick={() => setIsEditModalOpen(false)}
       >
         <IoMdClose />
       </button>
       <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
         Edit Gallery Content
       </h2>

       <form
         className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6"
         onSubmit={handleEditSubmit}
       >
         <div className="flex flex-col gap-2">
           <label
             className="text-black font-sans tracking-wide font-semibold"
             htmlFor="title"
           >
             Title
           </label>
           <input
             className="rounded-md outline-none border-slate-400 font-sans uppercase tracking-wider text-fuchsia-950"
             type="text"
             name="title"
             id="title"
             placeholder="Ex : Something"
             value={gallery?.title}
             onChange={(e) =>
               setGallery({ ...gallery, title: e.target.value })
             }
           />
         </div>
         <div className="flex flex-col gap-2">
           <label
             className="text-black font-sans tracking-wide font-semibold"
             htmlFor="image"
           >
             Image
           </label>
           <input
             className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
             type="file"
             accept="image/*"
             name="image"
             id="image"
             onChange={(e) => {
               handleImageUpload(e);
             }}
           />
         </div>

         <div className="flex items-center justify-center gap-2">
           <span>Preview :</span>
           <img
             src={image ? image : gallery?.avatar?.url}
             alt=""
             className="w-10 h-10 rounded-md"
           />
         </div>

         <div className="col-span-2 text-center">
           <button
             disabled={updateLoading}
             type="submit"
             className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
           >
             {updateLoading ? "Updating..." : "Update"}
           </button>
         </div>
       </form>
     </Modal>
   </>
 );
};

export default Gallery;