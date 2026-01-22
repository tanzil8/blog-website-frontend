import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const footerLinks = {
  company: ["About", "Features", "Works", "Career"],
  help: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  faq: ["Account", "Manage Deliveries", "Orders", "Payments"],
  resources: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
};

const Footer = () => {
  return (
    <footer className="bg-secondary pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-border">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <motion.h3
              className="text-2xl md:text-3xl font-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              SHOP.CO
            </motion.h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Facebook, Instagram, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold uppercase tracking-wider text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-muted-foreground text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            {["visa", "mastercard", "paypal", "applepay", "googlepay"].map((payment) => (
              <div
                key={payment}
                className="w-12 h-8 bg-background rounded flex items-center justify-center text-xs font-medium uppercase"
              >
                {payment.slice(0, 4)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
