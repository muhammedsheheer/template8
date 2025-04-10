import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000]">
      <div className="flex flex-col md:flex-row">
        <div className="ml-4 flex w-full flex-col gap-4 py-20 md:ml-16 md:mt-24 md:w-1/2 md:py-0">
          <h2 className="font-playfair text-4xl font-[400] uppercase text-[#FFFDF1] md:text-6xl">
            Reserve <br />
            Your Table
          </h2>
          <p className="w-full max-w-[350px] font-inter text-sm font-[400] capitalize text-[#FFFDF1] md:text-base">
            Experience the true flavors of Kerala with a dining experience like
            no other. Whether it’s a family gathering, a special celebration, or
            a casual meal, we’ve got the perfect spot for you.
          </p>
          <div>
            <Link href={"/menu"}>
              <Button
                className={
                  "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-poppins text-xs font-[500] capitalize tracking-[0.96px] text-[#C93732] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <Image
            src={"/images/home/reserve/image1.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full object-cover md:h-full"
          />
          <Image
            src={"/images/home/reserve/image2.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
