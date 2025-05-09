'use client'

import { useState } from "react"
import { NavBarItem } from "./nav-bar-item"
import { Menu, X } from "lucide-react"
import { faqRef, homeRef, locationRef, planRef, programRef, storyRef, visionRef } from "@/const/refs"

const Items=[
    {name: "Home", ref: homeRef},
    {name:'Our story', ref: storyRef},
    {name: 'Our vision', ref: visionRef},
    {name: "Location", ref: locationRef},
    {name: "The big day", ref: programRef},
    {name: 'Planning ahead', ref: planRef},
    {name:'FAQ', ref: faqRef}
]

export const NavBar = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(open => !open)
    }

    return(
        <>
        <header className="bg-white h-nav w-full z-50 fixed md:hidden">
            <div onClick={()=>{
                toggleMenu()
            }} className={` w-full h-content absolute top-[var(--nav-height)] transition-all bg-black opacity-25 ${!open ? 'hidden' : ''}`}></div>
            <nav className={`absolute transition-all right-0 top-[var(--nav-height)] ${!open ? 'right-[-100%]' : ''}`}>
                <ul className="w-80 fle h-content flex-col gap-2.5 bg-white py-5">
                    {Items.map((item) => (
                        <NavBarItem title={item.name} ref={item.ref} onClick={toggleMenu} key={item.name} />
                    ))}
                </ul>
            </nav>
            {!open
            ? <Menu className="absolute right-5 top-5 cursor-pointer transition-all hover:scale-105" size='32' onClick={toggleMenu} />
            : <X className="absolute right-5 top-5 cursor-pointer transition-all hover:scale-105" size='32' onClick={toggleMenu} />
            }
        </header>
        <header className="bg-white hidden h-nav justify-end w-full z-50 fixed md:flex">
            <nav className="flex gap-5">
                {Items.map((item) => (
                    <NavBarItem title={item.name} ref={item.ref} key={item.name} />
                ))}
            </nav>
        </header>
        </>
    )
}