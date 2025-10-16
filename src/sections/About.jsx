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
      className="min-h-[100vh] section-light-bg flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center px-4 md:px-6 py-10 md:py-20"
    >
      <img
        src={homepage}
        className="w-2/3 max-w-xs md:max-w-sm rounded-md shadow-lg"
        alt="Modern kitchen interior with wooden dining table"
      />
      <div className="flex flex-col gap-4 md:gap-6 max-w-lg text-center md:text-left">
        <div className="text-4xl md:text-5xl text-depression">
          Affordable Global Design,
        </div>
        <div className="text-4xl md:text-5xl sm:text-2xl text-greenish mb-4 md:mb-10">
          Delivered to your Inbox
        </div>
        <div className="text-2xl md:text-4xl text-depression">
          E-design packages for homes across the world
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="btn-primary btn-hero" onClick={handleScroll}>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
