"use client";

import { FC, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";

type pageProps = { params: { id: string } };

const page: FC<pageProps> = ({ params }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

  if (!user) return;

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call)
    return (
      <p className="h-screen flex-center font-bold text-white">
        Call Not Found
      </p>
    );

  console.log(params.id);

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default page;
