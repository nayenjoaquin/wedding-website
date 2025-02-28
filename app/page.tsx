'use client'

import Image from "next/image";
import { Countdown } from "@/components/countdown";
import ProgramPage from "@/views/program";
import { homeRef } from "@/const/refs";
import { LocationView } from "@/views/location";
import { SaveTheDateButton } from "@/components/save-the-date-button";

export default function Home() {

  return (
    <div className="flex flex-col pt-[var(--nav-height)]">
      <section ref={homeRef} className="h-content w-full bg-background grid place-content-center">
        <Image className="absolute w-full h-content object-cover z-0 object-center" src='/images/home.png' alt="background" height={1000} width={1000} />

        <div className="flex flex-col items-center justify-center w-full z-10 font-fancy gap-5">
          <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl text-white font-bold">Claudia & Chris</h1>
          <h3 className="text-3xl text-white">Wedding day</h3>
          </div>
          <Countdown />
          <SaveTheDateButton onClick={() => console.log("Save the date")} />
        </div>
      </section>
      <ProgramPage />
      <LocationView />
    </div>
  );
}
