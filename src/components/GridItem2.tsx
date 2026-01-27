import icon from "../assets/icon.png";

const GridItem2 = () => {
  return (
    <div className="relative bg-primary min-h-[490px] md:min-h-[490px] overflow-hidden flex flex-col justify-center md:-mt-24 lg:-mt-12 md:pt-12 lg:pt-8">

      {/* Marquee / Carousel */}
      <div className="relative w-full overflow-hidden py-10 px-6 md:px-12 -mt-10 md:-mt-14">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="py-10 font-display text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mx-8 tracking-wider"
            >
              COMING SOON
            </span>
          ))}
        </div>
      </div>

      {/* Tagline & bouncing star */}
      <div className="flex flex-col items-center justify-center px-8 py-10 text-center relative z-10">
        <h5 className="font-body text-base sm:text-lg md:text-base text-primary-foreground/90 font-light animate-fade-in-delay">
          Empowering businesses with lead generation solutions
        </h5>

        {/* Hovering star */}
        <div className="mt-6 w-6 h-6 animate-bounce-slow">
          <img src={icon} alt="star icon" />
        </div>
      </div>

      {/* Gradient edges */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>

    </div>
  );
};

export default GridItem2;
