import { FC } from "react";
import { currentUser } from "@clerk/nextjs/server";

import MeetingTypeList from "@/components/MeetingTypeList";

type HomeProps = {};

const Home: FC<HomeProps> = async ({}) => {
  const now = new Date();
  const user = await currentUser();

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
    <section className="flex size-full flex-col gap-5 xl:gap-y-8 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between p-5 max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism w-fit px-3 rounded py-2 text-center text-base font-normal">
            Hello <span className="font-medium">{user && user.username}!!</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
