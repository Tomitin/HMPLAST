'use client';

import { DetailedImage } from "@/components/DetailedImage/DetailedImage";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useTranslations } from "next-intl";
import { useState } from "react";

// const categories = ["Automotive", "Sports equipment", "Medical", "Toys", "All"];
const images = [
  {
    src: "/products/hospital_bed_hd.png",
    name: "Hospital Bed",
    category: "Medical"
  },
  {
    src: "/products/toy.png",
    name: "Children's chair",
    category: "Medical"
  },
  {
    src: "/products/ski-rack.png",
    name: "Ski Rack",
    category: "Sports equipment"
  },
  {
    src: "/products/purun1.webp",
    name: "Arm chair",
    category: "Medical"
  }
];

export interface CategoriesImages {
  [category: string]: {
    [imageName: string]: {
      src: string;
      name: string
    }
  }
}


export default function Products() {
  const t = useTranslations("Products");
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const categoriesImages: CategoriesImages = images.reduce((accum, image) => {
    return {
      ...accum,
      [image.category]: {
        ...accum[image.category],
        [image.name]: {
          src: image.src,
          name: image.name
        }
      }
    }
  }, {} as CategoriesImages);

  const selectedImages = selectedCategory === "All Products" ? images : Object.values(categoriesImages[selectedCategory]);

  const options = [...Object.keys(categoriesImages), "All Products"].map((category) => ({
    label: category,
    value: category
  }));


  
  return (
    <div className="p-8 pt-0">
      <div className="max-w-[2500px] mx-auto md:px-11 pt-6 flex flex-wrap items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1>
        <div className="w-full mt-4 md:mt-0 md:w-fit flex justify-end">
          <Dropdown label={selectedCategory} selectedValue={selectedCategory} onSelect={setSelectedCategory} options={options}/>
        </div>
      </div>
      <div className="mt-10 flex gap-8 flex-wrap justify-center">
        {selectedImages.map((images) => {
          return (
            <div key={images.name}>
              <DetailedImage
                className="w-[450px] h-[300px]"
                src={images.src}
                width={450}
                height={300}
                imgTitle={images.name}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
