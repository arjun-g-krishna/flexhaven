export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6">Join Our Waitlist</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="text"
          placeholder="Furniture Interest"
          className="border rounded-lg px-4 py-2"
        />
        <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
          Join Waitlist
        </button>
      </form>
    </section>
  );
}
