'use client';
import { useTranslations } from "next-intl";
import { useState } from "react";

type Activity = {
    key: string;
    time: string;
};

interface props {
    mapKey: string;
    activities: Activity[];
};
export const ActivitiesDayView = ({mapKey, activities}: props) => {

    const [expanded, setExpanded] = useState(false);
    const t = useTranslations('activities');
    return (
        <div onClick={e=>{
            setExpanded(expanded => !expanded);
            e.stopPropagation();
        }} className="activities-day-view bg-white p-5 rounded-lg shadow-md cursor-pointer flex flex-col gap-2.5">
            <h2 className="minititle">{t(mapKey)}</h2>
            <ul className={`activities-list ${expanded ? 'flex flex-col' : 'hidden'}`}>
                {activities.map((activity, index) => (
                    <li key={index}>
                        <label className="font-bold">
                            {activity.time}
                            </label>{activity.time=='' ? '' : ':'} {t(activity.key)}
                    </li>
                ))}
            </ul>
        </div>
    );
}