import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Abrahams & Co Lead Lab
            </h3>
            <p className="font-body text-sm text-primary-foreground/70">
              Powered by Data. Driven by Results.
            </p>
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            <a 
              href="https://wa.me/27000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="font-body text-sm">WhatsApp</span>
            </a>
            
            <a 
              href="mailto:hello@abrahamsco.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Mail size={18} />
              <span className="font-body text-sm">Email</span>
            </a>
            
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin size={18} />
              <span className="font-body text-sm">Cape Town</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="font-body text-xs text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Abrahams & Co Lead Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;