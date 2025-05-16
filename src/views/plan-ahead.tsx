import { ReferenceSubtitle } from "@/src/components/reference-subtitle"
import { planRef } from "@/public/const/refs"
import { useTranslations } from "next-intl";

export const PlanAheadPage = () => {

    const t = useTranslations('planning');
    const tipping = useTranslations('tipping');
    const eatingOutPrices = useTranslations('eating_out');
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
                                <li>In many U.S. cities (including Denver), public transportation options are limited.</li>
                            </ul>
                            <p>
                                Renting a car is a necessity for getting around, especially in suburban or rural areas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="differences"><h4>{t('li3')}</h4></ReferenceSubtitle>
                        <div>
                            <ul className="list-disc pl-2.5">
                                <li>Personal space: Americans generally value personal space. Avoid standing too close to someone.</li>
                                <li>Direct communication: People tend to be more direct and less formal in the U.S. than in Chile.</li>
                                <li>Service culture: Americans often interact with service employees more casually, and it's common to ask servers or cashiers about their day.</li>
                            </ul>
                            <p>
                                Renting a car is a necessity for getting around, especially in suburban or rural areas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full">
                        <ReferenceSubtitle id="getting-ready"><h4>{t('li4')}</h4></ReferenceSubtitle>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Passport expiration</h5>
                            <p>Ensure your passport is valid for at least six months after your arrival date. Check your passport’s expiration date to avoid any travel disruptions.</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Applying for ESTA (Electronic System for Travel Authorization)</h5>
                            <ul className="list-disc">
                                <li>If you're eligible for the U.S. Visa Waiver Program (VWP), you need to apply for ESTA before traveling. The fee is approximately $21 USD.</li>
                                <li>Apply online, and approval is usually granted within a few minutes, but it’s recommended to apply well in advance.</li>
                                <li>New Chilean passports have been known to not work with it due to the changes made to them.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">If You Need a Visa (Tourist Visa)</h5>
                            <ul className="list-disc">
                                <li>If you’re not eligible for ESTA, you’ll need to apply for a B2 tourist visa at the U.S. Embassy. The visa fee is around $160 USD. It lasts 10 years.</li>
                                <li>You may need to travel to Santiago for an in-person appointment if you’re applying for a new passport.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Health Insurance</h5>
                            <p>Health care in the U.S. is very expensive. It's recommended to buy travel health insurance or ensure you have coverage before your trip.</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Booking Flights</h5>
                            <ul className="list-disc">
                                <li>Book your flight to Denver International Airport (DEN).</li>
                                <li>You can book early to get better deals or check if there are group discounts if you’re traveling with others from Chile.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Accommodation</h5>
                            <p>Airbnb could be a great option, especially for larger groups. Consider sharing homes or apartments to reduce costs.</p>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Renting a car</h5>
                            <ul className="list-disc">
                                <li>You will need a car to get around, as Uber and taxis can be expensive. You can organize groups of 5-6 people per car to save on rental costs.</li>
                                <li>Chris and Claudia can help by creating WhatsApp groups for people traveling from the same city to coordinate car rentals and share the cost.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h5 className="font-fancy font-medium text-xl">Group coordination</h5>
                            <p>To help everyone, Chris and I will create WhatsApp groups by city (e.g., “Concepción to Colorado” group) to help with shared accommodations, car rentals, and other logistics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}