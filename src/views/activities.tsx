import { useTranslations } from "next-intl";
import activities from '@/public/const/activities.json';
import { ActivitiesDayView } from "./activities-day-view";

export const ActivitiesView = () => {

    const t = useTranslations('activities');
    return (
        <section className="section flex flex-col justify-center items-center gap-10">
            <h3 className="title">{t('title')}</h3>
            <div className="flex flex-col gap-2.5 items-center p-5 w-full max-w-5xl">
                <p>{t('desc')}</p>
                <div className="flex flex-col gap-5 w-full">
                    {activities.map((activity) => (
                        <ActivitiesDayView activities={activity.activities} mapKey={activity.key} key={activity.key}  />
                    ))}
                </div>
            </div>
        </section>
    );
}