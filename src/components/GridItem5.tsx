import fabric from "../assets/fabric.mp4";
import { useInView } from "../hooks/useInView";

const GridItem5 = () => {
  const services = [
    { number: "01", name: "Real Estate Cold Calling" },
    { number: "02", name: "Graphic Design" },
    { number: "03", name: "Web Development" },
  ];

  const { ref, isVisible } = useInView({ threshold: 0.25 });

  return (
    <div className="relative min-h-[280px] overflow-hidden">
      {/* Video Background */}
      <video
        src={fabric}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-12 md:p-12">
        
        {/* Title stays static */}
        <p className="font-body text-2xl tracking-[0.3em] text-primary-foreground/80 uppercase">
          Discover our services
        </p>

        {/* Services fade in on scroll */}
        <div
          ref={ref}
          className="mt-20 space-y-14"
        >
          {services.map((service, index) => (
            <div
              key={service.number}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`service-item flex items-start gap-6 text-primary-foreground
                ${isVisible ? "animate-fade-up" : "before-in-view"}`}
            >
              <span className="font-display text-3xl md:text-4xl font-light opacity-60 flex-shrink-0">
                {service.number}
              </span>

              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-medium">
                  {service.name}
                </span>
                <hr className="mt-2 border-primary-foreground/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridItem5;
