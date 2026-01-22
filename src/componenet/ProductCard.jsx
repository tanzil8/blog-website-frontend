import { motion } from "framer-motion";
import { Star } from "lucide-react";


const ProductCard = ({ image, name, rating, price, originalPrice, discount }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-secondary rounded-2xl overflow-hidden aspect-square mb-4">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        {discount && (
          <span className="absolute top-3 right-3 bg-[hsl(var(--sale))] text-[hsl(var(--sale-foreground))] text-xs font-medium px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>
      
      <h3 className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors line-clamp-1">
        {name}
      </h3>
      
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(rating) ? "fill-[hsl(var(--rating))] text-[hsl(var(--rating))]" : "text-muted"}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {rating}/<span className="text-xs">5</span>
        </span>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <span className="font-bold text-xl">${price}</span>
        {originalPrice && (
          <>
            <span className="text-muted-foreground line-through">${originalPrice}</span>
            <span className="text-[hsl(var(--sale))] text-sm font-medium bg-[hsl(var(--sale)/0.1)] px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
