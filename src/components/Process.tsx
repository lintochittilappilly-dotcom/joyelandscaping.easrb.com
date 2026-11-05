import { steps } from "../site";
import FencePlan from "./FencePlan";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-[15ch] font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            How a job runs
          </h2>
          <p className="max-w-[40ch] text-[1.03rem] leading-[1.62] text-muted lg:pb-1.5">
            Same four steps whether it is a side gate or a whole backyard. You
            know the price and the date before we start.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <ol className="border-t border-line">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-line py-6"
              >
                <span className="font-display text-[0.9rem] font-semibold tabular-nums text-fern">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.05rem] font-semibold tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[42ch] leading-[1.58] text-muted">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="on-dark grain relative isolate self-start overflow-hidden bg-forest p-6 text-cream lg:p-8">
            <div className="relative z-10">
              <FencePlan />
              <p className="mt-5 max-w-[34ch] border-t border-cream/15 pt-4 font-display text-[12.5px] leading-relaxed text-cream/55">
                Every quote starts as a measured drawing: boundaries, levels,
                and where the gate sits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
