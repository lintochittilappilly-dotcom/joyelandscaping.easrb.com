import { business } from "../site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="on-dark bg-bark text-concrete/65">
      <div className="mx-auto max-w-[1180px] px-6 pb-10 pt-12 md:px-10">
        <div className="grid gap-10 border-t border-concrete/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-concrete">
              {business.name}
            </p>
            <p className="mt-2 max-w-[30ch] text-[0.95rem] leading-[1.6]">
              Fences, retaining walls, paving, turf and garden work, built by a
              crew of three.
            </p>
          </div>

          <div>
            <p className="font-display text-[12px] uppercase tracking-[0.16em] text-galv">
              Call or text
            </p>
            <ul className="mt-3 space-y-1">
              {business.phones.map((phone) => (
                <li key={phone.name} className="text-[0.95rem]">
                  <span className="text-concrete/50">{phone.name} </span>
                  <a
                    href={phone.href}
                    className="text-concrete transition-colors hover:text-white"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[12px] uppercase tracking-[0.16em] text-galv">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-concrete"
                >
                  Email us
                </a>
              </li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-concrete"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-[0.82rem] text-concrete/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}
          </p>
          <p>Quotes are free and no obligation.</p>
        </div>
      </div>
    </footer>
  );
}
