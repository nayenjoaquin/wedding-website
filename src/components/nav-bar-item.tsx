import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";


interface NavBarItemsProps {
    title: string,
    ref: string,
    locale: string
}

export const NavBarItem = ({ title, ref, locale }: NavBarItemsProps) => {

    const t = useTranslations('navbar');

    return (
        <li className="list-none">
            <Link className="transition-all hover:bg-gray-100 font-medium cursor-pointer list-none p-5 pl-0 md:hover:font-bold md:hover:bg-transparent" href={ref} locale={locale}>
                {t(title)}
            </Link>
        </li>
    )
}