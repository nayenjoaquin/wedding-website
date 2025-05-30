'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Activity = {
    key: string;
    time: string;
};

interface Props {
    mapKey: string;
    activities: Activity[];
}

export const ActivitiesDayView = ({ mapKey, activities }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const t = useTranslations('activities');

    const variants = {
        collapsed: {
            height: 0,
            opacity: 0,
            overflow: "hidden",
            transition: { duration: 0.2, ease: "easeInOut" },
        },
        expanded: {
            height: "auto",
            opacity: 1,
            overflow: "hidden",
            transition: { duration: 0.2, ease: "easeInOut" },
        },
    };

    return (
        <div
            onClick={e => {
                setExpanded(prev => !prev);
                e.stopPropagation();
            }}
            className="activities-day-view bg-white p-5 rounded-lg shadow-md cursor-pointer flex flex-col gap-2.5"
        >
            <h2 className="minititle">{t(mapKey)}</h2>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.ul
                        key="activities"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={variants}
                        className="activities-list flex flex-col"
                    >
                        {activities.map((activity, index) => (
                            <li key={index}>
                                <label className="font-bold">{activity.time}</label>
                                {activity.time === '' ? '' : ':'} {t(activity.key)}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
