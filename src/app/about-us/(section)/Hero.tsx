import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#121212] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#fff] lg:text-6xl">
                Welcome to Manna
                <br /> A Symphony of Flavors
              </h1>
              <p className="font-manrope font-normal text-[#fff]">
                At Manna, every dish is a tribute to timeless traditions and
                vibrant tastes. Crafted with the finest ingredients and inspired
                by authentic Middle Eastern and Mediterranean recipes, we offer
                a dining experience that’s rich in culture and flavor. Whether
                you`re enjoying perfectly grilled kebabs, savoring the warmth of
                aromatic spices, or indulging in a sweet delicacy, every bite at
                Manna reflects our passion, authenticity, and culinary artistry.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image1.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
