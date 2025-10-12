export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹15,000+",
      desc: "Perfect for small furniture pieces",
    },
    {
      name: "Premium",
      price: "₹35,000+",
      desc: "Ideal for custom medium furniture",
    },
    { name: "Luxury", price: "₹60,000+", desc: "Bespoke full-room setups" },
  ];

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-amber-600 text-xl font-bold mb-2">
              {plan.price}
            </p>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
              Get Quote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
