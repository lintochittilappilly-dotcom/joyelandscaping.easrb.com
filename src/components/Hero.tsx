import { business, logo } from "../site";

const sunburst = Array.from({ length: 30 }, (_, i) => {
  const a = (i / 30) * Math.PI * 2;
  return {
    x1: 200 + Math.cos(a) * 96,
    y1: 200 + Math.sin(a) * 96,
    x2: 200 + Math.cos(a) * 196,
    y2: 200 + Math.sin(a) * 196,
  };
});

const facts = [
  { term: "Two years", detail: "building fences, walls and gardens" },
  { term: "Three on the tools", detail: "the same crew, start to finish" },
  { term: "Free quotes", detail: "measured on site, no obligation" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="on-dark grain relative isolate overflow-hidden bg-forest text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] -top-[42%] hidden w-[52rem] text-cream/5 sm:block"
      >
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="2">
          {sunburst.map((line, i) => (
            <line key={i} {...line} />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-14 pt-14 md:px-10 md:pb-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.9rem,6.2vw,4.9rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              Built straight.
              <br />
              Planted deep.
            </h1>

            <p className="mt-7 max-w-[42ch] text-[1.09rem] leading-[1.62] text-cream/75">
              Fences, retaining walls, paving and gardens around{" "}
              {business.serviceArea}. Measured, priced in writing, and built by
              the three of us who quoted it.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex justify-center rounded-[2px] bg-cream px-7 py-4 font-display text-[14.5px] font-semibold text-forest transition-colors hover:bg-white"
              >
                Get a free quote
              </a>
              <a
                href={business.phones[0].href}
                className="inline-flex justify-center rounded-[2px] border border-cream/30 px-7 py-4 font-display text-[14.5px] font-semibold text-cream transition-colors hover:border-cream/70"
              >
                Call {business.phones[0].name} on {business.phones[0].display}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-[min(76vw,340px)] lg:mx-0 lg:justify-self-end">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border border-cream/25"
            />
            <img
              src={logo}
              alt={`${business.name} logo`}
              width={1024}
              height={1024}
              className="relative w-full drop-shadow-[0_22px_50px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <dl className="mt-14 grid gap-px border-t border-cream/15 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.term}
              className="py-5 sm:border-l sm:border-cream/15 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <dt className="font-display text-[0.95rem] font-semibold text-cream">
                {fact.term}
              </dt>
              <dd className="mt-1 text-[0.94rem] text-cream/55">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
