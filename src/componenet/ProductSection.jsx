import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";



const ProductSection = ({ title, products }) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-12 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
