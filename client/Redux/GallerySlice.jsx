import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const GallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setGalleryImages: (state, action) => {
      state.images = action.payload;
    },
    galleryNull: (state, action) => {
      state.images = null;
    },
  },
});

export const { setGalleryImages,galleryNull } = GallerySlice.actions;
export default GallerySlice.reducer;
