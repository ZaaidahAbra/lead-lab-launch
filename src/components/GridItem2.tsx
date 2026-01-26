const GridItem2 = () => {
  return (
    <div className="flex flex-col justify-center bg-primary min-h-[280px] overflow-hidden">
      {/* Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mx-8 tracking-wider">
            COMING SOON
          </span>
        </div>
      </div>
      
      {/* Static Tagline */}
      <div className="px-8 pb-8">
        <h5 className="font-body text-sm md:text-base text-primary-foreground/90 font-light animate-fade-in-delay">
          Empowering businesses through smart digital solutions
        </h5>
      </div>
    </div>
  );
};

export default GridItem2;