import { useState } from "react";
import background from "../assets/background.jpg";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setResponseMsg("Submitting...");
    try {
      const formData = new FormData();
      formData.append("email", email);
      await fetch(
        "https://script.google.com/macros/s/AKfycbx1iyLpImGX_tCCbmHFXuh1S83XA-ZxYz_J-8eE0X5RDro-sBxdyjyvG91LJp_HRDj5/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setResponseMsg("You're on the waitlist!");
      setEmail("");
    } catch (err) {
      setResponseMsg(`Error: ${err}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="waitlist"
      className="section-base flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center animate-appear animate-on-scroll max-w-2xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-instrument mb-4 sm:mb-6 text-center leading-tight">
          Be the First to Know
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-[#343030] text-center">
          Join the Waitlist
        </h2>
        <form
          id="waitlist-form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg"
        >
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-0 bg-white rounded-lg px-4 py-3 sm:py-2 flex-1 text-base sm:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orangeish"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#EEB2A9] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-[#AFC9BF] transition disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base font-medium whitespace-nowrap"
          >
            {submitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
        <p
          id="response"
          className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 text-center"
        >
          {responseMsg}
        </p>
      </div>
    </section>
  );
}
