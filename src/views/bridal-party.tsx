import { useTranslations } from "next-intl";
import activities from '@/public/const/activities.json';
import { ActivitiesDayView } from "./activities-day-view";

export const BridalPartyView = () => {

    const t = useTranslations('bridal');
    return (
        <section className="section flex flex-col justify-center items-center gap-10">
            <h3 className="title">{t('title')}</h3>
        </section>
    );
}