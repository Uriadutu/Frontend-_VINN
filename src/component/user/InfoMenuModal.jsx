import React from "react";
const InfoMenuModal = ({ setIsOpenModalAdd, item }) => {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 px-2 flex items-center sm:items-start sm:pt-3 justify-center bg-black z-40 bg-opacity-60"
    >
      <form>
        <div className="w-[23rem] sm:w-[25rem] bg-white rounded-lg shadow-lg">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              {item?.name}
            </h3>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
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
            <div className="">
              <div className="">
                <img
                  src={item?.url}
                  className="w-[23rem] sm:w-96 h-64 object-cover"
                  alt=""
                />
                <div className="mb-6 items-center">
                  <label className="block text-lg sm:text-xl uppercase font-medium text-gray-700">
                    {item?.name}
                  </label>
                  <label className="block text-sm sm:text-lg font-medium text-gray-500">
                    {item?.description}
                  </label>
                </div>
                <div className="mb-4 flex justify-end">
                  <label className="block text-2xl sm:text-3xl font-medium text-gray-700">
                    Rp.{item?.price}
                  </label>
                </div>
              </div>
              <div className="">
                <div className="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoMenuModal;
