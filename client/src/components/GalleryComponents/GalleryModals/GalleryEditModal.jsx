import React from 'react';
import Modal from 'react-modal';
import { X, Upload, Image } from 'lucide-react';

const GalleryEditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  setPreview,
  singleGallery,
  handleEditSubmit,
  galleryToUpdate,
  setGalleryToUpdate,
  handleImageUpload,
  preview,
  updateLoading
}) => {
  return (
    <Modal
      isOpen={isEditModalOpen}
      onRequestClose={() => {
        setIsEditModalOpen(false);
        setPreview(singleGallery?.content?.avatar);
      }}
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-0 mt-[120px]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-secondary">
          <h2 className="text-xl font-bold text-white">Edit Event</h2>
          <button
            onClick={() => {
              setIsEditModalOpen(false);
              setPreview(singleGallery?.content?.avatar);
            }}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleEditSubmit} className="p-4 space-y-4 overflow-auto max-h-[75vh]">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={galleryToUpdate?.title}
              onChange={(e) => setGalleryToUpdate({ ...galleryToUpdate, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Ex: Something"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <div className="mt-1 flex justify-center px-6 py-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {preview && preview.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
              <div className="flex flex-wrap gap-2">
                {preview.map((p) => (
                  <img
                    key={p.id}
                    src={p.url}
                    alt=""
                    className="w-16 h-16 object-cover rounded-md border border-gray-300"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={updateLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-ctcPrimary to bg-ctcPrimaryLight hover:bg-ctcPrimaryLight disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {updateLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Updating...
                </>
              ) : (
                'Update'
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default GalleryEditModal;
