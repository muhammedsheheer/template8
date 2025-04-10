import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#121212] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#121212]">
        <h2 className="font-oswald text-center text-8xl text-[#fff] md:left-[15%] md:text-8xl">
          The Manna
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#121212] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#fff] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#fff] md:text-start">
              What began as a dream—to bring the heart and soul of Middle
              Eastern and Mediterranean cuisine to the table—has blossomed into
              Manna, a culinary journey where heritage meets creativity. Born
              from a deep love for authentic flavors, Manna was created to offer
              more than just food—it’s about crafting memorable experiences.
              <br />
              From our modest origins to becoming a cherished destination for
              food enthusiasts, our passion for quality, flavor, and heartfelt
              hospitality remains unwavering. Every ingredient is chosen with
              care, every spice echoes tradition, and every dish is a
              celebration of the rich culinary culture we honor.
              <br />
              At Manna, we don’t just serve dishes—we create lasting
              impressions. As we grow, our purpose stays true: to blend timeless
              traditions with innovative spirit, offering a dining experience
              that captures the essence of Middle Eastern cuisine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
