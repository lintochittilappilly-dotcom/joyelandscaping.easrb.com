import { business } from "../site";
import Header from "./Header";
import FencePlan from "./FencePlan";

export default function Hero() {
  return (
    <section id="top" className="on-dark bg-bark text-concrete">
      <Header />

      <div className="mx-auto grid max-w-[1180px] gap-14 px-6 pb-16 pt-10 md:px-10 md:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-8 lg:pb-20">
        <div>
          <h1 className="font-display text-[clamp(2.85rem,7.6vw,5.15rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
            Built straight.
            <br />
            Planted deep.
          </h1>

          <p className="mt-8 max-w-[43ch] text-[1.08rem] leading-[1.62] text-concrete/75">
            Joye Landscaping &amp; Fencing is a three-person crew building
            fences, retaining walls, paving and gardens around{" "}
            {business.serviceArea}. Free quotes, straight answers, and a yard
            left clean at the end of every day.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="inline-flex justify-center bg-concrete px-7 py-4 font-display text-[15px] font-semibold tracking-[-0.01em] text-bark transition-colors hover:bg-white"
            >
              Get a free quote
            </a>
            <a
              href={business.phones[0].href}
              className="inline-flex justify-center border border-concrete/25 px-7 py-4 font-display text-[15px] font-semibold text-concrete transition-colors hover:border-concrete/60"
            >
              Call {business.phones[0].name} on {business.phones[0].display}
            </a>
          </div>

          <p className="mt-8 max-w-[42ch] font-display text-[13px] leading-relaxed text-galv">
            Justin, Jomon and Jibin have been running the crew for{" "}
            {business.yearsRunning} years.
          </p>
        </div>

        <div className="lg:pl-4">
          <FencePlan />
        </div>
      </div>
    </section>
  );
}
