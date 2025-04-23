import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

interface FaqItemProps{
    item: {
        question: string,
        answer: string
    },
    index: number
}

export const FAQItem = (props : FaqItemProps) => {
    const {item, index} = props
    const [expanded, sertExpanded] = useState(false)

    const handleClick = () =>{
        sertExpanded(prev =>{
            return !prev
        })
    }
    return(
        <div className="flex items-start gap-2.5 font-bold bg-white p-5 rounded-lg cursor-pointer w-full transition-all" onClick={handleClick}>
            <div className="w-full ">
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2.5">
                        <span>{index + 1}.</span>
                        <p>{item.question}</p>
                    </div>
                    {
                        expanded ?
                        <FaAngleUp size={24}/>
                        : <FaAngleDown size={24} />
                    }
                </div>
                <p className={`font-medium ${!expanded ? 'hidden' : ''}`}>{item.answer}</p>
            </div>
        </div>
    )
}