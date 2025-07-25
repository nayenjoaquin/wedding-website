import { useTranslations } from "next-intl";
import people from  '@/public/const/bridal-party.json' ;

export const BridalPartyView = () => {

    const t = useTranslations('bridal');
    return (
        <section className="section flex flex-col justify-center items-center gap-5">
            <h3 className="title">{t('title')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl px-5">
                {
                    people.map(person => (
                        <div key={person.name} className="rounded-lg relative aspect-square group overflow-hidden flex justify-center items-center cursor-pointer">
                            <img src={`/images/${person.img}`} alt={person.name} className="w-full h-full absolute object-cover group-hover:scale-110 group-hover:blur-md transition-all" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative text-center z-10 hidden group-hover:block text-white">
                                <p className="font-semibold">{person.name}</p>
                                <p className="text-sm">{t(person['title-key'])}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}