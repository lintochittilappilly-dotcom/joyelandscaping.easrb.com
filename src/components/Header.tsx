import { business, logo } from "../site";

const links = [
  { href: "#services", label: "What we build" },
  { href: "#process", label: "How it works" },
  { href: "#quote", label: "Get a quote" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <header className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.2rem] font-extrabold tracking-[-0.03em]">
              Joye
            </span>
            <span className="mt-1 font-display text-[10px] font-medium tracking-[0.16em] text-muted">
              LANDSCAPING &amp; FENCING
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[13.5px] font-medium text-ink/70 underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-fern"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={business.phones[0].href}
          className="hidden items-center gap-2 rounded-[2px] bg-bark px-4 py-2.5 font-display text-[13px] font-semibold text-cream transition-colors hover:bg-forest sm:inline-flex"
        >
          {business.phones[0].display}
        </a>
      </header>
    </div>
  );
}
