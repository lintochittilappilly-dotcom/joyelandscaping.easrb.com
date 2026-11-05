import { services } from "../site";

const materials = [
  {
    name: "Treated pine",
    note: "Posts, rails, palings",
    style: {
      backgroundImage:
        "repeating-linear-gradient(93deg, #8a6742 0 2px, #7b5a37 2px 5px, #936f48 5px 7px)",
    },
  },
  {
    name: "Colorbond steel",
    note: "Fence sheets and gates",
    style: {
      backgroundImage:
        "repeating-linear-gradient(90deg, #6d7a72 0 7px, #5b6860 7px 8px, #7d8a82 8px 15px)",
    },
  },
  {
    name: "Concrete sleeper",
    note: "Retaining walls",
    style: {
      backgroundImage:
        "repeating-linear-gradient(90deg, #b9b7ae 0 1px, #c6c4bb 1px 26px), linear-gradient(#c6c4bb, #aeaca3)",
    },
  },
  {
    name: "Turf and soil",
    note: "Lawns and garden beds",
    style: {
      backgroundColor: "#3f5c37",
      backgroundImage:
        "radial-gradient(circle at 3px 3px, #4a6a3f 0 2px, transparent 2px), radial-gradient(circle at 9px 9px, #365230 0 2px, transparent 2px)",
      backgroundSize: "12px 12px, 12px 12px",
    },
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-[15ch] font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            What we build
          </h2>
          <p className="max-w-[40ch] text-[1.03rem] leading-[1.62] text-muted lg:pb-1.5">
            Fences first, then the walls, paths and garden work that go with
            them. Most jobs are one of these; plenty are a few at once.
          </p>
        </div>

        <dl className="mt-12 grid border-t border-line md:grid-cols-2 md:gap-x-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="group border-b border-line py-7 md:py-8"
            >
              <dt className="flex items-baseline gap-3 font-display text-[1.08rem] font-semibold tracking-[-0.012em]">
                <span
                  aria-hidden="true"
                  className="h-[6px] w-[6px] shrink-0 translate-y-[-2px] rounded-full bg-fern/0 transition-colors group-hover:bg-fern"
                />
                {service.name}
              </dt>
              <dd className="mt-2 max-w-[46ch] pl-[18px] leading-[1.6] text-muted">
                {service.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-y border-line bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10">
          <h3 className="font-display text-[0.95rem] font-semibold text-ink">
            Materials we work in
          </h3>
          <ul className="mt-6 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <li key={material.name}>
                <div
                  aria-hidden="true"
                  className="h-16 w-full border border-ink/10"
                  style={material.style}
                />
                <p className="mt-3 font-display text-[13.5px] font-semibold">
                  {material.name}
                </p>
                <p className="text-[0.92rem] leading-snug text-muted">
                  {material.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
