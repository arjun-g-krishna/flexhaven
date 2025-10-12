export default function Customisation() {
  return (
    <section
      id="customisation"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6">Customisation</h2>
      <p className="text-gray-600 max-w-xl text-center mb-6">
        Choose from a range of woods, finishes, and designs to make your
        furniture uniquely yours.
      </p>
      <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
        Start Your Design
      </button>
    </section>
  );
}
