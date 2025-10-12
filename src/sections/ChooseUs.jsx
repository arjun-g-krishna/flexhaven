export default function ChooseUs() {
  const reasons = [
    "Sustainable Materials",
    "Handcrafted Quality",
    "Fast Delivery",
    "Lifetime Warranty",
  ];

  return (
    <section
      id="choose-us"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition text-center"
          >
            <h3 className="text-xl font-semibold">{reason}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
