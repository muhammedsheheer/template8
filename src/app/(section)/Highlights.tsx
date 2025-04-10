import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    title: "FOOD",
    description:
      "Chili@Chili’s was born from a passion for bringing the rich, authentic flavors of Kerala to the table, with a commitment to fresh, locally sourced ingredients.",
  },
  {
    title: "DRINKS",
    description:
      "Explore our wide variety of drinks, from handcrafted cocktails to freshly brewed coffee and refreshing mocktails.",
  },
  {
    title: "ATMOSPHERE",
    description:
      "A warm and welcoming space, designed to make every dining experience comfortable, memorable, and enjoyable.",
  },
];

const Highlights: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative h-full w-full bg-[#000] px-4 pb-12 pt-12 md:px-0 md:pb-40 md:pt-14">
      <div className="absolute bottom-20 left-28 hidden md:block">
        <p className="max-w-[400px] font-inter text-sm font-[400] tracking-[0.32px] text-[#FFFDF1]">
          Our commitment to quality ingredients and home-style cooking has made
          us a local favorite, not just for Malayalees, but for anyone craving
          something bold, hearty, and delicious.
        </p>
      </div>
      <div className="absolute bottom-16 left-[37%] hidden md:block">
        <Image
          src={"/images/home/highlights/image1.png"}
          width={281}
          height={74}
          alt="image"
          className="h-auto w-full object-cover md:h-[500px]"
        />
      </div>
      <div className="z-50 flex flex-col">
        <h1 className="pb-6 text-center font-italiana text-7xl font-[400] uppercase tracking-[5px] text-[#D0CFCF] md:ml-20 md:pb-12 md:text-[280px] md:tracking-[110px]">
          MANNA
        </h1>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between">
          <div className="z-50 md:ml-28 md:w-[60%]">
            <h1 className="font-italiana text-3xl font-[400] uppercase text-[#FFFDF1] md:text-6xl">
              we offer <br />
              Unforgettable <br />
              Dining Experience
            </h1>
          </div>
          <div className="md:hidden">
            <Image
              src={"/images/home/highlights/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full object-cover md:h-full"
            />
            <p className="max-w-[400px] pt-6 font-inter text-sm font-[400] tracking-[0.32px] text-[#FFFDF1]">
              Our commitment to quality ingredients and home-style cooking has
              made us a local favorite, not just for Malayalees, but for anyone
              craving something bold, hearty, and delicious.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md bg-[#000] py-6 pl-6 pr-6 text-white md:w-[40%] md:pl-0 md:pr-24">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-white/50 py-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h2 className="font-italiana text-xl font-[400] uppercase text-[#FFFDF1] md:text-2xl">
                    {item.title}
                  </h2>
                  <ArrowRight
                    size={24}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "-rotate-45" : "rotate-[140deg]"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "mt-2 max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-inter text-sm font-[400] tracking-[0.32px] text-[#FFFDF1]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
