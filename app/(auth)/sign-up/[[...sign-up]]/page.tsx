import { FC } from "react";
import { SignUp } from "@clerk/nextjs";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default page;
