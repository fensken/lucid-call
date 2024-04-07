import { FC } from "react";

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Home</h1>
    </section>
  );
};

export default Home;
