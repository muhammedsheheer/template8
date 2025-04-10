import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#0B0B0B]">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col gap-4 bg-[#0B0B0B] md:flex-row">
            <div className="grid w-full grid-cols-1 gap-4 bg-[#0B0B0B] px-4 md:w-[37%] md:grid-cols-2 md:px-0">
              <Image
                src={"/images/home/follow/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <Image
                src={"/images/home/follow/image2.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <Image
                src={"/images/home/follow/image3.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <Image
                src={"/images/home/follow/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-2 bg-[#fff] py-40 md:w-[26%] md:py-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-center font-playfair text-4xl font-[400] text-[#000] md:text-6xl">
                  SCROLL <br />
                  US
                </h1>
              </div>
            </div>
            <div className="w-full px-4 md:w-[37%] md:px-0">
              <Image
                src={"/images/home/follow/image5.png"}
                width={281}
                height={74}
                alt="image"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
