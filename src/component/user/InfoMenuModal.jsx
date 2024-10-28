import React from "react";
import { motion } from "framer-motion";

const InfoMenuModal = ({ setIsOpenModalAdd, item }) => {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 px-2 flex items-center sm:items-start sm:pt-3 justify-center bg-black bg-opacity-80 z-40"
    >
      <form>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-[23rem] sm:w-[25rem] bg-gray-800 text-gray-200 rounded-lg shadow-lg"
        >
          <div className="flex items-start justify-between p-4 border-b border-gray-700 rounded-t">
            <h3 className="text-xl font-semibold">{item?.name}</h3>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-700 hover:text-gray-100 ms-auto"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <img
                src={item?.url}
                className="w-[23rem] sm:w-96 h-64 object-cover rounded-md border border-gray-700"
                alt=""
              />
              <div className="mt-4">
                <label className="block text-lg sm:text-xl uppercase font-medium text-gray-300">
                  {item?.name}
                </label>
                <label className="block text-sm sm:text-lg font-medium text-gray-400">
                  {item?.description}
                </label>
              </div>
              <div className="mt-4 flex justify-end">
                <label className="block text-2xl sm:text-3xl font-medium text-gray-200">
                  Rp.{item?.price}
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default InfoMenuModal;
