'use client';
import Image from "next/image";

export default function AboutUs() {

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
        <h1 className="text-4xl font-bold mb-6">About HMPLAST</h1>
        <p>HM Plast has been operating for over 15 years as a company specialized in the plastic and mold sector. It has a leading position in the medical and educational sectors, as well as manufacturing various products for sports equipment, plastic platforms, toys and the automotive sectors. It offers end-to-end services in the projecting, design, production and mold projecting processes of plastic products. It offers innovative design and production solutions to meet the needs of customers.</p>
        <h4 className="text-2xl font-bold mt-4 mb-2">Mission</h4>
        <p className="mb-2">HM Plast is working resolutely to be recognized as a leading brand specialized in the plastic and mold sector and to become a preferred supplier worldwide. We strive to meet the needs of its customers and exceed their expectations by offering high quality plastic products, including contract manufacturing and R&D studies. It aims to be a pioneer in the sector with its understanding of innovation and perfectionism.</p>
      </div>
    </div>
  );
}
