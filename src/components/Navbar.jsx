import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Pricing", id: "pricing" },
    { name: "Choose Us", id: "choose-us" },
    { name: "Customisation", id: "customisation" },
    { name: "Waitlist", id: "waitlist" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f5f5f5] z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Flexhaven</h1>
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-orangeish hover:text-amber-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
