import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: "Shop", hasDropdown: true },
    { label: "On Sale", hasDropdown: false },
    { label: "New Arrivals", hasDropdown: false },
    { label: "Brands", hasDropdown: false },
  ];

  return (
    <>
      {/* Promo Banner */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="bg-primary text-primary-foreground text-center py-2 text-sm"
      >
        <p>
          Sign up and get 20% off your first order.{" "}
          <a href="#" className="underline font-medium hover:opacity-80 transition-opacity">
            Sign Up Now
          </a>
        </p>
      </motion.div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <motion.a
              href="/"
              className="text-2xl md:text-3xl font-black tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SHOP.CO
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </motion.a>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 bg-secondary border-0 rounded-full"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <motion.button
                className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={22} />
              </motion.button>

              <motion.button
                className="p-2 hover:bg-muted rounded-full transition-colors relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  3
                </span>
              </motion.button>

              <motion.button
                className="p-2 hover:bg-muted rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={22} />
              </motion.button>
            </div>
          </div>

          {/* Mobile Search */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 bg-secondary border-0 rounded-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href="#"
                    className="flex items-center justify-between py-2 text-foreground hover:text-muted-foreground transition-colors font-medium"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
