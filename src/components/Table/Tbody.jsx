import { useState } from "react";
import { events } from "../../assets/json/eventData.json";
import dayjs from "dayjs";
import { darkenColor, lighenColor } from "../../assets/utils/methods/darken";
import { initails } from "../../assets/utils/methods/initails";
import EventDetail from "../EventDetail/EventDetail";

const Tbody = ({ weeks, currentMonth }) => {
  const [isEvent, setEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleEventClick = (event) => {
    setEvent(event);
    setOpenModal(!openModal);
  };

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
                className={`align-top border border-gray-200 dark:border-gray-700 p-1 md:p-2 h-10 md:h-34 ${
                  date
                    ? "text-black dark:text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
                style={{
                  background:
                    dayEvents.length === 1
                      ? lighenColor(dayEvents[0].color)
                      : dayEvents.length > 1
                      ? `linear-gradient(135deg, ${dayEvents
                          .map((event) => event.color || "#999")
                          .join(", ")})`
                      : undefined,
                  borderLeft:
                    dayEvents.length > 0
                      ? `5px solid ${darkenColor(dayEvents[0]?.color)}`
                      : "none",
                }}
              >
                {/* Display Date */}
                {date && (
                  <div
                    className={`font-semibold mb-1 text-center md:text-end text-[10px] md:text-lg md:font-bold ${
                      dayEvents.length > 0
                        ? "text-white"
                        : "text-graydark dark:text-stroke"
                    } `}
                  >
                    {date}
                  </div>
                )}

                {/* Show all events on this date */}
                {dayEvents.length > 0 && (
                  <div
                    className={`grid gap-2 ${
                      dayEvents.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
                    }`}
                  >
                    {dayEvents.map((event, index) => (
                      <div
                        key={index}
                        className={`rounded p-1 text-white text-xs md:text-sm cursor-pointer md:cursor-none `}
                        style={{
                          border: event.color && `1px solid white`,
                          backgroundColor: event.color && event.color,
                        }}
                        onClick={() => handleEventClick(event)}
                      >
                        {/* event title */}
                        <div className="font-medium mt-2 hidden md:block">
                          {event.title}
                        </div>
                        {/* event title */}
                        <div className="font-medium md:mt-2 block md:hidden ">
                          {initails(event.title)}
                        </div>
                        {/* event start time - end time */}
                        <div className="text-[10px] md:text-sm items-center text-center py-2 hidden md:block">
                          <div>
                            {event.startTime} - {event.endTime}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </td>
            );
          })}
        </tr>
      ))}

      <EventDetail
        isEvent={isEvent}
        onClose={() => setOpenModal(false)}
        openModal={openModal}
      />
    </tbody>
  );
};

export default Tbody;
