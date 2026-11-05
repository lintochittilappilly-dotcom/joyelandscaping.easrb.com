import { business } from "../site";

export default function Crew() {
  return (
    <section id="crew" className="on-dark grain relative scroll-mt-24 overflow-hidden bg-bark text-cream">
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[13ch] font-display text-[clamp(2.1rem,4.4vw,3.2rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
              The three on the tools
            </h2>
            <ul className="mt-10 space-y-0 border-t border-cream/20">
              {business.crew.map((name) => (
                <li
                  key={name}
                  className="border-b border-cream/20 py-4 font-display text-[1.5rem] font-semibold tracking-[-0.02em] text-cream/90"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[58ch]">
            <p className="text-[1.14rem] leading-[1.66] text-cream/85">
              For the past {business.yearsRunning} years Joye Landscaping &amp;
              Fencing has been run by Justin, Jomon and Jibin, and the work is
              still done by the same three sets of hands.
            </p>
            <p className="mt-5 text-[1.03rem] leading-[1.66] text-cream/65">
              You deal with one of us from the first phone call through to the
              final walkthrough, so there is no chasing a stranger for an answer
              about your own yard. We walk the site, we measure it, and we put
              the price in writing before anything gets ordered or dug.
            </p>
            <p className="mt-8 border-t border-cream/20 pt-6 font-display text-[13.5px] text-cream/80">
              Ask for any of us by name when you call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
