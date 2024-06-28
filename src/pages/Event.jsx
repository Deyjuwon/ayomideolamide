import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../components/Header";
import data from "../utils/EventImgs";
import { IoMdClose } from "react-icons/io";

// Set the root element for the modal
Modal.setAppElement('#root');

const Interior = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <Header color="text-gray-400" logoColor="text-black" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 auto-rows-masonry">
        {data.map((item, idx) => (
          <div key={idx} className="relative w-full h-full">
            <img
              src={item.imgUrl}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(item.imgUrl)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        style={{
          content: {
            width:"80%",
            padding: '0',
            border: 'none',
            background: 'none',
            margin: 'auto',
            height: 'screen',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          

          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-2 mr-2 text-white"
          >
            <IoMdClose size={20} />
          </button>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
        </div>
      </Modal>
    </div>
  );
};

export default Interior;
