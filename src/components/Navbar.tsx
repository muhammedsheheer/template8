"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:pt-10`,
        pathname === "/" ? "bg-transparent" : "pt-4 md:pt-5",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-14">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-24"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-20">
            <Link
              href={"/"}
              className={
                "text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                "text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline"
              }
            >
              Menu
            </Link>

            <Link
              href={"/about-us"}
              className={
                "text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline"
              }
            >
              About
            </Link>

            <Link
              href={"/contact"}
              className={
                "text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline"
              }
            >
              Contact us
            </Link>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#fff] bg-[#fff] px-6 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#000] hover:bg-[#e2dcdc] hover:text-[#111]"
                }
              >
                reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#C0A58A]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
