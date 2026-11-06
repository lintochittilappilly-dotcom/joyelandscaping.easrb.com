import { business, logo, seal } from "../site";

/**
 * The crew's seal is a circle printed on a white JPEG. Rather than ask for a
 * second, transparent export, the artwork is shown through a circular window:
 * the image is scaled up and nudged so the seal fills the circle exactly, which
 * throws the white background outside the clip. Geometry lives in `seal`.
 */
export default function Seal({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      className={`relative block overflow-hidden rounded-full ${className}`}
    >
      <img
        src={logo}
        alt=""
        width={1600}
        height={1600}
        draggable={false}
        className="absolute left-1/2 top-1/2 max-w-none"
        style={{
          width: `${seal.scale}%`,
          transform: `translate(-${seal.centreX}%, -${seal.centreY}%)`,
        }}
      />
    </span>
  );
}

export const sealLabel = `${business.name} logo`;
