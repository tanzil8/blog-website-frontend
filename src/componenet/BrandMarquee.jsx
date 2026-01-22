const brands = [
  "VERSACE",
  "ZARA",
  "GUCCI",
  "PRADA",
  "Calvin Klein",
];

const BrandMarquee = () => {
  return (
    <div className="bg-primary text-primary-foreground py-8 overflow-hidden">
      <div className="animate-marquee flex gap-20 whitespace-nowrap">
        {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl font-bold tracking-wider opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
