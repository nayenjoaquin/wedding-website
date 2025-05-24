import { useTranslations } from "next-intl";


interface NavBarItemsProps {
    title: string,
    ref: React.RefObject<HTMLAnchorElement|null>,
    onClick?: () => void
}

export const NavBarItem = ({ title, ref, onClick }: NavBarItemsProps) => {

    const t = useTranslations('navbar');

    return (
        <li onClick={e=>{
            e.preventDefault();
            if(onClick) onClick();
            if(title === 'home'){
            //scroll to top smoothly
                window.scrollTo({top: 0, behavior: 'smooth'})
            }else{
                ref.current?.scrollIntoView({behavior: 'smooth'})
            }
        }} className="transition-all hover:bg-gray-100 font-medium cursor-pointer list-none p-5 md:hover:font-bold md:hover:bg-transparent">
            {t(title)}
        </li>
    )
}