import homepage from "../assets/homepage.jpg";

export default function About() {
  const handleScroll = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-[100vh] section-light-bg flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
    >
      <img
        src={homepage}
        className="w-4/5 sm:w-2/3 max-w-xs sm:max-w-sm md:max-w-md rounded-md shadow-lg"
        alt="Modern kitchen interior with wooden dining table"
      />
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-lg text-center md:text-left">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-depression leading-tight">
          Affordable Global Design,
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-greenish mb-4 sm:mb-6 md:mb-10 leading-tight">
          Delivered to your Inbox
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-depression leading-relaxed">
          E-design packages for homes across the world
        </div>
        <div className="flex justify-center md:justify-start mt-4 sm:mt-6">
          <button
            className="btn-primary btn-hero text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5"
            onClick={handleScroll}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
