import { business } from "../site";

const links = [
  { href: "#services", label: "What we build" },
  { href: "#process", label: "How it works" },
  { href: "#quote", label: "Get a quote" },
];

export default function Header() {
  return (
    <header className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-6 py-6 md:px-10">
      <a href="#top" className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.02em]">
          Joye
        </span>
        <span className="mt-1 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-galv">
          Landscaping &amp; Fencing
        </span>
      </a>

      <nav
        aria-label="Main"
        className="hidden items-center gap-8 md:flex"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-[14px] font-medium text-concrete/75 transition-colors hover:text-concrete"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={business.phones[0].href}
        className="font-display text-[14px] font-semibold text-concrete underline decoration-galv/50 decoration-1 underline-offset-4 transition-colors hover:decoration-concrete"
      >
        Call {business.phones[0].display}
      </a>
    </header>
  );
}
