import { IconRing } from "@/public/const/icons";
import { useTranslations } from "next-intl";

interface SaveTheDateButtonProps {
    onClick: () => void;
}

export const SaveTheDateButton = (props: SaveTheDateButtonProps) => {

    const t = useTranslations('home');
    return (
        <button onClick={props.onClick} className="rounded-md border-2 p-2.5 px-10 flex items-center justify-center border-white hover:scale-105 transition-all backdrop-blur-md">
            <IconRing size={20} color="white" />
            <span className="text-white">{t('save_the_date')}</span>
        </button>
    );
};