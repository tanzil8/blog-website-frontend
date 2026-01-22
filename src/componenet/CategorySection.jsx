import { motion } from "framer-motion";

const categories = [
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    name: "Formal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    name: "Party",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    name: "Gym",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-secondary rounded-3xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`${category.span} relative rounded-2xl overflow-hidden cursor-pointer group `}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0  from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
