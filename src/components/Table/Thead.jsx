import React from "react";
import { days } from "../../assets/json/calenderJSON.json";
const Thead = () => {
  return (
    <thead>
      <tr className="p-2 md:p-10 ">
        {days.map((day, i) => (
          <th
            key={i}
            className="p-2 md:p-8 text-graydark dark:text-stroke border-2 dark:border-slate-100 border-slate-200 text-[10px] md:text-lg "
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
