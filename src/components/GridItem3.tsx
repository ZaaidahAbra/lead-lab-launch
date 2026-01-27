import logo from "@/assets/logo.png";

const GridItem3 = () => {
  return (
    <div className="flex flex-col items-top justify-center p-8 bg-background min-h-[380px]">
      <img 
        src={logo} 
        alt="Abrahams & Co Lead Lab" 
        className="h-50 md:h-30 w-auto mb-6 animate-fade-in"
      />
      <div className="text-center animate-fade-in-delay">
        <p className="font-display text-xl md:text-2xl tracking-[0.25em] text-muted-foreground font-bold">
          POWERED BY DATA
        </p>
        <p className="font-display text-xl md:text-2xl tracking-[0.25em] text-primary font-bold mt-1">
          DRIVEN BY RESULTS
        </p>
      </div>
    </div>
  );
};

export default GridItem3;