import logo from "@/assets/logo.png";

const GridItem3 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-cream min-h-[280px]">
      <img 
        src={logo} 
        alt="Abrahams & Co Lead Lab" 
        className="h-20 md:h-24 w-auto mb-6 animate-fade-in"
      />
      <div className="text-center animate-fade-in-delay">
        <p className="font-body text-sm md:text-base tracking-[0.25em] text-muted-foreground font-medium">
          POWERED BY DATA
        </p>
        <p className="font-body text-sm md:text-base tracking-[0.25em] text-primary font-semibold mt-1">
          DRIVEN BY RESULTS
        </p>
      </div>
    </div>
  );
};

export default GridItem3;