"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000] px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logo.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center gap-4 md:items-start">
                  {/* <span className="flex flex-col pb-4 text-center font-poppins text-xs font-[500] uppercase text-[#fff] md:text-start md:text-sm">
                    contact
                  </span> */}
                  <span>
                    <Link
                      className="flex flex-col text-center font-inter text-xs font-[400] uppercase text-[#fff] md:text-start md:text-sm"
                      target="_blank"
                      href={"https://g.co/kgs/Qptk8qA"}
                    >
                      48 Duke St, Northampton <br /> NN1 3BA, United Kingdom
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-poppins text-xs font-[700] uppercase text-[#fff] md:text-sm md:tracking-[1.5px]"
                      href={"tel:+447923886433"}
                    >
                      +44 7923 886433
                    </Link>
                  </span>
                  {/* <span>
                    <Link
                      className="font-poppins text-xs font-[500] uppercase text-[#fff] md:text-sm"
                      href={"mailto:konak.wilmslow@gmail.com"}
                    >
                      konak.wilmslow@gmail.com
                    </Link>
                  </span> */}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4 md:pt-6">
                <Link
                  href={"https://www.instagram.com/manna.food.corner"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                {/* <Link href={""} target="_blank">
                  <Icons.unknown className="text-[#fff]" />
                </Link> */}
                <Link href={"https://g.co/kgs/Qptk8qA"} target="_blank">
                  <Icons.google className="text-[#fff]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g186349-d5817644-Reviews-Manna_Food_Corner-Northampton_Northamptonshire_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#fff]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-poppins text-xs font-[700] uppercase tracking-[2.4px] text-[#fff] md:text-sm"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-poppins text-xs font-[700] uppercase tracking-[2.4px] text-[#fff] md:text-sm"
              >
                Menu
              </Link>
              <Link
                href={"/about-us"}
                className="font-poppins text-xs font-[700] uppercase tracking-[2.4px] text-[#fff] md:text-sm"
              >
                About
              </Link>

              {/* <Link
                href={""}
                className="font-poppins text-xs md:text-sm font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Products
              </Link> */}
              <Link
                href={"/table-booking"}
                className="font-poppins text-xs font-[700] uppercase tracking-[2.4px] text-[#fff] md:text-sm"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-poppins text-xs font-[700] uppercase tracking-[2.4px] text-[#fff] md:text-sm"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-16">
            <h6 className="font-poppins text-sm font-[700] uppercase tracking-[2.2px] text-[#fff] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Monday - SATURDAY
                </span>
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  12 PM - 10 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" />

              {/* <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  Sunday
                </span>
                <span className="font-poppins text-sm font-[700] uppercase tracking-[1.96px] text-[#fff]">
                  9 AM - 4:30 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#fff]" /> */}
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#fff]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="pb-6 font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#fff] md:text-sm">
                Powerd by fodo{" "}
              </span>
            </Link>
            <p className="pb-6 font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#fff] md:text-sm">
              © 2024 Manna ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
