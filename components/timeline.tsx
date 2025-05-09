
import { TimeLineItem } from "./timeline-item";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TimelineProps{
    content: {
        img: string,
        text: string
    }[]
}


export const TimeLine = (props: TimelineProps) => {
    const {content} = props;
    const [active, setActive] = useState(0)

    const handleNext = ()=>{
        setActive((prev)=>{
            return prev < (content.length-1) ? prev + 1: 0
        })
        
    }
    const handlePrevious= ()=>{
        setActive((prev)=>{
            return prev>0 ? prev-1 : content.length-1
        })
        
    }
    return(
        <div className="w-full flex gap-2.5 justify-center items-center">
            <FaArrowLeft className="transition-all hover:scale-110 cursor-pointer" color="black" size={40} onClick={handlePrevious}/>
            {
                content.map((item,index)=>{
                    const {img, text} = item;
                    return(
                        active==index ?
                        <TimeLineItem key={img} img={img} text={text}  active={index==active} index={index} />
                        : null
                    )
                })
            }
            <FaArrowRight className="transition-all hover:scale-110 cursor-pointer" color="black" size={40} onClick={handleNext} />
        </div>
    )
}