const GridItem5 = () => {
  const services = [
    { number: "01", name: "Cold Calling" },
    { number: "02", name: "Graphic Design" },
    { number: "03", name: "Web Development" },
  ];

  return (
    <div className="relative min-h-[280px] overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Overlay */}
      <div className="video-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-10">
        <p className="font-body text-xs tracking-[0.2em] text-primary-foreground/80 mb-4 uppercase">
          ★ Discover our services
        </p>
        
        <div className="space-y-3">
          {services.map((service) => (
            <div 
              key={service.number}
              className="service-item flex items-center gap-4 text-primary-foreground"
            >
              <span className="font-display text-2xl md:text-3xl font-light opacity-60">
                {service.number}
              </span>
              <span className="font-display text-xl md:text-2xl font-medium">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridItem5;