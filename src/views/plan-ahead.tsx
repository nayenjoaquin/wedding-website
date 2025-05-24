import { ReferenceSubtitle } from "@/src/components/reference-subtitle"
import { planRef } from "@/public/const/refs"
import { useTranslations } from "next-intl";

export const PlanAheadPage = () => {

    const t = useTranslations('planning');
    const tipping = useTranslations('tipping');
    const eatingOutPrices = useTranslations('eating_out');
    const transportation = useTranslations('transportation');
    const differences = useTranslations('differences');
    const passport = useTranslations('passport');
    const esta = useTranslations('esta');
    const visa = useTranslations('visa');
    const insurance = useTranslations('insurance');
    const flights = useTranslations('flights');
    const accommodation = useTranslations('accommodation');
    const car = useTranslations('car');
    const group = useTranslations('group');
    return(
        <div className="flex flex-col">
            <section ref={planRef} className="section flex flex-col gap-10 justify-center items-center p-5">
                <h2 className="title mb-10">{t('title')}</h2>
                <p className="max-w-2xl">{t('desc')}</p>
                <div className="flex justify-center gap-10 max-w-2xl">
                    <div className="flex flex-col gap-5 max-w-[50%] w-xs">
                        <h3 className="subtitle">{t('subtitle1')}</h3>
                        <ul className="list-disc pl-5">
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#tiping">{t('li0')}</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#eating-out-prices">{t('li1')}</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#transport">{t('li2')}</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#differences">{t('li3')}</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#getting-ready">{t('li4')}</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 max-w-[50%] w-xs">
                        <h4 className="subtitle">{t('subtitle2')}</h4>
                        <p className="max-w-md">
                        {t('desc1')}<br />
                        <br />
                        <a href="https://drive.google.com/file/d/1VMfY4_HXAbk4yrr_CtPg383M2O2TuAeS/view?usp=drive_link" target="_blank" className="text-blue-700 font-semibold cursor-pointer">{t('itinerary_link')} </a>{t('desc2')}
                        </p>
                    </div>
                </div>
            </section>
            <section className="section p-5 flex justify-center">
                <div className="max-w-2xl flex flex-col gap-10 p-2.5">
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="tiping">
                        <h4>{t('li0')}</h4>
                        </ReferenceSubtitle>
                        <div>
                            <p>{t('desc')}</p>
                                
                            <ul className="list-disc pl-2.5">
                                <li>{tipping('li0')}</li>
                                <li>{tipping('li1')}</li>
                                <li>{tipping('li2')}</li>
                                <li>{tipping('li3')}</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="eating-out-prices"><h4>{t('li1')}</h4></ReferenceSubtitle>
                        <div>
                            <ul className="list-disc pl-2.5">
                                <li>{eatingOutPrices('li0')}</li>
                                <li>{eatingOutPrices('li1')}</li>
                                <li>{eatingOutPrices('li2')}</li>
                            </ul>
                            <p>
                                {eatingOutPrices('desc')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="transport"><h4>{t('li2')}</h4></ReferenceSubtitle>
                        <div>
                            <ul className="list-disc pl-2.5">
                                <li>{transportation('li')}</li>
                            </ul>
                            <p>
                                {transportation('desc')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="differences"><h4>{t('li3')}</h4></ReferenceSubtitle>
                        <div>
                            <ul className="list-disc pl-2.5">
                                <li>{differences('li0')}</li>
                                <li>{differences('li1')}</li>
                                <li>{differences('li2')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full">
                        <ReferenceSubtitle id="getting-ready"><h4>{t('li4')}</h4></ReferenceSubtitle>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{passport('title')}</h5>
                            <p>{passport('desc')}</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{esta('title')}</h5>
                            <ul className="list-disc">
                                <li>{esta('li0')}</li>
                                <li>{esta('li1')}</li>
                                <li>{esta('li2')}</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{visa('title')}</h5>
                            <ul className="list-disc">
                                <li>{visa('li0')}</li>
                                <li>{visa('li1')}</li>

                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{insurance('title')}</h5>
                            <p>{insurance('desc')}</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{flights('title')}</h5>
                            <ul className="list-disc">
                                <li>{flights('li0')}</li>
                                <li>{flights('li1')}</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{accommodation('title')}</h5>
                            <p>{accommodation('desc')}</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{car('title')}</h5>
                            <ul className="list-disc">
                                <li> {car('li0')}</li>
                                <li> {car('li1')}</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">{group('title')}</h5>
                            <p>{group('desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}