'use client';

import { InstagramIcon } from "@/assets/icons/Instagram";
import { LinkedInIcon } from "@/assets/icons/LinkedIn";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-wrap-reverse justify-between">
      <div className="ml-8 my-8">
          <div className="p-4 bg-[#1111110D] rounded-2xl w-[350px]">
            <h4 className="text-lg font-bold mb-7 px-2">Find us</h4>
              <div className="px-2">
                <h5 className="text-[16px] font-bold">Turkey</h5>
                <p className="text-[#666666] text-[16px]">Corum, Turkey: CORUM INDUSTRIAL SITE 21ST STREET STREET NO:61</p>
              </div>
              <hr className="my-5" />
              <div className="px-2">
                <h5 className="text-[16px] font-bold">Kazakhstan</h5>
                <p className="text-[#666666] text-[16px]">Karaganda, Kazakhstan: Kazybek Bi Badina N 105</p>
              </div>
              <div className="text-[#666666] mt-4 flex gap-4 px-2">
                <Link href={`https://www.instagram.com/hmplastofficial/`} target="_blank"><InstagramIcon width={24} height={24} /></Link>
                <Link href={`https://www.linkedin.com/company/hm-plastofficial/`} target="_blank"><LinkedInIcon width={24} height={24} /></Link>
              </div>
          </div>
      </div>
      <div className="flex-2/3 mx-8 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-xl font-bold">Contact Us</h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
