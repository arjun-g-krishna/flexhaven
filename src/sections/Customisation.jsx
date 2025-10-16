import tick from "../assets/tick.svg";

const CustomisationCard = ({
  title,
  price,
  feature,
  buttonText,
  buttonLink,
}) => (
  <div className="card-base customisation-card animate-appear animate-on-scroll">
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
      <h3 className="card-price">{price}</h3>
    </div>
    <ul className="card-feature-list">
      <li className="card-feature-item">
        <img src={tick} alt="tick" className="card-feature-icon" />
        <span>{feature}</span>
      </li>
    </ul>
    <a href={buttonLink} className="btn-primary btn-primary-lg card-button">
      {buttonText}
    </a>
  </div>
);

export default function Customisation() {
  return (
    <div id="customisation" className="section-base section-light-bg pb-20">
      <h1 className="section-title">Customise your Packages</h1>
      <section className="center-content">
        <div className="content-grid">
          <CustomisationCard
            title="Render per view"
            price="₹2000 / $40"
            feature="Rendered view of room of choice"
            buttonText="Add Render"
            buttonLink="https://www.paypal.com/ncp/payment/VW8HFD37L233U"
          />
          <CustomisationCard
            title="Extra Layout"
            price="₹1000 / $20"
            feature="Add a room of your choice"
            buttonText="Add layout"
            buttonLink="https://www.paypal.com/ncp/payment/CTD9LZ9QC4N3J"
          />
          <CustomisationCard
            title="Product Sourcing"
            price="₹1500 / $30"
            feature="Custom product sourcing according to layout"
            buttonText="Add sourcing"
            buttonLink="https://www.paypal.com/ncp/payment/44ZYUV92BTSX2"
          />
          <CustomisationCard
            title="Extra Revision"
            price="₹1500 / $30"
            feature="Extra revised design or layout changes"
            buttonText="Transform my home"
            buttonLink="https://www.paypal.com/ncp/payment/QNU3F2CXACY8G"
          />
        </div>
      </section>
    </div>
  );
}
