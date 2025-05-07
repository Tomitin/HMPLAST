"use client"
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import React, { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Hamburguer } from "../Hamburger/Hamburguer";
import { useTranslations } from "next-intl";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  return (
    <nav className="fixed bg-white flex w-full h-[72px] px-4 md:px-20 py-4 z-30">
        <Link className="w-[150px] h-[40px]" href="/">
        <Image
            className="min-w-[150px] h-full"
            src="/hmplast.webp"
            alt="Vercel logomark"
            width={150}
            height={40}
        />
        </Link>
        {/* Mobile Screen */}
        <div className="w-full flex md:hidden justify-end items-center mt-[-8px]">
            <Hamburguer isHamburguerOpen={isMobileMenuOpen} setHamburguerOpen={setMobileMenuOpen} />
        </div>
        <div className={`w-full h-full ${isMobileMenuOpen ? "fixed" : "hidden"} top-[72px] -ml-4`}>
            <div className="bg-white h-full w-full flex-col justify-between items-center text-xl">
                <ul className="w-full border-b border-b-black">
                    <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`w-full py-2 pl-4 ${pathname === "/products" && "bg-[#e8e8e8]"}`}>
                        <Link className="" href="/products">{t('Products')}</Link>
                    </li>
                    <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`w-full py-2 pl-4 ${pathname === "/about-us" && "bg-[#e8e8e8]"}`}>
                        <Link className="" href="/about-us">{t('Our Company')}</Link>
                    </li>
                    <li onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`w-full py-2 pl-4 ${pathname === "/contact" && "bg-[#e8e8e8]"}`}>
                        <Link className="" href="/contact">{t('Contact')}</Link>
                    </li>
                </ul>
                <div className="flex items-end">
                    <LanguageSwitcher dropdownBoxSide="bottomRight" />
                </div>
            </div>
            
        </div>
        {/* Desktop screen */}
        <div className="w-full hidden md:flex items-center justify-between">
            <ul className="flex ml-14 gap-8 items-center text-lg">
                <li><Link className="font-medium hover:underline" href="/products">{t('Products')}</Link></li>
                <li><Link className="font-medium hover:underline" href="/about-us">{t('Our Company')}</Link></li>
                <li><Link className="font-medium hover:underline" href="/contact">{t('Contact')}</Link></li>
            </ul>
            <div className="flex items-center">
                <div className="flex items-center gap-1">
                <LanguageSwitcher dropdownBoxSide="bottomLeft" />
                </div>
            </div>
        </div>
    </nav>
)};
