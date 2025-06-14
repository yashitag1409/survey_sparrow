import React from "react";

const ParentModal = ({ open, onClose, children, cn }) => {
  return (
    <div
      className={`fixed z-50 left-0 top-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black/70 ${
        open ? "visible" : "invisible"
      } ${cn} md:rotate-0 xl:rotate-0 lg:rotate-0 sm:-rotate-0 text-black `}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ParentModal;
