import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = ({ weeks, currentMonth }) => {
  return (
    <table className="table-fixed items-center text-center w-full my-2 md:my-10">
      <Thead />
      <Tbody weeks={weeks} currentMonth={currentMonth} />
    </table>
  );
};

export default Table;
