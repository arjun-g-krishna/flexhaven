import tick from "../assets/tick.svg";

const PricingCard = ({ title, price, features, buttonText, buttonLink }) => (
  <div className="card-base pricing-card animate-appear animate-on-scroll">
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
      <h3 className="card-price">{price}</h3>
    </div>
    <ul className="card-feature-list space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="card-feature-item">
          <img src={tick} alt="tick" className="card-feature-icon" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href={buttonLink} className="btn-primary btn-primary-lg card-button">
      {buttonText}
    </a>
  </div>
);

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="section-base section-light-bg pb-20 animate-appeartransparency"
    >
      <h1 className="section-title">Design Packages</h1>
      <section className="center-content">
        <div className="content-grid">
          <PricingCard
            title="Style starter"
            price="₹0 / Free"
            features={[
              "Downloadable sample board ",
              "Mini shopping list (3 products)",
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
