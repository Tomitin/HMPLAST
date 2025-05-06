import { routing } from "@/i18n/routing";
import "../../styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { InstagramIcon } from "@/assets/icons/Instagram";
import { LinkedInIcon } from "@/assets/icons/LinkedIn";
import { Navbar } from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMPLAST",
  description: "HMPLAST",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
        <header className="pb-[70px] sm:pb-[130px]">
          <Navbar />
        </header>
        {children}
        <footer className="mt-10 bg-black p-10 sm:p-20 flex flex-col sm:flex-row justify-between">
          <div>
            <Image
              className="h-[40px]"
              src="/hmplast_white.webp"
              alt="Vercel logomark"
              width={150}
              height={40}
            />
            <p className="text-[#666666] mt-1">Innovation in every part</p>
          </div>
          <div className="flex sm:flex-row flex-col gap-10 mt-10 sm:mt-0">
            <div className="flex flex-col">
              <p className="text-white mb-3">Factories</p>
              <p className="text-[#666666] max-w-[350px] mb-1">Corum, Turkey: CORUM INDUSTRIAL SITE 21ST STREET STREET NO:61</p>
              <p className="text-[#666666]">Karaganda, Kazakhstan: Kazybek Bi Badina N 105</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white mb-3">Contact</p>
              <p className="text-[#666666]">+90 542 408 10 90</p>
              <p className="text-[#666666] mb-2">info@hmplast.com.tr</p>
              <div className="text-[#666666] flex gap-4">
                <Link href={`https://www.instagram.com/hmplastofficial/`} target="_blank"><InstagramIcon /></Link>
                <Link href={`https://www.linkedin.com/company/hm-plastofficial/`} target="_blank"><LinkedInIcon /></Link>
              </div>
            </div>
          </div>
        </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
