"use client";

import { FC, useEffect, useState } from "react";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import Link from "next/link";

type MeetingSetupProps = {
  setIsSetupComplete: (value: boolean) => void;
};

const MeetingSetup: FC<MeetingSetupProps> = ({ setIsSetupComplete }) => {
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("useCall must be used within a StreamCall component.");
  }

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call.camera, call.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />

      <div className="flex h-16 items-center justify-center gap-3">
        <label
          htmlFor=""
          className="flex items-center justify-center gap-2 font-medium text-lg"
        >
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
            className="w-5 h-5"
          />
          Join with mic and camera off
        </label>

        <DeviceSettings />
      </div>

      <Button
        className="rounded-md bg-emerald-800 hover:bg-emerald-700 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>

      <Link href={"/"} className="hover:underline">
        Back
      </Link>
    </div>
  );
};

export default MeetingSetup;
