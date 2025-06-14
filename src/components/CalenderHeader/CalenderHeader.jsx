import React from "react";

const CalenderHeader = ({ prevMonth, currentDate, nextMonth }) => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="font-satoshi font-semibold dark:text-white text-base md:text-lg">
        Full Event Schedule
      </div>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <button
          onClick={prevMonth}
          className="p-2 bg-slate-100 dark:bg-slate-300 rounded-md font-bold"
        >
          {"<"}
        </button>

        <button
          onClick={nextMonth}
          className="p-2 bg-slate-100 dark:bg-slate-300 rounded-md font-bold"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalenderHeader;
