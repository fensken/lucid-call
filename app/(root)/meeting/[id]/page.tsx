import { FC } from "react";

type pageProps = { params: { id: string } };

const page: FC<pageProps> = ({ params }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default page;
