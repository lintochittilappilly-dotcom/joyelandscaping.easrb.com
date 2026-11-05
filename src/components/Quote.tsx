import { business } from "../site";
import QuoteForm from "./QuoteForm";

export default function Quote() {
  return (
    <section id="quote" className="on-dark scroll-mt-6 bg-bark text-concrete">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <h2 className="max-w-[13ch] font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Tell us what you need
          </h2>
          <p className="mt-6 max-w-[38ch] text-[1.02rem] leading-[1.62] text-concrete/75">
            Send the details through and we will come out and measure it up. If
            you would rather talk it through, call either of us directly.
          </p>

          <ul className="mt-10 space-y-5 border-t border-concrete/20 pt-8">
            {business.phones.map((phone) => (
              <li key={phone.name}>
                <p className="font-display text-[12px] uppercase tracking-[0.16em] text-galv">
                  {phone.name}
                </p>
                <a
                  href={phone.href}
                  className="mt-1 block font-display text-[1.45rem] font-semibold tracking-[-0.02em] text-concrete underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:decoration-concrete/60"
                >
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2 font-display text-[14px] text-concrete/70">
            <p>
              <a
                href={`mailto:${business.email}`}
                className="underline decoration-concrete/30 underline-offset-4 transition-colors hover:text-concrete hover:decoration-concrete"
              >
                {business.email}
              </a>
            </p>
            <p>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-concrete/30 underline-offset-4 transition-colors hover:text-concrete hover:decoration-concrete"
              >
                Our Facebook page
              </a>
            </p>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
