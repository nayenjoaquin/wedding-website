import { locationRef } from "@/const/refs"
import Image from "next/image"


export const LocationView = () => {
    return (
        <section ref = {locationRef} className="h-content w-full max-w-[100vw] max-h-[100vh] bg-background grid place-content-center gap-1 pt-[var(--nav-height)]">
            <div className="flex items-center justify-center gap-5">
                <div className="grow w-full flex justify-center">
                    <h3 className="grow text-5xl md:text-7xl font-bold font-fancy">Location</h3>
                </div>
                <div className="grow h-full">
                    <img className="object-cover" src="/images/location.png" alt="location"/>
                </div>
            </div>
        </section>
    )
}