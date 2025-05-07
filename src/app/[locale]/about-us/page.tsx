'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex flex-wrap justify-between p-7">
      <div className="min-w-[270px] md:min-w-[500px] flex-1/2">
        <Image
          className=""
          src="/warehouse.jpg"
          alt="Vercel logomark"
          width={800}
          height={600}
        />
      </div>
      <div className="flex-1/2 pt-9 sm:p-12">
        <h1 className="text-4xl font-bold mb-6">{t('About')}</h1>
        <p>{t('HM Plast has been operating for over 15 years')}</p>
        <h4 className="text-2xl font-bold mt-4 mb-2">{t('Mission')}</h4>
        <p className="mb-2">{t('HM Plast is working resolutely to be recognized')}</p>
      </div>
    </div>
  );
}
