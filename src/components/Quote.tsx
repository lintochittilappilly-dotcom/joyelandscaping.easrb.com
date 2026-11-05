import { business } from "../site";
import QuoteForm from "./QuoteForm";

export default function Quote() {
  return (
    <section id="quote" className="on-dark grain relative scroll-mt-24 overflow-hidden bg-forest text-cream">
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <h2 className="max-w-[13ch] font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
              Tell us what you need
            </h2>
            <p className="mt-6 max-w-[36ch] text-[1.03rem] leading-[1.62] text-cream/70">
              Send the details through and we will come out and measure it up.
              If you would rather talk it through, call either of us directly.
            </p>

            <ul className="mt-10 space-y-5 border-t border-cream/20 pt-8">
              {business.phones.map((phone) => (
                <li key={phone.name}>
                  <p className="font-display text-[12px] text-cream/45">
                    {phone.name}
                  </p>
                  <a
                    href={phone.href}
                    className="mt-1 block font-display text-[1.45rem] font-semibold tracking-[-0.02em] text-cream underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:decoration-cream/50"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 font-display text-[13.5px] text-cream/65">
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
                >
                  {business.email}
                </a>
              </p>
              <p>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
                >
                  Our Facebook page
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2px] bg-paper p-6 text-ink shadow-[0_28px_70px_rgba(0,0,0,0.32)] md:p-9">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
