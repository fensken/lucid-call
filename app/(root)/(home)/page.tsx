import { FC } from "react";
import { currentUser } from "@clerk/nextjs/server";

import MeetingTypeList from "@/components/MeetingTypeList";
import DateTime from "./_components/DateTime";

type HomeProps = {};

const Home: FC<HomeProps> = async ({}) => {
  const user = await currentUser();

  return (
    <section className="flex size-full flex-col gap-5 xl:gap-y-8 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between p-5 max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism w-fit px-3 rounded py-2 text-center text-base font-normal">
            Hello <span className="font-medium">{user && user.username}!!</span>
          </h2>

          <DateTime />
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
