import { OpenInMapButton } from "@/src/components/open-in-map-button"
import { locationRef } from "@/public/const/refs"
import Image from "next/image"
import { useTranslations } from "next-intl"


export const LocationView = () => {

    const t = useTranslations('location')
    return (
        <section ref = {locationRef} className="section flex items-center justify-center">
            <div className="w-full flex flex-col gap-10 md:flex-row items-center md:justify-center">
                <div className=" w-full md:max-w-lg h-full flex flex-col items-center justify-center gap-1 p-5">
                    <h3 className="title">{t('title')}</h3>
                    <p className="font-fancy text-sm md:text-2xl">{t('location')}</p>
                    <OpenInMapButton onClick={() => window.open("https://maps.app.goo.gl/fcSzRp3JSJPvvHQYA")} />
                </div>
                <Image className="max-w-xs md:max-w-lg object-cover aspect-[3/4] p-5 md:p-5 bg-white pb-20 md:pb-32 shadow-md" src="/images/location.png" width={2000} height={2000} alt="location" />
            </div>
        </section>
    )
}