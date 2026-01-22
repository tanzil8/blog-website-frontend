import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";



const TestimonialCard = ({ name, rating, comment }) => {
  return (
    <motion.div
      className="bg-background border border-border rounded-2xl p-6 md:p-8 p"
      whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-[hsl(var(--rating))] text-[hsl(var(--rating))]" : "text-muted"}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <h4 className="font-bold text-lg">{name}</h4>
        <div className="bg-primary rounded-full p-0.5">
          <Check size={12} className="text-primary-foreground" />
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        "{comment}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
