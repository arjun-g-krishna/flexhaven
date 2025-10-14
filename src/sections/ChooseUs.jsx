import earth from "../assets/earth.png";
import money from "../assets/money.png";
import wallClock from "../assets/wall-clock.png";
import laptop from "../assets/laptop.png";
import "./ChooseUs.css";

const ChooseUsCard = ({ image, heading, text }) => {
  return (
    <div className="flex gap-4 bg-transparent rounded-lg p-10 w-[30rem] h-[20rem] items-center">
      <div className="w-32 h-32 bg-anothergreen rounded-full flex items-center justify-center flex-shrink-0">
        <img src={image} alt="" className="w-16 h-16 object-contain" />
      </div>
      <div>
        <h3 className="font-instrument text-3xl font-semibold text-greenish mb-1">
          {heading}
        </h3>
        <p className="text-2xl text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default function ChooseUs() {
  return (
    <section
      id="choose-us"
      className="min-h-screen bg-anotheryellow px-10 py-10 "
    >
      <h1 className="text-orangeish text-2xl mb-1 pl-10 mt-5">
        Think of it as interior design — simplified, digital, and tailored to
        your budget.
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="parent">
          <ChooseUsCard
            className="div1"
            image={money}
            heading="Affordable"
            text="No hidden costs, pay only for what you need"
          />
          <ChooseUsCard
            className="div2"
            image={earth}
            heading="Global yet Local"
            text="Access to worldwide design trends at your convenience"
          />
          <ChooseUsCard
            className="div3"
            image={laptop}
            heading="Remote"
            text="No hidden costs, pay only for what you need"
          />
          <ChooseUsCard
            className="div4"
            image={wallClock}
            heading="At your Pace"
            text="Shop and style whenever it suits you"
          />
        </div>
      </div>
    </section>
  );
}
