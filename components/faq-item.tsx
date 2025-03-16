import { useState } from "react"

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
        <div className="flex items-start gap-2.5 font-bold bg-white p-5 rounded-lg max-w-3xl cursor-pointer w-full transition-all" onClick={handleClick}>
            <span>{index}.-</span>
            <div>
                <p>{item.question}</p>
                <p className={`font-medium font-fancy ${!expanded ? 'hidden' : ''}`}>{item.answer}</p>
            </div>
        </div>
    )
}