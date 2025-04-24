import { ReferenceSubtitle } from "@/components/reference-subtitle"
import { planRef } from "@/const/refs"

export const PlanAheadPage = () => {
    return(
        <div className="flex flex-col">
            <section ref={planRef} className="section flex flex-col gap-10 justify-center items-center p-5">
                <h2 className="title mb-10">PLANNING AHEAD</h2>
                <p className="max-w-2xl">For all our friends and family traveling from outside the U.S., here are some important tips and information to help you make the most of this experience.</p>
                <div className="flex justify-center gap-10 max-w-2xl">
                    <div className="flex flex-col gap-5 max-w-[50%] w-xs">
                        <h3 className="subtitle">First time in the US?:</h3>
                        <ul className="list-disc pl-5">
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#tiping">Culture of tiping</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#eating-out-prices">Eating Out Prices</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#transport">No Public Transportation</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#differences">Cultural Differences</a></li>
                            <li className="text-blue-700 font-semibold cursor-pointer"><a href="#getting-ready">Getting ready to travel</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 max-w-[50%] w-xs">
                        <h4 className="subtitle">Activities:</h4>
                        <p className="max-w-md">
                        We want our guests to feel prepared and enjoy their time here. That’s why we’ve put together a schedule filled with various activities designed to bring us closer and make your stay joyful and memorable.
                        <br />
                        <br />
                        <a href="https://drive.google.com/file/d/1VMfY4_HXAbk4yrr_CtPg383M2O2TuAeS/view?usp=drive_link" target="_blank" className="text-blue-700 font-semibold cursor-pointer">Check the full itinerary </a>to make sure you
                        pack everything you'll need.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section p-5 flex justify-center">
                <div className="max-w-2xl flex flex-col gap-10 p-2.5">
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="tiping">
                        <h4>Culture of tiping</h4>
                        </ReferenceSubtitle>
                        <div>
                            <p>Tipping is customary in the U.S. at restaurants, cafes, and taxis. Generally, you should tip:</p>
                                
                            <ul className="list-disc pl-2.5">
                                <li>Waitstaff: 15-20% of the bill.</li>
                                <li>Hotel staff: $1-2 per night for housekeeping.</li>
                                <li>Taxis/Uber: 10% of the fare.</li>
                                <li>Bartenders: $1-2 per drink.</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="eating-out-prices"><h4>Eating Out Prices</h4></ReferenceSubtitle>
                        <div>
                            <ul className="list-disc pl-2.5">
                                <li>Casual restaurants: $15-20 per person (not including tip).</li>
                                <li>Mid-range restaurants: $20-40 per person.</li>
                                <li>Fine dining: $50+ per person.</li>
                            </ul>
                            <p>
                                (Note: prices vary depending on location, but these are general estimates for areas like Denver).
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ReferenceSubtitle id="transport"><h4>No Public Transportation</h4></ReferenceSubtitle>
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
                        <ReferenceSubtitle id="differences"><h4>Cultural Differences</h4></ReferenceSubtitle>
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
                        <ReferenceSubtitle id="getting-ready"><h4>Getting ready to travel</h4></ReferenceSubtitle>
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