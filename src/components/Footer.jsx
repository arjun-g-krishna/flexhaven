export default function Footer() {
  return (
    <footer className="bg-verylightgreen text-brownish py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-brownish mb-4 font-instrument">
              Flexhaven
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              Affordable, globally-inspired interior design delivered to your
              inbox.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-brownish mb-4 font-instrument">
              Services
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-darkgreenish transition-colors duration-200">
                Style Starter (Free)
              </li>
              <li className="hover:text-darkgreenish transition-colors duration-200">
                Mini Makeover
              </li>
              <li className="hover:text-darkgreenish transition-colors duration-200">
                Room Fusion
              </li>
              <li className="hover:text-darkgreenish transition-colors duration-200">
                Whole Home Fusion
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-brownish mb-4 font-instrument">
              Contact
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <p className="hover:text-darkgreenish transition-colors duration-200">
                <a href="mailto:flexhaven27@gmail.com" className="underline">
                  flexhaven27@gmail.com
                </a>
              </p>
              <p>100% remote design</p>
              <p>Services available worldwide</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brownish/20 pt-6">
          <p className="text-center text-xs md:text-sm text-brownish/80">
            &copy; {new Date().getFullYear()} Global E-Design. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
