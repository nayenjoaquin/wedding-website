import { OpenInMapButton } from "@/components/open-in-map-button"
import { locationRef } from "@/const/refs"
import Image from "next/image"


export const LocationView = () => {
    return (
        <section ref = {locationRef} className="section flex items-center justify-center">
            <div className="w-full flex flex-col gap-10 md:flex-row items-center md:justify-center">
                <div className=" w-full md:max-w-lg h-full flex flex-col items-center justify-center gap-1 p-5">
                    <h3 className="title">LOCATION</h3>
                    <p className="font-fancy text-sm md:text-2xl">Tigiwon Community House</p>
                    <OpenInMapButton onClick={() => window.open("https://maps.app.goo.gl/fcSzRp3JSJPvvHQYA")} />
                </div>
                <Image className="max-w-xs md:max-w-lg object-cover aspect-[3/4] p-5 md:p-5 bg-white pb-20 md:pb-32 shadow-md" src="/images/location.png" width={2000} height={2000} alt="location" />
            </div>
        </section>
    )
}