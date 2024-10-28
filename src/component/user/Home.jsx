import React, { useEffect, useState } from "react";
import All from "../../img/bg.jpg";
import { FaGlassWater } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import axios from "axios";
import InfoMenuModal from "./InfoMenuModal";
import { AnimatePresence } from "framer-motion";
import gambar from "../../img/logoAPK.png"
const Home = () => {
  const [activeButton, setActiveButton] = useState("/");
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [item, setItem] = useState([]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(activeButton);
  }, [activeButton]);

  const getProducts = async (menu) => {
    try {
      const response = await axios.get(`http://localhost:5000/products${menu}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLihat = (item) => {
    setOpenModalInfo(true);
    setItem(item);
  };

  return (
    <div className="sm:px-2 md:px-8 px-2">
      <AnimatePresence>
        {openModalInfo && (
          <InfoMenuModal setIsOpenModalAdd={setOpenModalInfo} item={item} />
        )}
      </AnimatePresence>
      <div className="relative">
        <img src={All} className="rounded-sm sm:rounded-3xl" alt="" />
      </div>
      <h1 className="sm:text-3xl text-lg text-left mt-5 sm:mt-10 font-bold text-white">
        PILIH KATEGORI
      </h1>
      <div className="mt-4">
        <div className="grid gap-2 sm:gap-3 grid-cols-3 sm:grid-cols-5">
          {/* Tombol Semua */}
          <div
            className={`flex items-center cursor-pointer px-2 py-3 justify-center sm:px-5 sm:py-5 rounded-md transition ${
              activeButton === "/"
                ? "bg-[#2c2c2c]"
                : "bg-[#424242] hover:bg-[#2c2c2c]"
            }`}
            onClick={() => handleButtonClick("/")}
          >
            <IoFastFoodSharp
              width={30}
              color="white"
              className="mr-4 hidden sm:block"
            />
            <IoFastFoodSharp
              width={20}
              color="white"
              className="mr-4 block sm:hidden"
            />
            <h1 className="font-semibold text-[12px] sm:text-base text-white">
              Semua
            </h1>
          </div>

          {/* Tombol Makanan */}
          <div
            className={`flex items-center justify-center cursor-pointer px-2 py-3 sm:px-5 sm:py-5 rounded-md transition ${
              activeButton === "/makanan"
                ? "bg-[#2c2c2c]"
                : "bg-[#424242] hover:bg-[#2c2c2c]"
            }`}
            onClick={() => handleButtonClick("/makanan")}
          >
            <FaBowlFood
              width={30}
              color="white"
              className="mr-4 hidden sm:block"
            />
            <FaBowlFood
              width={20}
              color="white"
              className="mr-4 block sm:hidden"
            />
            <h1 className="font-semibold text-[12px] sm:text-base text-white">
              Makanan
            </h1>
          </div>

          {/* Tombol Minuman */}
          <div
            className={`flex items-center cursor-pointer px-2 py-3 justify-center sm:px-5 sm:py-5 rounded-md transition ${
              activeButton === "/minuman"
                ? "bg-[#2c2c2c]"
                : "bg-[#424242] hover:bg-[#2c2c2c]"
            }`}
            onClick={() => handleButtonClick("/minuman")}
          >
            <FaGlassWater
              width={30}
              color="white"
              className="mr-4 hidden sm:block"
            />
            <FaGlassWater
              width={20}
              color="white"
              className="mr-4 block sm:hidden"
            />
            <h1 className="font-semibold text-[12px] sm:text-base text-white">
              Minuman
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-6">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:gap-5  sm:grid-cols-4">
          {products.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              key={index + 1}
              className="drop-shadow-lg h-[370px] bg-[#353535] pt-2 rounded"
            >
              <div className="flex justify-between items-center mx-3 mt-2">
                <h1 className="font-semibold text-lg text-white ">
                  {item?.kategori}
                </h1>
                <div className="flex gap-1">
                  <div
                    className={`p-1 ${
                      item?.kategori === "Makanan"
                        ? "bg-orange-300"
                        : item?.kategori === "Minuman"
                        ? "bg-blue-300"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`p-1 ${
                      item?.kategori === "Makanan"
                        ? "bg-orange-300"
                        : item?.kategori === "Minuman"
                        ? "bg-blue-300"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`p-1 ${
                      item?.kategori === "Makanan"
                        ? "bg-orange-300"
                        : item?.kategori === "Minuman"
                        ? "bg-blue-300"
                        : ""
                    }`}
                  ></div>
                </div>
              </div>
              <img
                src={item?.url}
                className="w-full h-[200px] object-cover"
                alt=""
              />
              <div className="mx-3">
                <h1 className="uppercase font-semibold text-white">
                  {item?.name}
                </h1>
                <h1 className="absolute font-semibold bottom-10 text-lg sm:text-xl text-white">
                  Rp.{item?.price}
                </h1>
                <button
                  onClick={() => handleClickLihat(item)}
                  className="absolute right-3 bottom-2 py-1 px-3 text-gray-200 text-xs bg-[#424242] hover:bg-[#2c2c2c] border border-gray-600 rounded"
                >
                  Lihat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
