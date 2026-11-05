import Hero from "./components/Hero";
import Services from "./components/Services";
import Crew from "./components/Crew";
import Process from "./components/Process";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <div
          aria-hidden="true"
          className="h-6 border-t border-galv/80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(92,87,78,0.4) 0 1px, transparent 1px 28px)",
          }}
        />
        <Services />
        <Crew />
        <Process />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
