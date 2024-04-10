import React from "react";
import { Metadata } from "next";

import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "Lucid",
  description: "A video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
