import { Mail, MapIcon, MapPin, Navigation, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

function Map() {
  return (
    <section className="flex w-full flex-col gap-6 bg-[#0B0B0B] px-4 pb-8 md:px-6 md:pb-14">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.4326294962075!2d-2.583939023751628!3d53.371308272856034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0205044e54d9%3A0x9f6ad01e5b69eef1!2s69%20London%20Rd%2C%20Stockton%20Heath%2C%20Warrington%20WA4%206SG%2C%20UK!5e0!3m2!1sen!2sin!4v1743246441578!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[500px] w-full grayscale invert"
      ></iframe>
      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center gap-1">
          <MapPin className="text-[#C93732]" />
          <Link
            className="font-inter text-base font-[400] text-[#fff]"
            href={""}
          >
            Hertfordshire, 415 Hatfield Rd, St <br /> Albans AL4 0XP, United
            Kingdom
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Phone className="text-[#C93732]" />
          <Link
            className="font-inter text-base font-[400] text-[#fff]"
            href={""}
          >
            01727743789
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Mail className="text-[#C93732]" />
          <Link
            className="font-inter text-base font-[400] text-[#fff]"
            href={""}
          >
            info@chillatchillies.co.uk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Map;
