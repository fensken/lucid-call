import { FC } from "react";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous</h1>
    </section>
  );
};

export default page;
