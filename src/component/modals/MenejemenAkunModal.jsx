import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const MenejemenAkunModal = ({ setIsOpenModalAdd }) => {
  const { user } = useSelector((state) => state.auth);
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [username, setUsername] = useState(user.username);
  const [msg, setMsg] = useState("");

  const editSandi = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await axios.patch(`http://localhost:5000/user/${user.id}`, {
        username: username,
        password: pass,
        confPassword: confPass,
      });
      setIsOpenModalAdd(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setMsg(
          error.response.data.msg || "Terjadi kesalahan, silakan coba lagi."
        );
      } else {
        setMsg("Terjadi kesalahan jaringan.");
      }
    }
  };

  return ReactDOM.createPortal(
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 px-2 flex items-center sm:items-start sm:pt-3 justify-center bg-black bg-opacity-80 z-40"
    >
      <form onSubmit={editSandi}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg bg-gray-800 text-gray-200 rounded-lg shadow-lg"
        >
          <div className="flex items-start justify-between p-4 border-b border-gray-700 rounded-t">
            <h3 className="text-xl font-semibold">Menejemen Akun</h3>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-700 hover:text-white ms-auto"
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
            <div className="mb-6">
              <div className="mb-4 grid items-center grid-cols-2 gap-4">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />

                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none"
                  value={confPass}
                  onChange={(e) => setConfPass(e.target.value)}
                />
              </div>
            </div>
          </div>
          {msg && (
            <div className="px-4 py-2 text-red-400 bg-red-900 border border-red-800 rounded-md">
              {msg}
            </div>
          )}
          <div className="flex items-center justify-end p-4 space-x-3 border-t border-gray-700 rounded-b">
            <button
              type="submit"
              className="btn-simpan"
            >
              Simpan
            </button>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button"
              className="px-3 py-2 bg-gray-600 border border-gray-500 text-gray-200 text-sm rounded-md hover:bg-gray-700 transition duration-300"
            >
              Batal
            </button>
          </div>
        </motion.div>
      </form>
    </div>,
    document.getElementById("root")
  );
};

export default MenejemenAkunModal;
