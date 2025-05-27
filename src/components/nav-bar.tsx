'use client'

import { useState } from "react"
import { NavBarItem } from "./nav-bar-item"
import { Menu, X } from "lucide-react"
import { faqRef, homeRef, locationRef, planRef, programRef, storyRef, visionRef } from "@/public/const/refs"
import LanguageSwitcher from "./language-switcher"

const Items=[
    {name: "home", ref: '/'},
    {name: 'activities', ref: '/activities'},
    {name:'story', ref: '/'},
    {name: 'vision', ref: '/'},
    {name: "location", ref: '/'},
    {name: "bigday", ref: '/'},
    {name: 'planning', ref: '/'},
    {name:'faq', ref: '/'}
    
]

export const NavBar = ({locale}: {locale: string}) => {

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
                        <NavBarItem locale={locale} title={item.name} ref={item.ref} key={item.name} />
                    ))}
                </ul>
            </nav>
            {!open
            ? <Menu className="absolute right-5 top-5 cursor-pointer transition-all hover:scale-105" size='32' onClick={toggleMenu} />
            : <X className="absolute right-5 top-5 cursor-pointer transition-all hover:scale-105" size='32' onClick={toggleMenu} />
            }
        </header>
        <header className="bg-white hidden h-nav justify-end items-center w-full z-50 fixed md:flex">
            <nav className="flex gap-5">
                {Items.map((item) => (
                    <NavBarItem locale={locale} title={item.name} ref={item.ref} key={item.name} />
                ))}
                <LanguageSwitcher/>
            </nav>
        </header>
        </>
    )
}