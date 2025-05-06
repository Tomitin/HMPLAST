'use client';

import { DetailedImage } from "@/components/DetailedImage/DetailedImage";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useState } from "react";

// const categories = ["Automotive", "Sports equipment", "Medical", "Toys", "All"];
const images = [
  {
    src: "/hospital_bed_hd.png",
    name: "Hospital Bed",
    category: "Medical"
  },
  {
    src: "/hospital_bed_hd.png",
    name: "ospital Bed",
    category: "Medical"
  },
  {
    src: "/hospital_bed_hd.png",
    name: "pital Bed",
    category: "Medical"
  },
  {
    src: "/hospital_bed_hd.png",
    name: "al Bed",
    category: "Medical"
  },
  {
    src: "/ski-rack.png",
    name: "Ski Rack",
    category: "Sports equipment"
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
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  const selectedImages = selectedCategory === "All" ? images : Object.values(categoriesImages[selectedCategory]);

  const options = [...Object.keys(categoriesImages), "All"].map((category) => ({
    label: category,
    value: category
  }));


  
  return (
    <div className="p-8 pt-0">
      <div className="px-11 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Products</h1>
        <Dropdown label={selectedCategory} selectedValue={selectedCategory} onSelect={setSelectedCategory} options={options}/>
      </div>
      <div className="mt-10 flex gap-8 justify-center flex-wrap">
        {selectedImages.map((images) => {
          return (
            <div key={images.name}>
              <DetailedImage
                className="object-cover w-[450px]"
                src={images.src}
                width={450}
                height={450}
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
