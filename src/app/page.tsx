'use client';
import { JohnsonIcon } from "@/assets/icons/Johnson";
import { KazakhstanIcon } from "@/assets/icons/Kazakhstan";
import { PfizerIcon } from "@/assets/icons/Pfizer";
import { TurkeyIcon } from "@/assets/icons/Turkey";
import { WhatsappIcon } from "@/assets/icons/Whatsapp";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { MouseEvent } from "react";

export default function Home() {

  const phone = '905424081090'; // Brazil example number
  const defaultWhatsappMessage = "Hello! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(defaultWhatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const handleWhatsappClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLElement> | undefined) => {
    if(event) {
      event.preventDefault();
    }
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="total">
      <header>
        <nav className="fixed bg-white flex w-full justify-between h-[72px] px-20 py-4 z-30">
          <div className="flex">
            <Image
              src="/hmplast.webp"
              alt="Vercel logomark"
              width={150}
              height={100}
            />
            <ul className="flex ml-14 gap-8 items-center text-lg">
              <li><a className="font-medium hover:underline" href="#">Products</a></li>
              <li><a className="font-medium hover:underline" href="#">Our Company</a></li>
              <li><a className="font-medium hover:underline" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center">
            {/* <Button Icon={<WhatsappIcon />} buttonType="primary">
              Send us a message
            </Button> */}
            <div className="flex items-center gap-1">
              Español
            </div>
          </div>
        </nav>
      </header>
      <main className="">
        {/* Adding a background image to the section gives time for the video to load */}
        <section className="h-[94vh] bg-white">  
            <div className="bg-[url(/machine-2.png)] bg-no-repeat bg-position-[calc(50%)_calc(50%+100px)] bg-size-[1000px] absolute size-full z-20 px-20 flex flex-col">
              <div className="pt-[130px]">
                <div>
                  <h1 className="text-6xl text-center text-shadow-xs text-[56px]">Precision manufacturing for all industries</h1>
                </div>
                {/* <div className="mt-12">
                  <h4 className="text-2xl">We build the products you need <br/> with the best quality. </h4>
                </div>
                <div className="flex mt-6">
                  <Button className="mr-4" size="lg" Icon={<WhatsappIcon className="" />} buttonType="primary">
                    Send us a message
                  </Button>
                  <Button size="lg" buttonType="secondary">
                    How we work
                  </Button>
                </div> */}
              </div>
            </div>
        </section>
        <section className="px-20 py-10 bg-[#efefef]">
          <div className="flex justify-center mb-7">
            <h3 className="text-[32px] text-black font-bold">Trusted by 100+ clients worldwide.</h3>
          </div>
          <div className="overflow-hidden whitespace-nowrap w-full">
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

        <section className="p-20 bg-white">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-16">
                  <h3 className="text-4xl text-black font-bold mb-2">Comprehensive plastic and mold solutions.</h3>
                  <h5 className="text-xl text-[#6d6d6d]">We deliver customized manufacturing solutions for every industry using a broad range of materials.</h5>
                </div>
                <div className="flex gap-6">
                  <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                    <div className="">
                      <img width={300} className="rounded-t-md" src="/office_scene.png" />
                    </div>
                    <div className="px-4 py-4">
                      <h5 className="text-xl font-bold mb-2">Concept to Production</h5>
                      <p className="text-[#6d6d6d]">HM Plast provides comprehensive plastic and mold solutions —from concept to production— customized for each client.</p>
                    </div>
                  </div>
                  <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                    <div className="">
                      <img className="rounded-t-md" src="./industries.png" />
                    </div>
                    <div className="px-4 py-4">
                      <h5 className="text-xl font-bold mb-2">Industries we serve</h5>
                      <p className="text-[#6d6d6d]">We serve key industries including Medical, Educational, Sports Equipment, Plastic Platforms, Toys, the Automotive industry and more.</p>
                    </div>
                  </div>
                  <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                    <div className="">
                      <img className="rounded-t-md" src="./materials.png" />
                    </div>
                    <div className="px-4 py-4">
                      <h5 className="text-xl font-bold mb-2">Materials</h5>
                      <p className="text-[#6d6d6d]">We work with molds made out different materials, such as wood, plastic or metal, suited at client's request.</p>
                    </div>
                  </div>
                  <div className="card bg-[#F9F9F9] rounded-md w-[300px]">
                    <div className="">
                      <img className="rounded-t-md" src="./years_experience.png" />
                    </div>
                    <div className="px-4 py-4">
                      <h5 className="text-xl font-bold mb-2">Experience in the field</h5>
                      <p className="text-[#6d6d6d]">HM Plast has been working with state-of-the-art technology in mold and plastic solutions for over 15 years.</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-10" size="lg" onClick={handleWhatsappClick} buttonType="primary">
                  Learn about what we stand for
                </Button>
              </div>
            </div>
        </section>

        <section className="bg-white p-10">
          <div className="flex items-center flex-col">
            <h3 className="text-4xl text-black font-bold mb-2">From concept to production</h3>
            <h5 className="text-xl text-[#6d6d6d]">We make your ideas a reality.</h5>
          </div>
          <div className="mt-20">
          <div className="flex justify-between px-10 py-5">
              <div className="flex-1/2 flex justify-center">
                <img className="object-contain max-h-[100%] max-w-[450px] rounded-md" src="./businessmen_agreeing.png"/>
              </div>
              <div className="flex-1/2 flex flex-col items-center justify-center">
                <div>
                  <h4 className="text-3xl font-bold mb-2">Planning Phase</h4>
                  <p className="text-xl text-[#6d6d6d] max-w-[500px] mb-5">
                    Get in touch with us through WhatsApp or Email at <b>info@hmplast.com.tr</b> and start a conversation about what you desire to build, we'll take you step by step and give a quote for each item.
                  </p>
                    <a
                      href="" 
                      className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center" 
                      onClick={handleWhatsappClick}
                    >
                      Send us a message 
                      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-10 py-5 mt-20">
              <div className="flex-1/2 flex flex-col items-center justify-center">
                <div>
                  <h4 className="text-3xl font-bold mb-2">Designing Phase</h4>
                  <p className="text-xl text-[#6d6d6d] max-w-[500px] mb-5">
                    After coming to a deal on what needs to be manufactured, we'll proceed to build the prototype's design and get in more specifics of what you'll need.
                  </p>
                  <a 
                    className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center" 
                    href="#"
                  >
                    Read more about our values
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>

                </div>
              </div>
              <div className="flex-1/2 flex justify-center">
                <img className="object-contain max-w-[100%] max-h-[100%] rounded-md" src="/solidworks_hospital_bed.png"/>
              </div>
            </div>
            <div className="flex justify-between px-10 py-5 mt-20">
              <div className="flex-1/2 flex justify-center">
                <video className="object-cover w-[500px] rounded-md" autoPlay controls muted loop src="/videomakina.mp4" />    
                {/* <img src="https://placehold.co/500x250"/> */}
              </div>
              <div className="flex-1/2 flex flex-col justify-center items-center">
                <div>
                  <h4 className="text-3xl font-bold mb-2">Manufacturing Phase</h4>
                  <p className="text-xl text-[#6d6d6d] max-w-[500px] mb-5">
                    After designs are done, the products requested will start to be manufactured and get ready to be shipped. We can also deliver the products to any country you need.
                  </p>
                  <a 
                    className="text-green-600 hover:text-green-700 active:text-green-800 font-bold group inline-flex items-center"
                    href="#"
                  >
                    See products we've done 
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" onClick={handleWhatsappClick} buttonType="primary">
              Get in touch with us
            </Button>
          </div>
        </section>
        <section className="px-20 pt-5 mt-5 mb-20 bg-white">
          <div className="mb-10 flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-3">Industries we serve</h3>
            <h5 className="text-xl text-[#6d6d6d]">We deliver customized solutions in every industry using a broad range of materials.</h5>
          </div>

          <div className="flex gap-7 overflow-hidden overflow-x-scroll pb-3 mb-10">
              <img className="object-contain max-w-[450px] min-w-[450px] max-h-[250px]" src="./hospital_bed_hd.png" />
              <img className="object-contain max-w-[450px] min-w-[450px] max-h-[250px]" src="./toy.png" />
              <img className="object-contain max-w-[450px] min-w-[450px] max-h-[250px]" src="./ski-rack.png" />
              <img className="object-contain max-w-[450px] min-w-[450px] max-h-[250px]" src="./gancho.png" />
          </div>
          <div className="flex justify-center">
            <Button size="lg" onClick={handleWhatsappClick} buttonType="primary">
                See more products
            </Button>
          </div>
        </section>

        <section className="mb-20">
            <div className="mb-5 flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-3">Contact us</h3>
              <h5 className="text-xl text-[#6d6d6d]">We'd love to hear from you! Reach out to us via WhatsApp or Email for any inquiries or support.</h5>
            </div>
            <form className="max-w-4xl mx-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="p-4 rounded-lg bg-gray-100 placeholder-gray-500"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="p-4 rounded-lg bg-gray-100 placeholder-gray-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500"
              />
              <textarea
                placeholder="Message"
                required
                minLength={10}
                className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500 h-48 resize-none"
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  buttonType="primary"
                  size="lg"
                >
                  Send
                </Button>
              </div>
            </form>
        </section>
        <section className="bg-gray-700 p-10">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold">Our factories are located in</h3>
            <div className="flex mt-8">
              <div className="mr-64">
              <TurkeyIcon />
              </div>
              <KazakhstanIcon />
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="">
          footer
      </footer> */}
    </div>
  );
}
