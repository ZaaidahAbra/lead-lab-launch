import logo from "@/assets/logo.png";

const GridItem1 = () => {
  return (
    <>
      {/* Logo for mobile */}
      <div className="md:hidden flex flex-col items-center justify-start p-2 bg-background animate-fade-up min-h-[170px]">
        <img
          src={logo}
          alt="Abrahams & Co Lead Lab"
          className="h-68 sm:h-72 w-auto object-contain animate-slide-up-delay"
        />

        {/* Small spacer with staggered animation */}
        <div className="h-4 md:hidden animate-slide-up-delay" style={{ animationDelay: "0.2s" }} />

        {/* H1 text for mobile */}
        <h1 className="font-display -mt-10 text-6xl pb-8 sm:text-6xl font-bold text-foreground leading-tight text-center animate-slide-up-delay"
            style={{ animationDelay: "0.8s" }}
        >
          Unlocking<br />
          Potential<br />
          Leads
        </h1>
      </div>

      {/* Text for desktop and larger screens */}
      <div className="hidden md:flex items-center justify-center p-8 bg-background min-h-[180px]">
        <h1 className="font-display text-5xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
          Unlocking<br />
          Potential<br />
          Leads
        </h1>
      </div>
    </>
  );
};

export default GridItem1;
