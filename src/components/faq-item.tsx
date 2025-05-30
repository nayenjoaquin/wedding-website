import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

interface FaqItemProps {
    item: {
        question: string,
        answer: string
    },
    index: number
}

export const FAQItem = ({ item, index }: FaqItemProps) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(prev => !prev)
    }

    const variants = {
        collapsed: {
            height: 0,
            opacity: 0,
            overflow: "hidden",
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        expanded: {
            height: "auto",
            opacity: 1,
            overflow: "hidden",
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            layout
            className="flex items-start gap-2.5 font-bold bg-white p-5 rounded-lg cursor-pointer w-full transition-all"
            onClick={handleClick}
        >
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2.5">
                        <span>{index + 1}.</span>
                        <p>{item.question}</p>
                    </div>
                    {expanded ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
                </div>

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={variants}
                            className="font-medium overflow-hidden"
                        >
                            <p className="mt-2">{item.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
