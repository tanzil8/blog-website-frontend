import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center  ">
          {/* Content */}
          <div className="flex-1 py-12 lg:py-0 text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </motion.h1>

            <motion.p
              className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="mt-8 rounded-full px-12 py-6 text-base font-medium hover:scale-105 transition-transform"
              >
                Shop Now
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold">200+</p>
                <p className="text-muted-foreground text-sm">International Brands</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold">2,000+</p>
                <p className="text-muted-foreground text-sm">High-Quality Products</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold">30,000+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 relative w-full lg:w-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
                alt="Fashion models"
                className="w-full  object-cover object-top"
              />
              {/* Decorative Stars */}
              <motion.div
                className="absolute top-10 right-10 text-4xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-10 text-6xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
