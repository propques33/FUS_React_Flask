import React, { useState, useEffect } from "react";
import { Menu, X, Home, Phone, Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import l1 from "../assets/fl.webp";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScrollY ? "down" : "up";

      setIsScrolled(currentScroll > 10);

      if (direction === "down" && currentScroll > 100) {
        setIsOpen(false);
        document.querySelector("nav")?.classList.add("translate-y-[-100%]");
      } else {
        document.querySelector("nav")?.classList.remove("translate-y-[-100%]");
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/", icon: <Home size={18} /> },
    { label: "Explore Spaces", to: "/results", icon: <Building2 size={18} /> },
    { label: "Login", to: "/login", icon: <Building2 size={18} /> },
    { label: "Checkout", to: "/checkout", icon: <Building2 size={18} /> },
    {
      label: "Managed Office",
      to: "/managed-office",
      icon: <Building2 size={18} />,
    },
    {
      label: "Inner Page",
      to: "/properties/67efd7b5de37405541d5dc5c",
      icon: <Building2 size={18} />,
    },
    { label: "SBV  ", to: "/sbv", icon: <Building2 size={18} /> },
    { label: "Dashboard", to: "/dashboard", icon: <Building2 size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform px-4 md:px-0 md:py-1 py-0 ${
        isScrolled
          ? "bg-white shadow"
          : "bg-gradient-to-b from-white to-[#ffffff83]"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center  ">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src={l1} alt="Propques" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6 items-center ">
            {navLinks.map(({ label, to }) => {
              const isActive = location.pathname === to;
              const linkClass = isActive
                ? "text-blue-500 border-blue-500 "
                : isHome && !isScrolled
                ? "text-gray-700 border-transparent  hover:text-blue-100 hover:border-blue-100"
                : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-200";

              return (
                <div>
                  <Link
                    key={label}
                    to={to}
                    className={`text-sm font-medium inline-flex items-center px-2 pt-1 border-b-2 transition-all duration-150 ${linkClass}`}
                  >
                    {label}
                  </Link>

                  <div></div>
                </div>
              );
            })}
          </div>

          <InteractiveHoverButton
            className="md:block hidden"
            onClick={() => setShowForm(true)}
          >
            Get free consultation
          </InteractiveHoverButton>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-150 ${
                isHome && !isScrolled
                  ? "text-gray-700 hover:text-gray-800"
                  : "text-gray-700 hover:text-blue-500"
              } hover:bg-gray-100`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <Dialog open={showForm} onClose={() => setShowForm(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
  <Dialog.Panel className="bg-white w-full max-w-xl mx-auto p-8 rounded-2xl shadow-2xl relative animate-fadeIn">
    {/* Close Button */}
    <button
      onClick={() => setShowForm(false)}
      className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
    >
      <X className="w-5 h-5" />
    </button>

    <h3 className="text-2xl text-center font-semibold text-gray-800 mb-1">Request <span className="text-blue-500">Free Consultation</span></h3>
    <p className="text-sm text-center text-gray-500 mb-6">Let us help you simplify search for your workspace setup.</p>

    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          const webhookUrl = 'https://hook.integromat.com/your-make-webhook-id';
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          alert('Submitted successfully!');
          setShowForm(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
          alert('Submission failed.');
        } finally {
          setIsSubmitting(false);
        }
      }}
      className="space-y-4"
    >
      {/* Form Fields */}
      {['name', 'email', 'phone'].map((field) => (
        <div className="relative" key={field}>
          <input
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            required
            placeholder=" "
            value={formData[field]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-transparent"
          />
          <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600">
            {field === 'phone' ? 'Contact Number' : field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
        </div>
      ))}

      {/* Textarea */}
      <div className="relative">
        <textarea
          name="message"
          rows={4}
          placeholder=" "
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="peer w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-transparent resize-none"
        />
        <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600">
          Description
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  </Dialog.Panel>
</Dialog>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-3 space-y-2 w-full shadow-lg rounded-b-lg">
          {navLinks.map(({ label, to, icon }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className={`flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition duration-150 ${
                location.pathname === to
                  ? "bg-blue-100 text-blue-500"
                  : "text-gray-800 hover:bg-blue-50 hover:text-blue-500"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
