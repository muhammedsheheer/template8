"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] py-12">
      <div className="absolute right-[13%] top-[17%] hidden md:block">
        <Link href={"/menu"}>
          <Button
            className={
              "rounded-none border border-[#fff] bg-[#fff] px-6 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#000] hover:bg-[#e2dcdc] hover:text-[#111]"
            }
          >
            View Menu
          </Button>
        </Link>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 pb-4 md:flex-row md:gap-0 md:pb-8">
                <h6 className="text-center font-italiana text-5xl font-[400] uppercase tracking-[-4px] text-[#D0CFCF] md:text-7xl">
                  Signatures
                </h6>

                <div className="md:hidden">
                  <Link href={"/menu"}>
                    <Button
                      className={
                        "rounded-none border border-[#fff] bg-[#fff] px-6 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#000] hover:bg-[#e2dcdc] hover:text-[#111]"
                      }
                    >
                      View Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
