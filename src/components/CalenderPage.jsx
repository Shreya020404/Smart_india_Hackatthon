"use client"

import { staticData } from "@/data/dataService";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [data, setData] = useState({ score: null, badge: null });

  // Format the date to YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Handle date change
  const handleDateChange = (date) => {
    setValue(date);
    const formattedDate = formatDate(date);
    setData(staticData[formattedDate] || { score: null, badge: null });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Calendar onChange={handleDateChange} value={value} />
      <div className="mt-4 p-4 border rounded bg-gray-100 w-full max-w-md">
        <h2 className="text-xl font-bold">
          Selected Date: {formatDate(value)}
        </h2>
        {data.score !== null ? (
          <>
            <p className="text-lg">Score: {data.score}</p>
            <div className="mt-2">
              <Image
                src={data.badge}
                alt="Badge"
                height={25}
                width={25}
                className="w-16 h-16"
              />
            </div>
          </>
        ) : (
          <p>No data available for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
