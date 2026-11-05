import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Crew from "./components/Crew";
import Process from "./components/Process";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Crew />
        <Process />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
