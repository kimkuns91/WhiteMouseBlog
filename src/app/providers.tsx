"use client";

import { RecoilRoot } from "recoil";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      {children}
      <Toaster />
    </RecoilRoot>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
        <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
          {children}
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
};
