import React from "react";

const ConfirmModal = ({ children, isOpen, title }) => {
  return (
    <div
      className={`${
        isOpen
          ? "  flex items-center h-screen justify-center  z-80 fixed inset-0 bg-sky-500/25 transition"
          : "hidden"
      }`}
    >
      <div className=" flex  flex-col items-center justify-center gap-5 bg-white p-5">
        <div className="text-center">{title}</div>
       <div className="flex gap-5">{children}</div>
      </div>
    </div>
  );
};

export default ConfirmModal;
