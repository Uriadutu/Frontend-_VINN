import React, { useEffect, useState } from "react";
import axios from "axios";
import AddMinumanModal from "./modals/AddMinumanModal";
import EditProdukModal from "./modals/EditProdukModal";
import InfoMenuModal from "./user/InfoMenuModal";
import { AnimatePresence } from "framer-motion";

const Minuman = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products/minuman");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickEdit = (item) => {
    setEditModal(true);
    setItem(item);
  };

  const handleClickLihat = (item) => {
    setOpenModalInfo(true);
    setItem(item);
  };

  return (
    <div className="">
      <AnimatePresence>
        {openModal && (
          <AddMinumanModal
            getMakanan={getProducts}
            setIsOpenModalAdd={setOpenModal}
          />
        )}
        {editModal && (
          <EditProdukModal
            getMakanan={getProducts}
            setIsOpenModalAdd={setEditModal}
            item={item}
          />
        )}
        {openModalInfo && (
          <InfoMenuModal setIsOpenModalAdd={setOpenModalInfo} item={item} />
        )}
      </AnimatePresence>
      <h1 className="font-semibold text-lg text-white">Minuman</h1>
      <div className="flex justify-between items-center">
        <button onClick={() => setOpenModal(true)} className="mt-4 btn-add">
          Tambah Minuman
        </button>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-4 mt-3">
        {products.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
            key={index + 1}
            className="drop-shadow-lg h-[400px]  bg-[#353535] pt-2 rounded"
          >
            <div className="flex justify-between items-center mx-3 mt-2">
              <h1 className="font-semibold text-lg text-white">Minuman</h1>
              <div className="flex gap-1">
                <div className="bg-blue-300 p-1"></div>
                <div className="bg-blue-300 p-1"></div>
                <div className="bg-blue-300 p-1"></div>
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
              <h1 className="absolute font-semibold bottom-10 text-white text-lg sm:text-xl ">
                Rp.{item?.price}
              </h1>
              <div className="absolute flex right-3 bottom-2 gap-1">
                <button
                  onClick={() => handleClickLihat(item)}
                  className="detail"
                >
                  Lihat
                </button>
                <button onClick={() => handleClickEdit(item)} className="edit">
                  edit
                </button>
                <button
                  className="delete"
                  onClick={() => deleteProduct(item?.id)}
                >
                  hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Minuman;
