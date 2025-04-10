"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#0B0B0B] pb-28 pt-10 md:pb-32 md:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full md:hidden">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 md:pb-16 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-center font-playfair text-4xl font-[400] uppercase text-[#fff] md:text-6xl">
              REVIEWS FROM OUR CLIENTS
            </h3>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full px-0 md:ml-0 md:px-40">
              <CarouselContent className="flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className={`flex w-full max-w-[400px] basis-full flex-col items-center justify-center gap-6 rounded-none py-6 md:items-end md:justify-end md:py-12`}
                  >
                    <div className="flex flex-col items-center justify-center gap-6 px-6 pb-4">
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#DCB355]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-5 text-center font-inter text-sm font-[400] text-[#fff] md:text-base">
                          {review.text.text}
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-1">
                        <div className="flex flex-col">
                          <p className="font-inter text-sm font-[500] tracking-[0.54] text-[#fff] md:text-base">
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
      <div className="hidden h-full w-full flex-row gap-10 md:flex">
        <div className="flex w-[60%] flex-col items-center justify-center">
          <h1 className="font-italiana text-[150px] font-[400] uppercase leading-[90%] text-[#D0CFCF]">
            REVIEWS <br /> <span className="text-[100px]">FROM CLIENTS</span>
          </h1>
        </div>
        <div className="w-[40%]">
          <div className="flex w-full items-center justify-center">
            {reviews && (
              <Carousel className="w-full px-20">
                <CarouselContent className="flex w-full justify-center gap-4">
                  {reviews.map((review, index) => (
                    <CarouselItem
                      key={index}
                      className={`flex w-full max-w-[400px] basis-full flex-col items-center justify-center gap-6 rounded-none py-6 md:items-end md:justify-end md:py-12`}
                    >
                      <div className="flex flex-col items-center justify-center gap-6 px-6 pb-4">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#DCB355]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="line-clamp-5 text-center font-inter text-sm font-[400] text-[#fff] md:text-base">
                            {review.text.text}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1">
                          <div className="flex flex-col">
                            <p className="font-inter text-sm font-[500] tracking-[0.54] text-[#fff] md:text-base">
                              {review.authorAttribution.displayName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                  <CarouselPrevious className="text-[#fff] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                  <CarouselNext className="text-[#fff] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
