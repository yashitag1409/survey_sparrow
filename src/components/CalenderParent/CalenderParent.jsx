import React, { useState } from "react";

import dayjs from "dayjs";
import CalenderHeader from "../CalenderHeader/CalenderHeader";
import Table from "../Table/Table";

const CalenderParent = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const totalDays = endOfMonth.date();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // Fill blanks before the 1st day of the month
  const blanks = Array.from({ length: startDay }, () => null);
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  return (
    <div>
      <CalenderHeader
        currentDate={currentDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Table weeks={weeks} currentMonth={currentDate} />
    </div>
  );
};

export default CalenderParent;
