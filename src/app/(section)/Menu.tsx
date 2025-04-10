// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const menuData = {
//   food: [
//     {
//       name: "NOVA MEZE PLATTER (V)",
//       description:
//         "Homemade Hummus, Baba Ghanoush, Cacik, Couscous With Caponata & Bread",
//       price: 16,
//     },
//     {
//       name: "CRISPY FOCACCIA (V)",
//       description: "Focaccia bread, Ricotta & Truffle Honey",
//       price: 7,
//     },
//     {
//       name: "SPICY SALMON TARTARE",
//       description:
//         "Raw Salmon, Avocado, Red Sweet Chilli, Mint, Tobico, Lemon & Virgin Olive Oil",
//       price: 14,
//     },
//     {
//       name: "LOBSTER (GF)",
//       description: "Whole Grilled Lobster, Chives Oil & Saffron Mayo",
//       price: 90,
//     },
//     {
//       name: "FIVE VARIATION SASHIMI",
//       description:
//         "Choose one or mix & match: Salmon, tuna, hamachi, unagi, prawns",
//       price: 45,
//     },
//     {
//       name: "Tomahawk(650g - 750g)",
//       description: "Thick bone-in Ribeye, Mixed Aromatic Herbs & Garlic Puree",
//       price: 98,
//     },
//   ],
//   drinks: [
//     {
//       name: "RENOVATE",
//       description:
//         "Bacardi 4 Years, Bombay Sapphire Gin, Bacardi Blanca, Mango and Lime",
//       price: 15,
//     },
//     {
//       name: "NOVAS",
//       description:
//         "Bacardi 8 Years, Watermelon and Grenadine Syrup with Lime Juice and Guava Juice",
//       price: 15,
//     },
//     {
//       name: "TUTTI FRUITI",
//       description:
//         "Mango based springtime delicacy, Grenadine with Banana and Pineapple and Lemon Juice",
//       price: 9,
//     },
//     {
//       name: "BUBBLEPOLITAN",
//       description:
//         "Raspberry Vodka, Bubblegum Syrup, Cranberry Juice, Raspberry Puree",
//       price: 15,
//     },
//     {
//       name: "NOVIOLETTE",
//       description:
//         "Floral Violet Syrup spiced wiht Ginger , paved with Lime and Lychee after taste.",
//       price: 9,
//     },
//     {
//       name: "I AM BLUE",
//       description:
//         "Blue Orange attraction with Lychee and Lemon Juice topped with Lemonade",
//       price: 9,
//     },
//   ],
// };

// const Menu: React.FC = () => {
//   return (
//     <section className="relative h-full w-full bg-[#121212] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
//       <div className="absolute right-0 top-[18%] hidden md:block">
//         <Image
//           src={"/images/home/follow/bg.png"}
//           width={281}
//           height={74}
//           alt="logo"
//           className="h-[750px] w-full"
//         />
//       </div>
//       <div className="flex h-full w-full flex-col items-center gap-4">
//         <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <h6 className="text-center font-playfair text-4xl font-[400] uppercase text-[#fff] md:text-5xl">
//               OUR MENU
//             </h6>
//           </div>
//         </div>

//         <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
//           {/* Food Items */}
//           <div className="flex flex-col gap-6 md:gap-14">
//             {menuData.food.map((item, index) => (
//               <div
//                 key={`food-item-${index}`}
//                 className="flex w-full flex-row items-center justify-center gap-0"
//               >
//                 <div className="flex w-auto flex-col md:w-[488px]">
//                   <p className="font-gotu text-base font-[400] uppercase text-[#C93732] md:text-lg md:tracking-[3px]">
//                     {item.name}
//                   </p>
//                   <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-1 md:mb-12">
//                   <div className="*: flex flex-col gap-0">
//                     <div className="h-1 w-[150px] border-b-[1px] border-b-[#C93732]" />
//                   </div>
//                   <p className="flex font-poppins text-lg font-[500] uppercase tracking-[0.57px] text-[#C93732]">
//                     £{item.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Drink Items */}
//           <div className="flex flex-col gap-6 md:gap-14">
//             {menuData.food.map((item, index) => (
//               <div
//                 key={`food-item-${index}`}
//                 className="flex w-full flex-row items-center justify-center gap-0"
//               >
//                 <div className="flex w-auto flex-col md:w-[488px]">
//                   <p className="font-gotu text-base font-[400] uppercase text-[#C93732] md:text-lg md:tracking-[3px]">
//                     {item.name}
//                   </p>
//                   <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-1 md:mb-12">
//                   <div className="*: flex flex-col gap-0">
//                     <div className="h-1 w-[150px] border-b-[1px] border-b-[#C93732]" />
//                   </div>
//                   <p className="flex font-poppins text-lg font-[500] uppercase tracking-[0.57px] text-[#C93732]">
//                     £{item.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="pt-5">
//           <Link href={"/menu"}>
//             <Button
//               className={
//                 "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-poppins text-xs font-[500] capitalize tracking-[0.96px] text-[#C93732] hover:bg-[#222] hover:text-[#fff]"
//               }
//             >
//               View Menu
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = {
  food: [
    {
      name: "ADANA KEBAB",
      price: 13.95,
      description:
        "Charcoal grilled, skewered minced lamb with onions, peppers, parsley and herbs, served with rice and salad",
    },
    {
      name: "CHICKEN KOFTE",
      price: 13.95,
      description:
        "Charcoal grilled, skewered minced chicken breast with onions, garlic, peppers, parsley, herbs and cheese, served with rice and salad",
    },
    {
      name: "LAMB SHISH",
      price: 15.49,
      description:
        "Marinated cubes of finest lamb charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN SHISH",
      price: 14.49,
      description:
        "Marinated cubes of chicken charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN WINGS",
      price: 13.95,
      description:
        "Marinated chicken wings charcoal grilled, served with rice and salad",
    },
    {
      name: "CHICKEN BEYTI",
      price: 12.95,
      description:
        "Charcoal grilled skewered minced chicken mixed with peppers, garlic and herbs, wrapped in tortilla, topped with yoghurt and halep sauce",
    },
    {
      name: "LAMB BEYTI",
      price: 12.5,
      description:
        "Charcoal grilled skewered minced lamb mixed with peppers, garlic and herbs, wrapped in tortilla, topped with yoghurt and halep sauce",
    },
    {
      name: "LAMB LIVER SHISH (CIGER)",
      price: 12.95,
      description:
        "Charcoal grilled cubes of lamb liver, seasoned with herbs, served with rice and salad",
    },
    {
      name: "LAMB CHOPS",
      price: 18.95,
      description:
        "Charcoal grilled lamb chops, slightly flavoured with herbs, served with rice and salad",
    },
    {
      name: "FILLET OF LAMB",
      price: 16.49,
      description:
        "Charcoal grilled fillet of lamb with rosemary, served with rice and salad",
    },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#121212] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      {/* Background Image */}
      <div className="absolute right-0 top-[18%] hidden md:block">
        <Image
          src={"/images/home/follow/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[750px] w-full"
        />
      </div>

      {/* Menu Content */}
      <div className="flex h-full w-full flex-col items-center gap-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <h6 className="text-center font-playfair text-4xl font-[400] uppercase text-[#fff] md:text-5xl">
            OUR MENU
          </h6>
        </div>

        {/* Menu Items Grid */}
        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-12 2xl:gap-10">
          {menuData.food.map((item, index) => (
            <div
              key={`food-item-${index}`}
              className="flex w-full flex-row items-center justify-between"
            >
              {/* Food Name & Description */}
              <div className="flex w-auto flex-col md:w-[488px]">
                <p className="font-gotu text-base font-[400] uppercase text-[#C93732] md:text-lg md:tracking-[3px]">
                  {item.name}
                </p>
                <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Divider Line & Price */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-0">
                  <div className="h-1 w-[150px] border-b-[1px] border-b-[#C93732]" />
                </div>
                <p className="flex font-poppins text-lg font-[500] uppercase tracking-[0.57px] text-[#C93732]">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="pt-5">
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
    </section>
  );
};

export default Menu;
