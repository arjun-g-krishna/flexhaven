import earth from "../assets/earth.png";
import money from "../assets/money.png";
import wallClock from "../assets/wall-clock.png";
import laptop from "../assets/laptop.png";

const ChooseUsCard = ({ image, heading, text }) => {
  return (
    <div className="bg-transparent border-none rounded-xl shadow-none flex items-start gap-4 p-4">
      <div className="shrink-0 flex items-center justify-center w-32 h-32 bg-anothergreen rounded-full">
        <img
          className="w-16 h-16 object-contain"
          src={image}
          alt="Card Image"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-2xl font-bold mb-2 text-darkgreenish">{heading}</h3>
        <p className="text-darkgreenish text-lg">{text}</p>
      </div>
    </div>
  );
};

export default function ChooseUs() {
  return (
    <section
      id="choose-us"
      className="section-base section-yellow-bg min-h-screen px-10 py-10 flex flex-col items-center"
    >
      <h1 className="text-orangeish text-2xl mb-8 self-start ml-10 max-w-2xl">
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
            text="No hidden costs, pay only for what you need"
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
