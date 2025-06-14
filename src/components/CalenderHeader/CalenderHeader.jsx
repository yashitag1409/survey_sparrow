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
          className="py-2 px-4 bg-slate-100 dark:bg-slate-300 rounded-md font-bold"
        >
          {"<"}
        </button>
        <h2 className="font-satoshi font-bold text-lg dark:text-white md:text-">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={nextMonth}
          className="py-2 px-4 bg-slate-100 dark:bg-slate-300 rounded-md font-bold"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalenderHeader;
