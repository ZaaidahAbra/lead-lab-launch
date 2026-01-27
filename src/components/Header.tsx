import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-1/2 bg-background">
      {/* 2-column grid */}
      <div className="grid grid-cols-2 px-6 md:px-5">
        
        {/* Column 1 – Logo */}
        <div className="flex items-center h-44 md:h-28">
          <img
            src={logo}
            alt="Abrahams & Co Lead Lab"
            className="h-48 md:h-30 w-52 object-cover"
          />
        </div>

        {/* Column 2 – Merged (Empty / spacer or content) */}
        <div className="flex items-center justify-center h-22 md:h-12">
          {/* Optional content */}
        </div>

      </div>
    </header>
  );
};

export default Header;
