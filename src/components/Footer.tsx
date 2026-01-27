import { Phone, Mail, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Footer = () => {
  const { ref, isVisible } = useInView();

  return (
    <footer
      ref={ref}
      className="bg-background text-foreground py-16 px-6 md:px-10 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Brand */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-up" : "before-in-view"
            }`}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 hover:text-primary transition-colors duration-300">
              Abrahams & Co Lead Lab
            </h3>
            <p className="font-body text-sm text-foreground/70 font-light tracking-wide">
              Powered by Data. Driven by Results.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            {[
              {
                icon: <Phone size={20} />,
                label: "WhatsApp",
                href: "https://wa.me/27848943435",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                href: "mailto:aco@outlook.com",
              },
              {
                icon: <MapPin size={20} />,
                label: "Cape Town",
              },
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.2}s` }}
                className={`flex items-center gap-3 text-foreground/70 hover:text-primary transition-all duration-300 group
                  ${isVisible ? "animate-fade-up" : "before-in-view"}`}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-body text-sm font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-10 pt-8 border-t border-border/30 text-center transition-all duration-700 delay-500
            ${isVisible ? "animate-fade-up" : "before-in-view"}`}
        >
          <p className="font-body text-xs text-foreground/50 tracking-wide">
            © {new Date().getFullYear()} Abrahams & Co Lead Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
