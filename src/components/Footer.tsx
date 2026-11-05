import { business, logo } from "../site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="mx-auto max-w-[1240px] px-6 pb-10 pt-14 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                width={52}
                height={52}
                className="h-[52px] w-[52px]"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.25rem] font-extrabold tracking-[-0.03em]">
                  {business.shortName}
                </span>
                <span className="mt-1 font-display text-[10px] font-medium tracking-[0.16em] text-muted">
                  LANDSCAPING &amp; FENCING
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-[32ch] text-[0.95rem] leading-[1.6] text-muted">
              Fences, retaining walls, paving, turf and garden work, built by a
              crew of three.
            </p>
          </div>

          <div>
            <p className="font-display text-[12.5px] font-semibold text-muted">
              Call or text
            </p>
            <ul className="mt-3 space-y-1.5">
              {business.phones.map((phone) => (
                <li key={phone.name} className="text-[0.95rem]">
                  <span className="text-muted">{phone.name} </span>
                  <a
                    href={phone.href}
                    className="font-display font-medium transition-colors hover:text-fern"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[12.5px] font-semibold text-muted">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-fern"
                >
                  Email us
                </a>
              </li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-fern"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.82rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}
          </p>
          <p>Quotes are free and no obligation.</p>
        </div>
      </div>
    </footer>
  );
}
