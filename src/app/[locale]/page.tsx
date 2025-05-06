'use client';
import { HeartIcon } from "@/assets/icons/Heart";
import { JohnsonIcon } from "@/assets/icons/Johnson";
import { PfizerIcon } from "@/assets/icons/Pfizer";
import { Button } from "@/components/Button/Button";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Link} from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const phone = '905424081090'; // Brazil example number
  const defaultWhatsappMessage = "Hello! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(defaultWhatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const handleWhatsappClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLElement> | undefined) => {
    if(event) {
      event.preventDefault();
    }
    window.open(whatsappUrl, "_blank")
    // redirect({ href: "/products", locale: locale });
  }

  return (
    <div className="total">
      <main className="">
        <section className="h-[78vh] bg-white">  
            <div className="bg-[url(/machine-2.png)] bg-no-repeat bg-position-[calc(50%)_calc(50%+50px)] sm:bg-position-[calc(50%)_calc(50%)] bg-size-[600px] sm:bg-size-[700px] md:bg-size-[1000px] absolute size-full z-20 flex flex-col">
              <div className="mt-10 sm:mt-0">
                <h1 className="text-[40px] sm:text-[56px] text-center text-shadow-xs px-4 sm:px-0">{t('Precision manufacturing for all industries')}</h1>
              </div>
            </div>
        </section>
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

        <section className="sm:px-20 py-20 bg-white">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="text-center sm:text-left px-4 sm:px-0 flex flex-col items-center mb-16">
                  <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">{t('Comprehensive plastic and mold solutions')}</h3>
                  <h5 className="text-md sm:text-xl text-[#6d6d6d]">{t('We deliver customized manufacturing solutions for every industry using a broad range of materials')}</h5>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
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
                <Button className="mt-10" size="lg" onClick={handleWhatsappClick} buttonType="primary">
                  {t('Learn about what we stand for')}
                </Button>
              </div>
            </div>
        </section>

        <section className="bg-white px-6 sm:px-10 py-10">
          <div className="text-center sm:text-left flex items-center flex-col">
            <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2 text-center">{t('From concept to production')}</h3>
            <h5 className="text-md sm:text-xl text-[#6d6d6d]">{t('We make your ideas a reality')}</h5>
          </div>
          <div className="mt-10 sm:mt-20">
            <div className="flex flex-wrap justify-between sm:px-10 py-5">
                <div className="mb-8 sm:mb-0 flex-1/2 flex justify-center">
                  <img className="max-h-[100%] max-w-[300px] sm:max-w-[450px] rounded-md" src="./businessmen_agreeing.png"/>
                </div>
                <div className="flex-1/2 flex flex-col items-center justify-center">
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
                <div className="sm:px-10">
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
              <div className="flex-1/2 flex justify-center mb-8 sm:mb-0">
                <img className="object-contain max-w-[300px] sm:max-w-[450px] max-h-[100%] rounded-md" src="/solidworks_hospital_bed.png"/>
              </div>
            </div>


            <div className="flex flex-wrap justify-between sm:px-10 py-5 mt-10 sm:mt-20">
                <div className="flex-1/2 flex justify-center mb-8 sm:mb-0">
                  <video className="object-cover w-[500px] rounded-md" autoPlay controls muted loop src="/videomakina.mp4" />    
                </div>
                <div className="flex-1/2 flex flex-col justify-center items-center">
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
        <section className="px-6 pt-5 mt-5 mb-20 bg-white">
          <div className="mb-10 flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-3 text-center">{t('Industries we serve')}</h3>
            <h5 className="text-xl text-[#6d6d6d] text-center">{t('We deliver customized solutions in every industry using a broad range of materials')}</h5>
          </div>
          <div className="flex justify-center gap-6">
            <div className="bg-gray-100 py-4 px-6 rounded-xl">
              <HeartIcon width={160} height={160} />
              <h3 className="text-2xl text-green-600 font-bold text-center">Health →</h3>
            </div>
          </div>




{/* 
          <div className="flex gap-16 overflow-hidden overflow-x-scroll p-3 mb-10">
              <DetailedImage Icon={<HeartIcon width={45} height={45} />} className="object-fit max-w-[400px] min-w-[400px] max-h-[250px]" src="./hospital_bed_hd.png" />
              <DetailedImage Icon={<BabyIcon width={45} height={45}/>} className="object-fit max-w-[400px] min-w-[400px] max-h-[250px]" src="./toy.png" />
              <DetailedImage Icon={<BallIcon width={45} height={45}/>} className="object-fit max-w-[400px] min-w-[400px] max-h-[250px]" src="./ski-rack.png" />
              <DetailedImage Icon={<SafetyIcon width={45} height={45}/>} className="object-fit max-w-[400px] min-w-[400px] max-h-[250px]" src="./gancho.png" />
          </div> */}
          <div className="mt-8 flex justify-center">
            <Button size="lg" onClick={handleWhatsappClick} buttonType="primary">
                {t('See more products')}
            </Button>
          </div>
        </section>

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
