import React from "react";

const ModalHeader = ({ onClose }) => {
  return (
    <section className=" h-10 flex w-full justify-end">
      {/* close button  */}
      <div>
        <button
          className="text-4xl -mt-[35px] mb-[10px] border-none text-black hover:rotate-90 duration-500 origin-center"
          onClick={onClose}
          id="closeBtn"
        >
          &times;
        </button>
      </div>
    </section>
  );
};

export default ModalHeader;
