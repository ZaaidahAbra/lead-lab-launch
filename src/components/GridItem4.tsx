import officeDesk from "@/assets/office-desk.png";

const GridItem4 = () => {
  return (
    <div className="relative min-h-[280px] overflow-hidden">
      <img 
        src={officeDesk}
        alt="Professional office workspace" 
        className="w-full h-full object-cover absolute inset-0"
      />
    </div>
  );
};

export default GridItem4;