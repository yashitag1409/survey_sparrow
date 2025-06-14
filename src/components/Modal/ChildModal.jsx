import s from "./modal.module.css";
const ChildModal = ({ children }) => {
  return (
    <div
      className={`${s.child_main} bg-white p-5 overflow-auto  w-[80%] sm:w-[90%] md:w-[80%] lg:w-[50%] xl:w-[50%] shadow-sm border rounded-md  `}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ChildModal;
