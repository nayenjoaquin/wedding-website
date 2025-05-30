import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface TimeLineItemProps{
    img: string,
    text: string,
    active: boolean,
    index: number
}

export const TimeLineItem = (props: TimeLineItemProps) => {
    const {img,text, active, index} = props;
    const t = useTranslations('story');
    const variants = {
        hidden: {
            opacity: 0,
            scale: .5
        },
        visible: {
            opacity: 1,
            scale: 1,
        },

    }
    return(
        <motion.div transition={{
            duration: .3
        }} className="relative flex justify-center items-center" variants={variants} initial='hidden' animate='visible' exit='exit'>
        <Image src={`/images/${img}`} className={` aspect-[9/16] md:aspect-[3/4] w-[70vw] md:w-[500px] object-cover ${!active ? 'absolute' : 'relative'}`} alt={text} width={1000} height={1000} />
        <p className={`font-handwritten bg-white p-1 absolute text-lg md:text-xl ${(index%4)<2 ? 'top-5' : 'bottom-5'} ${(index%2)==0 ? 'right-[-50px]':'left-[-50px]'} w-full flex justify-center items-center`}>{t('text'+(index+1))}</p>
        </motion.div>
    )
}