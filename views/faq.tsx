import { faqRef } from "@/const/refs"
import faq from '@/const/faq.json'
import { FAQItem } from "@/components/faq-item"

export const FAQView = () => {
    return(
        <section ref={faqRef}  className="section flex flex-col justify-center items-center gap-10">
            <h3 className="font-fancy text-3xl md:text-5xl">FAQ</h3>
            <div className="flex flex-col gap-2.5 items-center p-5 w-full max-w-5xl">
            {
                faq.map(((item, i)=>{
                    return(
                        <FAQItem item={item} key={i} index={i}/>
                    )
                }))
            }
            </div>
        </section>
    )
}