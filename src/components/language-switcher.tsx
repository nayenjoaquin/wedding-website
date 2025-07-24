'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import en from '@/public/images/en-icon.png';
import es from '@/public/images/es-icon.png';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1];
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.replace(segments.join('/'), { scroll: false });
    setExpanded(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative h-full w-fit p-2.5 flex flex-col items-center">
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="z-10 h-10 w-full flex gap-2.5 p-2.5 items-center cursor-pointer border-2 border-gray-200 rounded-xl bg-white"
      >
        <Image
          className="h-full w-fit aspect-[3/2] object-cover"
          src={locale === 'en' ? en : es}
          alt={locale === 'en' ? 'en' : 'es'}
          height={100}
          width={100}
        />
        {locale === 'en' ? 'English' : 'Español'}
      </div>
      {expanded && (
        <div className="flex w-fit flex-col bg-white shadow-xl absolute top-12 z-20 py-5">
          <button
            onClick={() => switchLanguage('en')}
            className="h-10 w-full p-2.5 flex gap-2.5 items-center hover:bg-gray-100"
          >
            <Image className="h-full w-fit aspect-[3/2] object-cover" src={en} alt="English" />
            <span>English</span>
          </button>
          <button
            onClick={() => switchLanguage('es')}
            className="h-10 p-2.5 flex gap-2.5 items-center hover:bg-gray-100"
          >
            <Image className="h-full w-fit aspect-[3/2] object-cover" src={es} alt="Español" />
            Español
          </button>
        </div>
      )}
    </div>
  );
}
