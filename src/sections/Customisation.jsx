import tick from "../assets/tick.svg";

const CustomisationCard = ({
  title,
  price,
  feature,
  buttonText,
  buttonLink,
}) => (
  <div className="card-base customisation-card bg-transparent rounded-lg p-4 sm:p-6 border border-gray-100 min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
    <div className="card-header bg-gray-50 rounded-md p-3 sm:p-4 mb-4">
      <h3 className="card-title text-lg sm:text-xl md:text-2xl">{title}</h3>
      <h3 className="card-price text-lg sm:text-xl md:text-2xl">{price}</h3>
    </div>
    <ul className="card-feature-list space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
      <li className="card-feature-item text-sm sm:text-base">
        <img
          src={tick}
          alt="tick"
          className="card-feature-icon w-4 h-4 sm:w-5 sm:h-5"
        />
        <span className="leading-relaxed">{feature}</span>
      </li>
    </ul>
    <a
      href={buttonLink}
      className="btn-primary btn-primary-lg card-button text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 w-full text-center block mt-auto"
    >
      {buttonText}
    </a>
  </div>
);

export default function Customisation() {
  return (
    <div
      id="customisation"
      className="section-base section-light-bg pb-12 sm:pb-16 md:pb-20"
    >
      <h1 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6">
        Customise your Packages
      </h1>
      <section className="center-content px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
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
            buttonText="Add Revision"
            buttonLink="https://www.paypal.com/ncp/payment/QNU3F2CXACY8G"
          />
        </div>
      </section>
    </div>
  );
}
