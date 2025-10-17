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
          <div
            style={{
              animationTimeline: "view()",
              animationRange: "entry 0 cover 40%",
            }}
            className="flex flex-row justify-center items-center absolute w-full -bottom-6 sm:-bottom-8 z-10 animate-appearleft px-4"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-instrument">
              How
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white bg-verylightgray/50 mx-1 sm:mx-2 px-2 sm:px-3 py-1 sm:py-2 rounded font-instrument w-auto min-w-[100px] sm:min-w-[120px] md:min-w-0 text-center">
              it works
            </div>
          </div>
        </div>
        <Process />
        <div className="relative">
          <Pricing />
          <div
            style={{
              animationTimeline: "view()",
              animationRange: "entry 0 cover 40%",
            }}
            className="flex flex-row justify-center sm:justify-start items-center absolute w-full -bottom-6 sm:-bottom-8 z-10 px-4 sm:pl-8 md:pl-12 lg:pl-20 animate-appearleft"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-instrument">
              Why
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white bg-verylightgray/50 mx-1 sm:mx-2 px-2 sm:px-3 py-1 sm:py-2 rounded font-instrument w-auto min-w-[100px] sm:min-w-[120px] md:min-w-0 text-center">
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
