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
        <About />
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
