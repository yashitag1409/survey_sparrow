import ParentModal from "../Modal/ParentModal";
import ChildModal from "../Modal/ChildModal";
import ModalHeader from "../Modal/ModalHeader";
import {
  formatFullDate,
  formatTime,
} from "../../assets/utils/methods/formateDates";

const EventDetail = ({ openModal, onClose, isEvent }) => {
  return (
    <ParentModal open={openModal} onClose={onClose}>
      <ChildModal>
        <ModalHeader onClose={onClose} />
        <div className="grid grid-cols-5 gap-2 text-sm md:text-lg ">
          <div></div>
          <div className="col-span-4 text-left font-semibold ">
            Event Title: {isEvent?.title}
          </div>

          <div className="flex items-center justify-center  text-right ">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/dotty/80/square-clock.png"
              alt="square-clock"
              className="w-5  md:w-8  h-5  md:h-8 flex items-center "
            />
          </div>
          <div className="font-semibold flex gap-2 items-center col-span-4 text-left">
            {formatFullDate(isEvent?.date)} {formatTime(isEvent?.startTime)} -{" "}
            {formatTime(isEvent?.endTime)}
          </div>
        </div>
      </ChildModal>
    </ParentModal>
  );
};

export default EventDetail;
