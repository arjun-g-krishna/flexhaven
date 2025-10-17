import tick from "../assets/tick.svg";

const PricingCard = ({ title, price, features, buttonText, buttonLink }) => (
  <div className="card-base pricing-card bg-transparent rounded-lg p-4 sm:p-6 border border-gray-100 min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
    <div className="card-header bg-gray-50 rounded-md p-3 sm:p-4 mb-4">
      <h3 className="card-title text-lg sm:text-xl md:text-2xl">{title}</h3>
      <h3 className="card-price text-lg sm:text-xl md:text-2xl">{price}</h3>
    </div>
    <ul className="card-feature-list space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="card-feature-item text-sm sm:text-base">
          <img
            src={tick}
            alt="tick"
            className="card-feature-icon w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href={buttonLink}
      className="btn-primary btn-primary-lg card-button text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 w-full text-center block mt-auto"
    >
      {buttonText}
    </a>
  </div>
);

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="section-base section-light-bg pb-12 sm:pb-16 md:pb-20 "
    >
      <h1 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6">
        Design Packages
      </h1>
      <section className="center-content px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
          <PricingCard
            title="Style starter"
            price="₹0 / Free"
            features={[
              "Downloadable sample board",
              "Mini shopping list (3 products)",
              "Starter color palette",
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
              "1 aerial rendered view",
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
