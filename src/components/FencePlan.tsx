const posts: Array<{ x: number; y: number }> = [];

function addPost(x: number, y: number) {
  if (posts.some((p) => p.x === x && p.y === y)) return;
  posts.push({ x, y });
}

// Rear fence
[246, 308, 370, 432, 494, 556].forEach((x) => addPost(x, 52));
// Right fence
[52, 132, 212, 292, 372].forEach((y) => addPost(556, y));
// Front fence, either side of the gate
[556, 494, 432, 370, 308, 246, 182, 122, 54].forEach((x) => addPost(x, 372));
// Left fence back to the house corner
[372, 314, 256, 200].forEach((y) => addPost(54, y));

const ink = "#e9e6dd";
const steel = "#b9bdb6";

export default function FencePlan() {
  return (
    <svg
      viewBox="0 0 620 440"
      role="img"
      aria-label="Plan drawing of a fenced yard: a house, a fence line with posts, a gate, a garden bed, and a front boundary measuring 18.4 metres."
      className="h-auto w-full max-w-[640px]"
    >
      <text
        x="54"
        y="26"
        fill={steel}
        fillOpacity="0.75"
        fontFamily="Archivo Variable, sans-serif"
        fontSize="9"
        letterSpacing="2.4"
      >
        SITE PLAN
      </text>

      {/* House footprint */}
      <rect
        x="54"
        y="96"
        width="192"
        height="104"
        fill="none"
        stroke={steel}
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <text
        x="68"
        y="122"
        fill={steel}
        fillOpacity="0.6"
        fontFamily="Archivo Variable, sans-serif"
        fontSize="8.5"
        letterSpacing="2.2"
      >
        HOUSE
      </text>
      <path
        d="M246 96 V52"
        stroke={steel}
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* Garden bed in the front corner */}
      <path
        d="M54 372 C 84 320 140 326 168 372 Z"
        fill="#33452e"
        fillOpacity="0.6"
        stroke={steel}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {[
        [88, 352, 4],
        [110, 344, 3],
        [132, 352, 4.5],
        [151, 361, 3],
      ].map(([cx, cy, r]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={steel}
          strokeOpacity="0.6"
          strokeWidth="1"
        />
      ))}

      {/* Fence lines */}
      <g
        fill="none"
        stroke={ink}
        strokeWidth="1.7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path className="trace" pathLength={1} d="M246 52 H556 V372" />
        <path
          className="trace"
          pathLength={1}
          style={{ animationDelay: "0.35s" }}
          d="M556 372 H246"
        />
        <path
          className="trace"
          pathLength={1}
          style={{ animationDelay: "0.5s" }}
          d="M182 372 H54 V200"
        />
      </g>

      {/* Gate: an open leaf and its swing */}
      <g stroke={steel} fill="none">
        <path d="M246 372 V308" strokeOpacity="0.85" strokeWidth="1.5" />
        <path
          d="M246 308 A 64 64 0 0 1 182 372"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </g>

      {/* Posts */}
      {posts.map((post, i) => (
        <rect
          key={`${post.x}-${post.y}`}
          className="set-post"
          x={post.x - 2.6}
          y={post.y - 2.6}
          width="5.2"
          height="5.2"
          fill={ink}
          style={{ animationDelay: `${0.75 + i * 0.035}s` }}
        />
      ))}

      {/* Front dimension line */}
      <g stroke={steel} strokeOpacity="0.5" strokeWidth="1">
        <path d="M54 398 V412" />
        <path d="M556 398 V412" />
        <path d="M54 405 H556" strokeOpacity="0.3" />
      </g>
      <text
        x="305"
        y="392"
        textAnchor="middle"
        fill={steel}
        fillOpacity="0.85"
        fontFamily="Archivo Variable, sans-serif"
        fontSize="10"
        letterSpacing="1.6"
      >
        18.4 m
      </text>

      {/* Side dimension line */}
      <g stroke={steel} strokeOpacity="0.5" strokeWidth="1">
        <path d="M587 52 H599" />
        <path d="M587 372 H599" />
        <path d="M593 52 V372" strokeOpacity="0.3" />
      </g>
      <text
        x="586"
        y="212"
        textAnchor="middle"
        transform="rotate(-90 586 212)"
        fill={steel}
        fillOpacity="0.85"
        fontFamily="Archivo Variable, sans-serif"
        fontSize="10"
        letterSpacing="1.6"
      >
        12.0 m
      </text>

      {/* North arrow */}
      <g stroke={steel} strokeOpacity="0.8" fill="none">
        <path d="M500 316 V288" strokeWidth="1" />
        <path d="M495 295 L500 288 L505 295" strokeWidth="1" />
      </g>
      <text
        x="500"
        y="279"
        textAnchor="middle"
        fill={steel}
        fillOpacity="0.8"
        fontFamily="Archivo Variable, sans-serif"
        fontSize="9"
        letterSpacing="1.5"
      >
        N
      </text>
    </svg>
  );
}
