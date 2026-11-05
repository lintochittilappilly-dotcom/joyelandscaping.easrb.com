import { steps } from "../site";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-6">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            How a job runs
          </h2>
          <p className="max-w-[38ch] text-[1.02rem] leading-[1.6] text-muted lg:pb-2">
            Same four steps whether it is a side gate or a whole backyard. You
            know the price and the date before we start.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-10 border-t border-bark/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-bark/15 py-7 lg:border-b-0 lg:border-r lg:pr-8 last:lg:border-r-0"
            >
              <span className="font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.04em] text-eucalypt/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] text-[0.96rem] leading-[1.58] text-muted">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
