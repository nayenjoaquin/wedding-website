'use client';
import { programRef } from "@/public/const/refs";
import { Clock8 } from "lucide-react";
import { useTranslations } from "next-intl";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { ProgramItem } from "../components/program-item";
import { GiDiamondRing } from "react-icons/gi";
import { LiaCocktailSolid } from "react-icons/lia";

export default function ProgramPage(){

    const t = useTranslations('program');
    return (
        <section ref={programRef} className="section p-5 grid place-content-center gap-20">
            <h1 className="title ">{t('title')}</h1>
            <div className="flex flex-col items-cente justify-center gap-2.5">
                <ProgramItem title={t('arrival')} time="02:45 pm" Icon={Clock8} />
                <ProgramItem title={t('ceremony')} time="03: 00 pm" Icon={GiDiamondRing} />
                <ProgramItem title={t('cocktail')} time="03:40 pm" Icon={LiaCocktailSolid} />
                <ProgramItem title={t('dinner')} time="05:00 pm" Icon={MdOutlineDinnerDining} />
                <ProgramItem title={t('exit')} time="09:0 pm" Icon={Clock8} />
            </div>
        </section>
    );
    }