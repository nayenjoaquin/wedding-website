import { AnimatedSection, SideEnum } from "@/src/components/animated-section"
import { visionRef } from "@/public/const/refs"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const WeddingVision = () => {

    const t = useTranslations('vision')
    return(
        <section ref={visionRef} className="section flex flex-col justify-center items-center gap-10">
            <h3 className="title">{t('title')}</h3>
            <AnimatedSection side={SideEnum.LEFT}>
                <div className="flex h-[calc(100vh - var(--nav-height))] flex-col md:flex-row-reverse items-center justify-center gap-2.5 md:gap-10 p-5">
                    <p className="text-md md:text-xl font-fancy md:max-w-lg">{t('desc1')}</p>
                    <Image className="max-w-60 md:max-w-lg max-h-[70vh] aspect-[3/4] p-2.5 md:p-5 bg-white pb-20 md:pb-32 shadow-md" src='/images/vision.png' width={2000} height={2000} alt=""/>
                </div>
            </AnimatedSection>
            <AnimatedSection side={SideEnum.RIGHT}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-10 p-5">
                    <p className="text-md md:text-xl font-fancy md:max-w-lg">{t('desc2')}</p>
                    <Image className="max-w-60 md:max-w-lg max-h-[70vh] aspect-[3/4] p-2.5 md:p-5 bg-white pb-20 md:pb-32 shadow-md" src='/images/vision2.png' width={2000} height={2000} alt=""/>
                </div>
            </AnimatedSection>
        </section>
    )
}