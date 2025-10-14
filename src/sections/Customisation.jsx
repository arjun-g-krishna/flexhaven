import tick from "../assets/tick.svg";

const CustomisationCard = ({
  title,
  price,
  feature,
  buttonText,
  buttonLink,
}) => (
  <div className="flex flex-col h-[14rem] md:h-[16rem]">
    <div className="bg-[#f8f8f8] px-3 py-2 mb-2">
      <h3 className="font-instrument text-2xl font-semibold mb-1 text-greenish">
        {title}
      </h3>
      <h3 className="font-instrument text-2xl font-semibold text-orangeish">
        {price}
      </h3>
    </div>
    <ul className="mb-4">
      <li className="text-lg flex items-start gap-3">
        <img src={tick} alt="tick" className="w-5 h-5 mt-1" />
        <span>{feature}</span>
      </li>
    </ul>
    <a
      href={buttonLink}
      className="mt-auto font-instrument bg-greenish text-white px-6 py-3 rounded-md hover:bg-amber-600 transition text-lg font-semibold"
    >
      {buttonText}
    </a>
  </div>
);

export default function Customisation() {
  return (
    <div id="customisation" className="min-h-screen bg-[#f5f5f5] pb-20 ">
      <h1 className="text-orangeish text-5xl font-extrabold font-instrument text-center pt-20 mt-0 mb-20">
        Customise your Packages
      </h1>
      <section className="flex flex-col items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
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
