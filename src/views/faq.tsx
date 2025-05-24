import { faqRef } from "@/public/const/refs"
import faq from '@/public/const/faq.json'
import { FAQItem } from "@/src/components/faq-item"
import { useTranslations } from "next-intl"

export const FAQView = () => {

    const t = useTranslations('faq')
    return(
        <section ref={faqRef}  className="section flex flex-col justify-center items-center gap-10">
            <h3 className="title">FAQ</h3>
            <div className="flex flex-col gap-2.5 items-center p-5 w-full max-w-5xl">
            {
                faq.map(((item, i)=>{
                    return(
                        <FAQItem item={{
                            question: t('q'+i),
                            answer: t('a'+i)
                        }} key={i} index={i}/>
                    )
                }))
            }
            </div>
        </section>
    )
}