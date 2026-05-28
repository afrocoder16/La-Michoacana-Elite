// La Michoacana Elite — content

const MENU_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "paletas", label: "Paletas" },
  { id: "icecream", label: "Ice Cream" },
  { id: "raspados", label: "Raspados" },
  { id: "snacks", label: "Snacks" },
  { id: "drinks", label: "Drinks" },
];

const MENU = [
  { cat: "paletas", name: "Fresa con Crema", price: "$4.50", desc: "Strawberries swirled with sweet cream. The classic.", tags: ["fresh fruit"], c1: "var(--accent-1)", c2: "#FF6BB0" },
  { cat: "paletas", name: "Mango Chamoy", price: "$4.50", desc: "Real mango with a chamoy ribbon and chili rim.", tags: ["spicy", "fresh fruit"], c1: "var(--accent-2)", c2: "#FFE08A" },
  { cat: "paletas", name: "Pepino Limón", price: "$4.50", desc: "Cucumber, lime, sea salt. Cooling in every bite.", tags: ["GF", "DF"], c1: "var(--accent-3)", c2: "#B5EE92" },
  { cat: "icecream", name: "Vanilla Bean Cone", price: "$5.00", desc: "Hand-scooped vanilla on a fresh waffle cone.", tags: [], c1: "#FFEFCB", c2: "#FFD89A" },
  { cat: "icecream", name: "Tres Leches Scoop", price: "$5.50", desc: "Cinnamon-soaked sponge cake folded into milk ice cream.", tags: ["bestseller"], c1: "#F4D58D", c2: "#E8C383" },
  { cat: "icecream", name: "Chocolate Abuelita", price: "$5.00", desc: "Mexican chocolate, cinnamon, a hint of clove.", tags: [], c1: "#5C3A21", c2: "#7A4F2E" },
  { cat: "raspados", name: "Mangonada", price: "$7.50", desc: "Mango sorbet, chamoy, chili powder, mango pieces, tamarind straw.", tags: ["fan fave", "spicy"], c1: "var(--accent-2)", c2: "var(--accent-1)" },
  { cat: "raspados", name: "Sandía Loca", price: "$6.50", desc: "Watermelon raspado with chili-lime salt and gummies.", tags: ["spicy"], c1: "#FF8B9E", c2: "#FF6BB0" },
  { cat: "raspados", name: "Piña Colada", price: "$6.00", desc: "Pineapple shaved ice with coconut cream drizzle.", tags: ["DF"], c1: "#FFE08A", c2: "#FFEFCB" },
  { cat: "snacks", name: "Elote", price: "$5.50", desc: "Grilled corn, mayo, cotija, chili-lime. The real deal.", tags: ["bestseller"], c1: "#FFE08A", c2: "#FFB627" },
  { cat: "snacks", name: "Walking Tacos", price: "$8.00", desc: "Crushed Doritos, seasoned beef, cheese, lettuce, tomato. Eaten from the bag.", tags: ["bestseller"], c1: "#FF8B3D", c2: "#FFB627" },
  { cat: "snacks", name: "Quesabirria (3pc)", price: "$11.00", desc: "Slow-braised beef tacos, cheese, consomé for dipping.", tags: ["bestseller", "spicy"], c1: "#D7263D", c2: "#FF6B3D" },
  { cat: "snacks", name: "Mini Pancakes", price: "$6.50", desc: "Tiny stack with strawberries, condensed milk, and Nutella.", tags: [], c1: "#F4D58D", c2: "#E8C383" },
  { cat: "snacks", name: "Nachos Locos", price: "$9.00", desc: "Chips, queso, jalapeños, beef, sour cream, pico.", tags: ["spicy"], c1: "#FFB627", c2: "#FF8B3D" },
  { cat: "drinks", name: "Horchata", price: "$4.50", desc: "Cinnamon-rice milk, served extra cold.", tags: ["GF"], c1: "#FFF6E5", c2: "#F4D58D" },
  { cat: "drinks", name: "Agua de Jamaica", price: "$4.50", desc: "Hibiscus flower brew, lightly sweetened.", tags: ["GF", "DF"], c1: "#D7263D", c2: "#A01B30" },
  { cat: "drinks", name: "Strawberry Shake", price: "$6.50", desc: "Fresh strawberries, milk, ice cream. Whipped on top.", tags: ["bestseller"], c1: "var(--accent-1)", c2: "#FF6BB0" },
  { cat: "drinks", name: "Tamarindo", price: "$4.50", desc: "Tart-sweet tamarind cooler with a chili rim.", tags: ["spicy"], c1: "#A0522D", c2: "#7A4F2E" },
];

const REVIEWS = [
  { rating: 5, name: "Maria G.", source: "DoorDash", text: "The mangonada is unreal. Tastes exactly like the ones I grew up with in Jalisco. My kids beg to come back every weekend." },
  { rating: 5, name: "Tyler R.", source: "Google", text: "Walking tacos blew my mind. Vanessa and her team are so welcoming. This place is a gem in Marshall." },
  { rating: 5, name: "Ana L.", source: "DoorDash", text: "Quesabirrias with that consomé — I dream about them. The fresa con crema paleta is the best in town." },
  { rating: 5, name: "Jordan S.", source: "Facebook", text: "Brought the whole family for our daughter's birthday. The vibe is so warm. Felt like we stepped into Mexico for an hour." },
  { rating: 4, name: "Priya K.", source: "Google", text: "Loved the elote and the strawberry shake. Will definitely be back to try more paletas." },
  { rating: 5, name: "Carlos M.", source: "DoorDash", text: "Authentic, fresh, and made with love. The horchata is perfect — not too sweet. 10/10." },
];

// Intentionally flat so each field can map 1:1 to future Google Sheet columns.
const FEATURED_PROMO = {
  id: "fresh-weekend-drop",
  status_label: "This weekend",
  eyebrow: "Featured Drop",
  headline_top: "Fresh",
  headline_accent: "Weekend",
  headline_bottom: "Drop",
  summary: "Two crowd-pullers in one campaign: a cooling cucumber-lime paleta and a loud, crunchy walking taco. Built for screenshot energy, quick stops, and fast sellouts.",
  hero_image_src: "assets/promo/fresh-weekend-drop.svg",
  hero_image_alt: "Promo flyer featuring Pepino Limon and Walking Tacos.",
  urgency_badge: "Limited weekend run",
  primary_cta_label: "See the menu",
  primary_cta_href: "#menu",
  secondary_cta_label: "Visit tonight",
  secondary_cta_href: "#visit",
  meta_1_label: "Run",
  meta_1_value: "Weekend only",
  meta_2_label: "Vibe",
  meta_2_value: "Cold + crunchy",
  meta_3_label: "Best for",
  meta_3_value: "Bring your crew",
  item_1_name: "Pepino Limon",
  item_1_description: "Cooling cucumber-lime paleta with a bright, clean finish and serious refresh factor.",
  item_1_highlight: "bright / icy / refreshing",
  item_2_name: "Walking Tacos",
  item_2_description: "Doritos bag loaded with seasoned beef, cheese, lettuce, tomato, and full snack-table crunch.",
  item_2_highlight: "savory / crunchy / late-night favorite",
};

const MANGONADA_INGREDIENTS = {
  base: [
    { id: "mango", label: "Mango sorbet", color: "var(--accent-2)", default: true },
    { id: "strawberry", label: "Strawberry sorbet", color: "var(--accent-1)" },
    { id: "watermelon", label: "Watermelon ice", color: "#FF8B9E" },
    { id: "pineapple", label: "Pineapple ice", color: "#FFE08A" },
  ],
  fruit: [
    { id: "mango-chunks", label: "Mango chunks", color: "#FFB627", default: true },
    { id: "strawberry-chunks", label: "Strawberry", color: "#FF2E93" },
    { id: "kiwi", label: "Kiwi", color: "#7DD957" },
    { id: "watermelon-chunks", label: "Watermelon", color: "#FF6B7A" },
  ],
  sauce: [
    { id: "chamoy", label: "Chamoy drizzle", color: "var(--accent-4)", default: true },
    { id: "tajin", label: "Tajín dust", color: "#C0392B", default: true },
    { id: "lime", label: "Fresh lime", color: "#7DD957" },
    { id: "condensed", label: "Condensed milk", color: "#FFF6E5" },
  ],
  topper: [
    { id: "tamarind-straw", label: "Tamarindo straw", color: "#8B4513", default: true },
    { id: "gummy", label: "Gummy worms", color: "#FF2E93" },
    { id: "rim", label: "Chili-salt rim", color: "#D7263D" },
    { id: "whip", label: "Whipped cream", color: "#FFF6E5" },
  ],
};

Object.assign(window, { MENU_CATEGORIES, MENU, REVIEWS, FEATURED_PROMO, MANGONADA_INGREDIENTS });
