'use client';
import { JohnsonIcon } from "@/assets/icons/Johnson";
import { PfizerIcon } from "@/assets/icons/Pfizer";
import { Button } from "@/components/Button/Button";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Link, redirect} from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale()
  const HMPLAST_NUMBER = '905424081090';
  const defaultWhatsappMessage = "Hello! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(defaultWhatsappMessage);
  const whatsappUrl = `https://wa.me/${HMPLAST_NUMBER}?text=${encodedMessage}`;

  const handleWhatsappClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLElement> | undefined) => {
    if(event) {
      event.preventDefault();
    }
    window.open(whatsappUrl, "_blank")
  }

  const handleProductsClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLElement> | undefined) => {
    if(event) {
      event.preventDefault();
    }
    redirect({ href: "/products", locale: locale });
  }

  const handleAboutUsClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLElement> | undefined) => {
    if(event) {
      event.preventDefault();
    }
    redirect({ href: "/about-us", locale: locale });
  }

  return (
    <div>
      <main>
        {/* HERO */}
        <section className="bg-white" style={{height: "78dvh"}}>  
            <h1 className="font-medium text-4xl sm:text-[32px] md:text-[40px] text-center text-shadow-xs px-4 sm:px-0">{t('Precision manufacturing for all industries')}</h1>
            <div className="bg-[url(/machine-2.png)] bg-no-repeat bg-position-[calc(50%)_calc(50%-150px)] md:bg-position-[calc(50%)_calc(50%-75px)] lg:bg-position-[calc(50%)_calc(50%-100px)] bg-size-[100vh] xl:bg-size-[900px] absolute size-full z-20 flex flex-col"></div>
        </section>
        {/* Roulette */}
        <section className="sm:px-20 py-10 bg-[#efefef]">
          <div className="mx-4 sm:mx-0 flex justify-center mb-7">
            <h3 className="text-[32px] text-black font-bold text-center">{t('Trusted by 100+ clients worldwide')}</h3>
          </div>
          <div className="box-border overflow-hidden whitespace-nowrap w-full">
            <div className="flex gap-8 animate-scroll-left">
              <div><JohnsonIcon width={300} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><JohnsonIcon width={300} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><PfizerIcon width={140} height={70}/></div>
              <div><JohnsonIcon width={300} height={70}/></div>
            </div>
          </div>
        </section>
        {/* Plastic solutions */}
        <section className="sm:px-20 py-20 bg-white">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="text-center sm:text-left px-4 sm:px-0 flex flex-col items-center mb-16">
                  <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">{t('Comprehensive plastic and mold solutions')}</h3>
                  <h5 className="text-md sm:text-xl text-[#6d6d6d]">{t('We deliver customized manufacturing solutions for every industry using a broad range of materials')}</h5>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex justify-center flex-wrap sm:flex-nowrap gap-6">
                    <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                      <div className="">
                        <img width={300} className="rounded-t-md" src="/office_scene.png" />
                      </div>
                      <div className="px-4 py-4">
                        <h5 className="text-xl font-bold mb-2">{t('Concept to Production')}</h5>
                        <p className="text-[#6d6d6d]">{t('HM Plast provides comprehensive plastic and mold solutions —from concept to production— customized for each client')}</p>
                      </div>
                    </div>
                    <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                      <div className="">
                        <img className="rounded-t-md" src="./industries.png" />
                      </div>
                      <div className="px-4 py-4">
                        <h5 className="text-xl font-bold mb-2">{t('Industries we serve')}</h5>
                        <p className="text-[#6d6d6d]">{t('We serve key industries including Medical, Educational, Sports Equipment, Plastic Platforms, Toys, the Automotive industry and more')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-wrap sm:flex-nowrap gap-6">
                    <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                      <div className="">
                        <img className="rounded-t-md" src="./materials.png" />
                      </div>
                      <div className="px-4 py-4">
                        <h5 className="text-xl font-bold mb-2">{t('Materials')}</h5>
                        <p className="text-[#6d6d6d]">{t(`We work with molds made out different materials, such as wood, plastic or metal, suited at client's request`)}</p>
                      </div>
                    </div>
                    <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                      <div className="">
                        <img className="rounded-t-md" src="./years_experience.png" />
                      </div>
                      <div className="px-4 py-4">
                        <h5 className="text-xl font-bold mb-2">{t('Experience in the field')}</h5>
                        <p className="text-[#6d6d6d]">{t('HM Plast has been working with state-of-the-art technology in mold and plastic solutions for over 15 years')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="mt-10" size="lg" onClick={handleAboutUsClick} buttonType="primary">
                  {t('Learn about what we stand for')}
                </Button>
              </div>
            </div>
        </section>
        {/* From Conception to production */}
        <section className="bg-white px-6 sm:px-10 py-10">
          <div className="text-center sm:text-left flex items-center flex-col">
            <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2 text-center">{t('From concept to production')}</h3>
            <h5 className="text-md sm:text-xl text-[#6d6d6d]">{t('We make your ideas a reality')}</h5>
          </div>
          <div className="max-w-[2500px] mx-auto mt-10 sm:mt-20">
            <div className="flex flex-wrap justify-between sm:px-10 py-5">
                <div className="mb-8 sm:mb-4 md:mb-0 flex-1/2 flex justify-center pr-4">
                  <img className="max-h-[100%] max-w-[300px] sm:max-w-[450px] rounded-md" src="./businessmen_agreeing.png"/>
                </div>
                <div className="flex-1/2 flex flex-col items-center justify-center sm:pl-4">
                  <div>
                    <h4 className="text-3xl font-bold mb-2">{t('Planning Phase')}</h4>
                    <p className="text-xl text-[#6e4747] max-w-[500px] mb-5">
                      {t(`PlanningPhaseDescription`)}
                    </p>
                      <a
                        href="" 
                        className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center justify-center" 
                        onClick={handleWhatsappClick}
                      >
                        {t('Send us a message')}
                        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                  </div>
                </div>
            </div>


            <div className="flex flex-wrap-reverse justify-between sm:px-10 py-5 mt-10 sm:mt-20">
              <div className="flex-1/2 flex flex-col items-center justify-center">
                <div className="sm:px-4">
                  <h4 className="text-3xl font-bold mb-2">{t('Designing Phase')}</h4>
                  <p className="text-xl text-[#6d6d6d] max-w-[500px] mb-5">
                    {t("After coming to a deal on what needs to be manufactured, we'll proceed to build the prototype's design and get in more specifics of what you'll need")}
                  </p>
                  <Link 
                    className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center" 
                    href="/about-us"
                  >
                    {t('Read more about our values')}
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
              <div className="sm:pl-4  flex-1/2 flex justify-center mb-8 sm:mb-4 md:mb-0">
                <img className="object-contain max-w-[300px] sm:max-w-[450px] max-h-[100%] rounded-md" src="/solidworks_hospital_bed.png"/>
              </div>
            </div>


            <div className="flex flex-wrap justify-between sm:px-10 py-5 mt-10 sm:mt-20">
                <div className="pr-4 flex-1/2 flex justify-center mb-8 sm:mb-4 md:mb-0">
                  <video className="object-cover max-h-[100%] min-w-[300px] sm:max-w-[450px] rounded-md" autoPlay controls muted loop src="/videomakina.mp4" />    
                </div>
                <div className="sm:pl-4 flex-1/2 flex flex-col justify-center items-center">
                  <div>
                    <h4 className="text-3xl font-bold mb-2">{t('Manufacturing Phase')}</h4>
                    <p className="text-xl text-[#6d6d6d] max-w-[500px] mb-5">
                      {t('ManufacturingPhaseDescription')}
                    </p>
                    <Link 
                      className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center"
                      href="/products"
                    >
                      {t(`See products we've done`)}
                      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" onClick={handleWhatsappClick} buttonType="primary">
              {t('Get in touch with us')}
            </Button>
          </div>
        </section>
        {/* Industries we serve */}
        <section className="mt-5 mb-2 w-full bg-black">
          <div className="max-w-[2500px] mx-auto flex flex-wrap-reverse md:flex-nowrap">
            <div className="flex-1/2 min-w-[300px] flex flex-col justify-center py-12 md:py-8 px-6 md:px-16">
              <h3 className="text-2xl md:text-5xl text-white font-bold mb-3">{t('Industries we serve')}</h3>
              <h5 className="text-lg md:text-xl text-white max-w-[500px] mb-5">{t('We make products for all type of industries accross the globe')}</h5>
              <div className="">
                <Button size="lg" onClick={handleProductsClick} buttonType="primary">
                  {t('See products')}
                </Button>
              </div>
            </div>
            <div className="flex-1/2">
              <Image 
                className="w-full h-full object-cover"
                src={"/male-working.jpeg"}
                width={1300}
                height={900}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Contact us */}
        <section className="mb-20 p-6">
            <div className="mb-8 flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-3">{t('Contact us')}</h3>
              <h5 className="text-xl text-center text-[#6d6d6d]">{t(`We'd love to hear from you! Reach out to us via WhatsApp or Email for any inquiries or support`)}</h5>
            </div>
            <div className="flex justify-center">
              <ContactForm />
            </div>
        </section>
      </main>
    </div>
  );
}
