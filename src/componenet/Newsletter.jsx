import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center lg:text-left max-w-lg">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>

            <div className="w-full max-w-md space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 py-6 rounded-full bg-primary-foreground text-foreground border-0"
                />
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="w-full rounded-full py-6 font-medium hover:scale-105 transition-transform"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
