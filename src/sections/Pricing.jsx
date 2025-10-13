import tick from "../assets/tick.svg";

const PricingCard = ({ title, price, features, buttonText, buttonLink }) => (
  <div className="flex flex-col h-[22rem] md:h-[26rem]">
    <div className="bg-[#f8f8f8] px-3 py-2 mb-2">
      <h3 className="font-instrument text-2xl font-semibold mb-1 text-greenish">
        {title}
      </h3>
      <h3 className="font-instrument text-2xl font-semibold text-orangeish">
        {price}
      </h3>
    </div>
    <ul className="mb-6 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="text-lg flex items-start gap-3">
          <img src={tick} alt="tick" className="w-5 h-5 mt-1" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href={buttonLink}
      className="mt-auto font-instrument bg-greenish text-white px-6 py-3 rounded-md hover:bg-amber-600 transition text-lg font-semibold"
    >
      {buttonText}
    </a>
  </div>
);

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <h1 className="text-orangeish text-5xl text- font-extrabold font-instrument text-center mt-20 mb-20">
        Design Packages
      </h1>
      <section
        id="pricing"
        className=" bg-white flex flex-col items-center justify-center px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <PricingCard
            title="Style starter"
            price="₹0 / Free"
            features={[
              "Downloadable sample board ",
              "Mini shopping list(3 products)",
              "Starter color palette ",
            ]}
            buttonText="Choose Basic"
            buttonLink="https://forms.gle/KXqWAvW2U3tVUCVT8"
          />
          <PricingCard
            title="Mini makeover"
            price="₹999 / $25"
            features={[
              "Moodboards (colors + style)",
              "5 product recommendations",
              "Quick styling tips and tricks",
              "1 revision included",
            ]}
            buttonText="Start small"
            buttonLink="https://forms.gle/KzwouXFumMr6dzR19"
          />
          <PricingCard
            title="Room fusion"
            price="₹3500 / $90"
            features={[
              "Moodboard + Layout plan",
              "Curated shopping list with links",
              "Styling guide",
              "2 revisions included",
            ]}
            buttonText="Design my room"
            buttonLink="https://forms.gle/GD7fACN6CwvtsBmi8"
          />
          <PricingCard
            title="Whole Room fusion"
            price="₹20000 / $500"
            features={[
              "Moodboards + Layout for all rooms",
              "Color and material scheme + Shopping list",
              "1 aerial rendered view ",
              "2 revisions per room",
            ]}
            buttonText="Transform my home"
            buttonLink="https://forms.gle/WU2A853PXToFFMrT8"
          />
        </div>
      </section>
    </div>
  );
}
