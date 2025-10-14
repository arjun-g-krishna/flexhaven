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
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold font-instrument">
              How
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white bg-verylightgray/50 mx-1 sm:mx-2 px-2 sm:px-3 py-1 sm:py-2 rounded font-instrument w-auto min-w-[120px] sm:min-w-0">
              it works
            </div>
          </div>
        </div>
        <Process />
        <div className="relative">
          <Pricing />
          <div className="flex flex-row justify-start items-center absolute w-full -bottom-8 z-10 pl-20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold font-instrument">
              Why
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white bg-verylightgray/50 mx-1 sm:mx-2 px-2 sm:px-3 py-1 sm:py-2 rounded font-instrument w-auto min-w-[120px] sm:min-w-0">
              choose us
            </div>
          </div>
        </div>
        <ChooseUs />
        <Customisation />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

export default App;
