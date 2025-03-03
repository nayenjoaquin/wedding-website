import { OpenInMapButton } from "@/components/open-in-map-button"
import { locationRef } from "@/const/refs"
import Image from "next/image"


export const LocationView = () => {
    return (
        <section ref = {locationRef} className="section flex items-center justify-center">
            <div className="w-full flex items-center">
                <div className=" w-full h-full flex flex-col items-center justify-center gap-1 p-5">
                    <h3 className="text-4xl md:text-6xl font-fancy">LOCATION</h3>
                    <p className="font-fancy text-sm md:text-3xl">Tigiwon Community House</p>
                    <OpenInMapButton onClick={() => window.open("https://maps.app.goo.gl/fcSzRp3JSJPvvHQYA")} />
                </div>
                <Image className="w-full md:max-w-3xl h-[50vh] md:h-[80vh] object-cover" src="/images/location.png" width={2000} height={2000} alt="location" />
            </div>
        </section>
    )
}