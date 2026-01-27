import houseKey from "@/assets/house-key.png";

const GridItem6 = () => {
  return (
    <div className="relative min-h-[280px] sm:min-h-[320px] overflow-hidden">
      <img 
        src={houseKey}
        alt="Real estate keys and tools" 
        className="w-full h-full object-cover absolute inset-0"
      />
    </div>
  );
};

export default GridItem6;