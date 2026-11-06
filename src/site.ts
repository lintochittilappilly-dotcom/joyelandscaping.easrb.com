/**
 * Business details, taken from Joye Landscaping & Fencing's public Facebook page.
 *
 * CONFIRM BEFORE GOING LIVE:
 *  - serviceArea: the page did not state a town or region. Set this to the suburbs
 *    or region they actually cover. Nothing on the site claims a location until then.
 *  - hours: not published, so the site never states opening hours.
 *  - services: the page lists "landscaping and fencing". The service lines below are
 *    the usual jobs this work covers. Delete anything the crew does not do.
 */

/**
 * The logo shown in the header, hero and footer. Point this at "/logo.png" to
 * use the crew's own export instead of the redrawn seal.
 */
/**
 * The crew's own seal, straight from public/logo.jpg, so there is no second
 * export to keep in sync. That file is a circle on a white background; the
 * circular window in components/Seal.tsx crops the white away. Geometry is
 * measured from the 1600px source: seal centre (784, 802), radius 495.6.
 */
export const logo = "/logo.jpg";

export const seal = {
  centreX: 49, // 784 / 1600
  centreY: 50.125, // 802 / 1600
  // 100 / (2 x 492 / 1600): the seal is 991px wide, cropped a few pixels inside
  // its brown ring so no pale JPEG edge shows against the dark hero.
  scale: 162.6,
} as const;

export const business = {
  name: "Joye Landscaping & Fencing",
  shortName: "Joye",
  crew: ["Justin", "Jomon", "Jibin"],
  yearsRunning: 2,
  serviceArea: "your suburb and the surrounding area",
  email: "joyelandscapingandfencing@gmail.com",
  facebook: "https://www.facebook.com/61580485966489",
  phones: [
    { name: "Jomon", display: "0402 249 585", href: "tel:+61402249585" },
    { name: "Justin", display: "0469 062 269", href: "tel:+61469062269" },
  ],
} as const;

export const services = [
  {
    name: "Timber paling fences",
    detail:
      "Hardwood posts set in concrete, palings run to a string line, rails and capping fixed square.",
  },
  {
    name: "Colorbond fencing",
    detail:
      "Sheet and post installs, colour matched to the house, with gates hung so they close first time.",
  },
  {
    name: "Retaining walls",
    detail:
      "Timber sleeper and concrete sleeper walls, built with drainage and ag pipe behind them.",
  },
  {
    name: "Paving and paths",
    detail:
      "Base compacted properly, falls running away from the house, pavers cut in tight at the edges.",
  },
  {
    name: "Turf and garden beds",
    detail:
      "Ground levelled and screened, soil improved, turf laid and beds mulched to hold the moisture.",
  },
  {
    name: "Gates, repairs and clean-ups",
    detail:
      "Sagging gates rehung, broken posts replaced, overgrown yards cut back and cleared out.",
  },
] as const;

export const steps = [
  {
    title: "Call or message us",
    detail:
      "Tell us what you need done and roughly what the yard looks like now. A photo helps.",
  },
  {
    title: "We come and measure",
    detail:
      "One of us walks the site with you, checks levels and access, then puts the price in writing.",
  },
  {
    title: "We build it",
    detail:
      "You get a start date. The same three of us turn up, and the site is left tidy each afternoon.",
  },
  {
    title: "You check the work",
    detail:
      "We walk it through together before we pack up. Anything that needs adjusting, we adjust it.",
  },
] as const;
