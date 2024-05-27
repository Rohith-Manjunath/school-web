import React from 'react'
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const NewsCard = ({isAdmin,item,handleDelete}) => {
  return (
      <div
            className="p-6 bg-white rounded-md space-y-4 text-textSecondary font-semibold tracking-wide h-[400px]"
            key={item?.title}
          >
            <div>
              <img
                src={item?.avatar?.url}
                alt=""
                className="w-full h-[220px] rounded-lg "
              />
            </div>
            <div className="space-y-4 relative">
              <span className="text-[12px]">{item?.date} {item?.time} </span>
              {isAdmin && (
                <>
                  <MdDelete
                    title="Delete News"
                    onClick={() => handleDelete(item?._id)}
                    className="text-red-600 absolute top-[-3px] text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                  />
                  <FaPen
                  title="Edit News"
                    className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
                  />
                </>
              )}
              <div>
                <h4>{item?.title}</h4>
              </div>
            </div>
          </div>
  )
}

export default NewsCard