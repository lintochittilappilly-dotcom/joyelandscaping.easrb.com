import { useState } from "react";
import type { FormEvent } from "react";
import { business, services } from "../site";

type Fields = {
  name: string;
  phone: string;
  suburb: string;
  need: string;
  detail: string;
};

const empty: Fields = { name: "", phone: "", suburb: "", need: "", detail: "" };

const fieldClass =
  "mt-2 w-full border-b border-line bg-transparent pb-2.5 font-display text-[15px] text-ink placeholder:text-ink/30 focus:border-fern focus:outline-none";

const labelClass =
  "block font-display text-[12.5px] font-medium text-muted";

const actionClass =
  "inline-flex items-center justify-center rounded-[2px] border border-bark/25 px-4 py-2.5 font-display text-[12.5px] font-semibold text-bark transition-colors hover:border-bark hover:bg-bark/5";

function compose(fields: Fields) {
  const subject = `Quote request: ${fields.need}`;
  const body = [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.suburb ? `Suburb: ${fields.suburb}` : null,
    `Work needed: ${fields.need}`,
    "",
    fields.detail ? fields.detail : "(No extra detail given.)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, body, plain: `${subject}\n\n${body}` };
}

function legacyCopy(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "-1000px";
  document.body.appendChild(area);
  area.select();

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export default function QuoteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">(
    "idle",
  );
  const [showText, setShowText] = useState(false);

  const { subject, body, plain } = compose(fields);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setCopyState("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Add your name so we know who to ask for.";
    if (fields.phone.replace(/\D/g, "").length < 6)
      next.phone = "Add a phone number we can reach you on.";
    if (!fields.need) next.need = "Pick the work you need.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setCopyState("idle");
  }

  async function copyDetails() {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(plain);
    } catch {
      if (!legacyCopy(plain)) {
        setShowText(true);
        setCopyState("manual");
        return;
      }
    }

    setCopyState("copied");
    window.setTimeout(() => setCopyState("idle"), 2500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="First and last"
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-[0.82rem] text-[#9c3d22]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="04XX XXX XXX"
            className={fieldClass}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-[0.82rem] text-[#9c3d22]">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="suburb" className={labelClass}>
            Suburb
          </label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            autoComplete="address-level2"
            value={fields.suburb}
            onChange={(e) => update("suburb", e.target.value)}
            placeholder="Where the job is"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="need" className={labelClass}>
            Work needed
          </label>
          <select
            id="need"
            name="need"
            value={fields.need}
            onChange={(e) => update("need", e.target.value)}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
            className={`${fieldClass} bg-paper`}
          >
            <option value="">Choose one</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="More than one of these">More than one of these</option>
            <option value="Something else">Something else</option>
          </select>
          {errors.need && (
            <p id="need-error" className="mt-2 text-[0.82rem] text-[#9c3d22]">
              {errors.need}
            </p>
          )}
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="detail" className={labelClass}>
          Anything else we should know
        </label>
        <textarea
          id="detail"
          name="detail"
          rows={3}
          value={fields.detail}
          onChange={(e) => update("detail", e.target.value)}
          placeholder="Roughly how many metres, sloping ground, where the access is"
          className="mt-2 w-full resize-y border border-line bg-transparent p-3 font-display text-[15px] text-ink placeholder:text-ink/30 focus:border-fern focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-[2px] bg-bark px-7 py-4 font-display text-[14.5px] font-semibold text-cream transition-colors hover:bg-forest sm:w-auto"
      >
        Send the details
      </button>

      {!sent && (
        <p className="mt-5 max-w-[46ch] text-[0.9rem] leading-relaxed text-muted">
          Sending opens your email app with the details filled in. Nothing is
          stored on this site.
        </p>
      )}

      {sent && (
        <div className="mt-6 border border-line bg-cream/70 p-5">
          <p
            aria-live="polite"
            className="max-w-[48ch] text-[0.94rem] leading-relaxed text-ink/85"
          >
            {copyState === "copied"
              ? "Copied. Paste it into an email to " + business.email + "."
              : copyState === "manual"
                ? "Copying did not work in this browser. Select your details below and copy them by hand."
                : "Your email app should be opening with the details filled in. If nothing happened, copy them across or message us on Facebook."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={copyDetails} className={actionClass}>
              {copyState === "copied" ? "Copied" : "Copy my details"}
            </button>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className={actionClass}
            >
              Message us on Facebook
            </a>
            <a href={business.phones[0].href} className={actionClass}>
              Call {business.phones[0].name}
            </a>
          </div>

          <p className="mt-4 font-display text-[12.5px] text-muted">
            Or send it to{" "}
            <a
              href={`mailto:${business.email}`}
              className="text-ink underline decoration-line underline-offset-4 hover:decoration-fern"
            >
              {business.email}
            </a>
            .
          </p>

          <details
            open={showText}
            onToggle={(e) => setShowText(e.currentTarget.open)}
            className="mt-4"
          >
            <summary className="cursor-pointer font-display text-[12.5px] text-muted transition-colors hover:text-ink">
              Show the details as text
            </summary>
            <pre className="mt-2 max-w-full overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-3 font-display text-[12px] leading-relaxed text-ink/75">
              {plain}
            </pre>
          </details>
        </div>
      )}
    </form>
  );
}
