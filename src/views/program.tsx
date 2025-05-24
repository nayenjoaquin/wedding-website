'use client';
import { IconRing } from "@/public/const/icons";
import { programRef } from "@/public/const/refs";
import { Clock8 } from "lucide-react";
import { useTranslations } from "next-intl";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineDinnerDining } from "react-icons/md";

export default function ProgramPage(){

    const t = useTranslations('program');
    return (
        <section ref={programRef} className="section p-5 grid place-content-center gap-20">
            <h1 className="title ">{t('title')}</h1>
            <div className="flex flex-col items-cente justify-center gap-2.5">
                <div className="flex flex-col items-center gap-5">
                    <Clock8 size="40" />
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">14:30</label>
                        <label className="text-md">{t('arrival')}</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <IconRing size={40} color="" />
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">15:00</label>
                        <label className="text-md">{t('ceremony')}</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <MdOutlineDinnerDining size={40}/>
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">17:00</label>
                        <label className="text-md">{t('dinner')}</label>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <HiOutlineCake size={40}/>
                    <div className="flex flex-col gap-0 items-center font font-fancy">
                        <label className="text-lg font-semibold">18:30</label>
                        <label className="text-md">{t('celebration')}</label>
                    </div>
                </div>
            </div>
        </section>
    );
    }