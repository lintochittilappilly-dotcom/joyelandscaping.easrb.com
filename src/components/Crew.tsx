import { business } from "../site";

export default function Crew() {
  return (
    <section id="crew" className="on-dark scroll-mt-6 bg-eucalypt text-concrete">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
          The three on the tools
        </h2>

        <div className="max-w-[60ch]">
          <p className="text-[1.12rem] leading-[1.65] text-concrete/85">
            For the past {business.yearsRunning} years Joye Landscaping &amp;
            Fencing has been run by Justin, Jomon and Jibin, and the work is
            still done by the same three sets of hands.
          </p>
          <p className="mt-5 text-[1.02rem] leading-[1.65] text-concrete/70">
            You deal with one of us from the first phone call through to the
            final walkthrough, so there is no chasing a stranger for an answer
            about your own yard. We walk the site, we measure it, and we put the
            price in writing before anything gets ordered or dug.
          </p>
          <p className="mt-8 border-t border-concrete/20 pt-6 font-display text-[14px] text-concrete/80">
            Ask for any of us by name when you call.
          </p>
        </div>
      </div>
    </section>
  );
}
