import Image from "next/image";
import { motion } from "motion/react";

interface TimeLineItemProps{
    img: string,
    text: string,
    direction: number
    active: boolean,
    index: number
}

export const TimeLineItem = (props: TimeLineItemProps) => {
    const {img,text, direction, active, index} = props;
    const variants = {
        enter: {
            x: direction < 0 ? 500 : -500,
            opacity: 0,
        },
        center: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8
            }
        },
        exit: (direction: number) => ({
            x: direction==0 ? 0 : direction<0 ? -500 : 500,
            opacity: 0,
            scale: 0.9,
            transition:{
                duration: 0
            }
        })

    }
    return(
        <motion.div className="relative flex justify-center items-center" variants={variants} custom={direction} initial='enter' animate='center' exit='exit'>
        <Image src={`/images/${img}`} className={` aspect-[9/16] md:aspect-[3/4] w-[70vw] md:w-[500px] object-cover ${!active ? 'absolute' : 'relative'}`} alt={text} width={1000} height={1000} />
        <p className={`font-handwritten bg-white p-1 absolute text-xl md:text-3xl ${(index%4)<2 ? 'top-5' : 'bottom-5'} ${(index%2)==0 ? 'right-[-50px]':'left-[-50px]'} w-full flex justify-center items-center`}>{text}</p>
        </motion.div>
    )
}