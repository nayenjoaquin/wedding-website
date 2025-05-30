import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


interface NavBarItemsProps {
    title: string,
    ref: string,
    locale: string,
    onClick?: () => void;
}

export const NavBarItem = ({ title, ref, locale, onClick }: NavBarItemsProps) => {

    const t = useTranslations('navbar');
    const router = useRouter();
    const handleClick = () => {

        if (onClick) {
            onClick();
        }
        if (ref.startsWith('/')) {
            router.push(`/${locale}/${ref}`);
        }
    }

    return (
        <li onClick={handleClick} className="list-none transition-all hover:bg-gray-100 font-medium cursor-pointer p-2.5 md:hover:font-bold md:hover:bg-transparent">
           {t(title)}
        </li>
    )
}