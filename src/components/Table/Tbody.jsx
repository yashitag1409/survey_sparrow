import React from "react";
import { events } from "../../assets/json/eventData.json";
import dayjs from "dayjs";

const Tbody = ({ weeks, currentMonth }) => {
  return (
    <tbody>
      {weeks.map((week, weekIdx) => (
        <tr key={weekIdx} className="h-11">
          {week.map((date, dayIdx) => {
            const fullDate = date
              ? dayjs(currentMonth).date(date).format("YYYY-MM-DD")
              : null;

            // Filter events matching this date
            const dayEvents = events.filter((event) => event.date == fullDate);

            return (
              <td
                key={dayIdx}
                className={`align-top border border-gray-200 dark:border-gray-700 p-1 md:p-2 h-24  md:h-34 ${
                  date
                    ? "text-black dark:text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {/* Display Date */}
                {date && (
                  <div className="font-semibold  mb-1 text-end text-base md:text-lg md:font-bold">
                    {date}
                  </div>
                )}

                {/* Show all events on this date */}
                {dayEvents.length > 0 && (
                  <div className="space-y-1 hidden md:block">
                    {dayEvents.map((event, index) => (
                      <div
                        key={index}
                        className="rounded p-1 text-white text-xs md:text-sm "
                        style={{
                          backgroundColor: event.color || "#999",
                        }}
                      >
                        <>
                          <div className="font-medium mt-2 ">{event.title}</div>
                          <div className="text-[10px] md:text-xs items-center text-center  flex justify-center py-2 gap-2">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/dotty/80/square-clock.png"
                              alt="square-clock"
                            />
                            <div>
                              {event.startTime} - {event.endTime}
                            </div>
                          </div>
                        </>
                      </div>
                    ))}
                  </div>
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
