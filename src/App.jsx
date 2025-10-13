import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import ChooseUs from "./sections/ChooseUs";
import Customisation from "./sections/Customisation";
import Waitlist from "./sections/Waitlist";

function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <div className="relative">
          <About />
          <div className="flex flex-row justify-center items-center absolute w-full -bottom-8 z-10">
            <div className="text-5xl md:text-4xl font-semibold font-instrument">
              How
            </div>
            <div className="text-5xl md:text-4xl font-semibold text-white bg-verylightgray mx-2 px-2 py-2 rounded font-instrument w-xs">
              {" "}
              it works
            </div>
          </div>
        </div>
        <Process />
        <Pricing />
        <ChooseUs />
        <Customisation />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

export default App;
