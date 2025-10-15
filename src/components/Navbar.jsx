import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Pricing", id: "pricing" },
    { name: "Choose Us", id: "choose-us" },
    { name: "Customisation", id: "customisation" },
    { name: "Waitlist", id: "waitlist" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f5f5f5] z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        <h1 className="text-2xl font-bold">Flexhaven</h1>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-orangeish"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close Icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-orangeish hover:text-amber-600 transition"
                onClick={() => setIsOpen(false)} // Close menu on link click (desktop)
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#f5f5f5] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-orangeish hover:text-amber-600 transition text-lg"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
