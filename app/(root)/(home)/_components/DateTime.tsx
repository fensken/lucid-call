"use client";

import { FC } from "react";

type DateTimeProps = {};

const DateTime: FC<DateTimeProps> = ({}) => {
  const now = new Date();

  // Determine the user's locale
  // This example uses the browser's language settings
  const userLocale =
    typeof window !== "undefined" ? navigator.language : "en-US";

  // Format the date and time according to the user's locale
  const time = new Intl.DateTimeFormat(userLocale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour clock for US, 24-hour clock for others
  }).format(now);

  const date = new Intl.DateTimeFormat(userLocale, {
    dateStyle: "full",
  }).format(now);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
    </div>
  );
};

export default DateTime;
