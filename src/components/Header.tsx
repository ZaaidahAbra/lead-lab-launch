import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 bg-background">
      <div className="flex items-center justify-between">
        <img 
          src={logo} 
          alt="Abrahams & Co Lead Lab" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;