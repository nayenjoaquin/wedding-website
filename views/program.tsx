'use client';
import { IconRing } from "@/const/icons";
import { programRef } from "@/const/refs";
import { Clock8 } from "lucide-react";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineDinnerDining } from "react-icons/md";

export default function ProgramPage(){
    return (
        <section ref={programRef} className="section p-5 grid place-content-center gap-20">
            <h1 className="text-5xl md:text-6xl text-center font-fancy ">PROGRAM</h1>
            <div className="flex flex-col items-cente justify-center gap-2.5">
                <div className="flex flex-col items-center gap-5">
                    <Clock8 size="40" />
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">11:00</label>
                        <label className="text-md">Arrive at the venue</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <IconRing size={40} color="" />
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">15:00</label>
                        <label className="text-md">Ceremony</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <MdOutlineDinnerDining size={40}/>
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">17:00</label>
                        <label className="text-md">Dinner</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <HiOutlineCake size={40}/>
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">18:30</label>
                        <label className="text-md">Celebration</label>
                    </div>
                </div>
            </div>
        </section>
    );
    }