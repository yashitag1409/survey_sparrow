import { useEffect, useState } from "react";
import "./App.css";
import EventParent from "./components/EventDetail/EventDetail";
import Table from "./components/Table/Table";
import Thead from "./components/Table/Thead";
import CalenderParent from "./components/CalenderParent/CalenderParent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply or remove the 'dark' class from the HTML element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="px-2 py-2 md:p-5 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center  ">
        <h2 className="font-satoshi font-semibold dark:text-white text-xl md:text-3xl">
          Calendar
        </h2>
        <button
          onClick={toggleDarkMode}
          className="mt-2  bg-gray-300 dark:bg-white  rounded-full flex items-center"
        >
          {isDarkMode ? (
            <img
              width="35"
              height="35"
              className="h-10 w-10 p-2 "
              src="https://img.icons8.com/ios/50/sun--v1.png"
              alt="sun--v1"
            />
          ) : (
            <img
              width="35"
              height="35"
              className="h-10 w-10 p-2 "
              src="https://img.icons8.com/ios/50/bright-moon--v1.png"
              alt="bright-moon--v1"
            />
          )}
        </button>
      </div>
      {/* calender header */}

      <div>
        <CalenderParent></CalenderParent>
      </div>
    </div>
  );
}

export default App;
