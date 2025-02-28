import { OpenInMapButton } from "@/components/open-in-map-button"
import { locationRef } from "@/const/refs"
import Image from "next/image"


export const LocationView = () => {
    return (
        <section ref = {locationRef} className="h-content w-screen  bg-background grid place-content-center gap-1 pt-[var(--nav-height)]">
            <div className="w-screen flex items-center justify-between">
                <div className=" w-full flex flex-col items-center justify-center p-5">
                    <h3 className=" text-4xl md:text-7xl font-fancy">LOCATION</h3>
                    <p className="font-fancy text-sm md:text-3xl">Tigiwon Community House</p>
                    <OpenInMapButton onClick={() => window.open("https://maps.app.goo.gl/fcSzRp3JSJPvvHQYA")} />
                </div>
                <Image className=" grow max-w-[200px] md:max-w-md h-[50vh] md:h-[80vh] object-cover" src="/images/location.png" width={2000} height={2000} alt="location" />
            </div>
        </section>
    )
}