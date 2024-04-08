import { FC } from "react";
import { SignIn } from "@clerk/nextjs";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default page;
