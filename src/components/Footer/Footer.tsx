"use client"
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { InstagramIcon } from "@/assets/icons/Instagram";
import { LinkedInIcon } from "@/assets/icons/LinkedIn";

export const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-10 bg-black p-10 sm:p-20 flex flex-col sm:flex-row justify-between">
        <div>
        <Image
            className="h-[40px]"
            src="/hmplast_white.webp"
            alt="Vercel logomark"
            width={150}
            height={40}
        />
        <p className="text-[#666666] mt-1">{t('Innovation in every part')}</p>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 mt-10 sm:mt-0">
        <div className="flex flex-col">
            <p className="text-white mb-3">{t('Factories')}</p>
            <p className="text-[#666666] max-w-[350px] mb-1">Corum, Turkey: CORUM INDUSTRIAL SITE 21ST STREET STREET NO:61</p>
            <p className="text-[#666666]">Karaganda, Kazakhstan: Kazybek Bi Badina N 105</p>
        </div>
        <div className="flex flex-col">
            <p className="text-white mb-3">{t('Contact')}</p>
            <p className="text-[#666666]">+90 542 408 10 90</p>
            <p className="text-[#666666] mb-2">info@hmplast.com.tr</p>
            <div className="text-[#666666] flex gap-4">
            <Link href={`https://www.instagram.com/hmplastofficial/`} target="_blank"><InstagramIcon /></Link>
            <Link href={`https://www.linkedin.com/company/hm-plastofficial/`} target="_blank"><LinkedInIcon /></Link>
            </div>
        </div>
        </div>
    </footer>
)};
