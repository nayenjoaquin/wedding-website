import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavBarItemsProps {
    title: string,
    ref: React.RefObject<HTMLAnchorElement|null>,
    onClick?: () => void
}

export const NavBarItem = ({ title, ref, onClick }: NavBarItemsProps) => {

    const router = useRouter()
    return (
        <li onClick={e=>{
            e.preventDefault()
            onClick && onClick()
            title === "Home" ?
            //scroll to top smoothly
            window.scrollTo({top: 0, behavior: 'smooth'})
            :
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }} className="transition-all hover:bg-gray-100 font-medium cursor-pointer list-none p-5 md:hover:font-bold md:hover:bg-transparent">
            {title}
        </li>
    )
}