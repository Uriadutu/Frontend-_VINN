import React, { useEffect, useState } from "react";
import All from "../../img/AllProduct.png";
import { FaGlassWater } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import axios from "axios";
import Gambar from "../../img/AllProduct.png"
import InfoMenuModal from "./InfoMenuModal";
const Home = () => {
  const [activeButton, setActiveButton] = useState("/");
  const [openModalInfo, setOpenModalInfo] = useState(false)
  const [item, setItem] = useState([])
  
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

  const handleClickLihat = (item)=> {
    setOpenModalInfo(true)
    setItem(item)
  }


  return (
    <div className="sm:px-2 md:px-8 px-2">
      {openModalInfo && (
        <InfoMenuModal setIsOpenModalAdd={setOpenModalInfo} item={item} />
      )}
      <div className="relative">
        <div className="absolute pl-3 mt-7 sm:pl-9 sm:mt-20 md:mt-16 lg:mt-40 md:pl-12">
          <h1 className="text-[12px] sm:text-sm">BERANDA</h1>
          <h1 className="sm:text-3xl text-lg mt-0 sm:mt-2 font-bold">PRODUK</h1>
        </div>
        <img src={All} className="rounded-sm sm:rounded-3xl" alt="" />
      </div>
      <h1 className="sm:text-3xl text-lg text-left mt-5 sm:mt-10 text-gray-600 font-bold">
        PILIH KATEGORI
      </h1>
      <div className="mt-4">
        <div className="grid gap-2 sm:gap-3 grid-cols-3 sm:grid-cols-5">
          {/* Tombol Semua */}
          <div
            className={`flex items-center cursor-pointer px-2 py-3 justify-center sm:px-5 sm:py-5 rounded-md transition ${
              activeButton === "/"
                ? "bg-gray-600"
                : "bg-gray-400 hover:bg-gray-500"
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
                ? "bg-orange-500"
                : "bg-orange-300 hover:bg-orange-400"
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
                ? "bg-[#554acc]"
                : "bg-[#ABA9FF] hover:bg-[#6D61FF]"
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
              className="drop-shadow-lg h-[370px] bg-white pt-2 rounded"
            >
              <div className="flex justify-between items-center mx-3 mt-2">
                <h1 className="font-semibold text-lg ">{item?.kategori}</h1>
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
                <h1 className="uppercase font-semibold">{item?.name}</h1>
                <h1 className="absolute font-semibold bottom-10 text-lg sm:text-xl ">
                  Rp.{item?.price}
                </h1>
                <button
                  onClick={() => handleClickLihat(item)}
                  className="absolute right-3 bottom-2 py-1 px-3 text-gray-600 text-xs bg-gray-100 hover:bg-gray-200 border border-gray-100 rounded"
                >
                  Lihat
                </button>
              </div>
            </div>
          ))}

          <div
            data-aos="zoom-in"
            className="relative drop-shadow-lg h-[330px] bg-white pt-2 rounded"
          >
            <div className="flex justify-between items-center mx-3 mt-2">
              <h1 className="font-semibold text-xs ">Makanan</h1>
              <div className="flex gap-1">
                <div className="bg-orange-300 p-1"></div>
                <div className="bg-orange-300 p-1"></div>
                <div className="bg-orange-300 p-1"></div>
              </div>
            </div>
            <img
              src={Gambar}
              className="w-full h-[200px] object-cover"
              alt=""
            />
            <div className="mx-3">
              <h1 className="font-semibold">Makanan Contoh</h1>
              <h1 className="font-semibold">21</h1>
              <button className="absolute right-3 bottom-2  py-1 px-3 text-gray-600 text-xs bg-gray-100 hover:bg-gray-200 border border-gray-100 rounded">
                Lihat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
