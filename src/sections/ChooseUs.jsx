import earth from "../assets/earth.png";
import money from "../assets/money.png";
import wallClock from "../assets/wall-clock.png";
import laptop from "../assets/laptop.png";

const ChooseUsCard = ({ image, heading, text }) => {
  return (
    <div className="bg-transparent border-none rounded-xl shadow-none flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 text-center sm:text-left">
      <div className="shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-anothergreen rounded-full">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
          src={image}
          alt="Card Image"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-darkgreenish">
          {heading}
        </h3>
        <p className="text-darkgreenish text-sm sm:text-base md:text-lg leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default function ChooseUs() {
  return (
    <section
      id="choose-us"
      className="section-base section-yellow-bg min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col items-center"
    >
      <h1 className="text-orangeish text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 self-start sm:ml-4 md:ml-6 lg:ml-10 max-w-2xl leading-relaxed">
        Think of it as interior design — simplified, digital, and tailored to
        your budget.
      </h1>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        <div className="choose-us-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <ChooseUsCard
            image={money}
            heading="Affordable"
            text="No hidden costs, pay only for what you need"
          />
          <ChooseUsCard
            image={earth}
            heading="Global yet Local"
            text="Access to worldwide design trends at your convenience"
          />
          <ChooseUsCard
            image={laptop}
            heading="Remote"
            text="Work with designers from anywhere in the world"
          />
          <ChooseUsCard
            image={wallClock}
            heading="At your Pace"
            text="Shop and style whenever it suits you"
          />
        </div>
      </div>
    </section>
  );
}
