// Real, attributable recommendations. Every quote is verbatim from a public LinkedIn
// recommendation on Chris's profile, or from the Avid Panda reference letter (Lex Baciu),
// trimmed with ellipses only; never reworded. Two spelling slips in Tom Riley's original
// ("stratergy", "competative") are corrected. Headlines are fragments of the same quote.
export interface Testimonial {
  /** Where this person sits relative to the work (card label). */
  context: string;
  /** Short verbatim fragment used as the card headline. */
  headline: string;
  quote: string;
  name: string;
  role: string;
  /** Relationship as LinkedIn records it. */
  relation: string;
  initials: string;
}

export const linkedinRecommendationsUrl = 'https://www.linkedin.com/in/christopher-kelly-seo/details/recommendations/';

export const testimonials: Testimonial[] = [
  {
    context: 'Financial advice client, content strategy',
    headline: 'Grew from 400 to 30,000 visitors a month',
    quote: 'Chris was critical in executing our content strategy, his knowledge and expertise of SEO content writing allowed us to grow from 400 to 30,000 visitors a month in a very competitive SEO niche. Chris managed to ensure we won multiple snippets allowing us to outrank some of the biggest sites in the UK.',
    name: 'Tom Riley',
    role: 'SEO, brand and AI search consultant',
    relation: 'Managed Christopher directly',
    initials: 'TR',
  },
  {
    context: 'Crypto and web3 agency',
    headline: 'His expertise in technical SEO is unparalleled',
    quote: 'He delved deep into our website, identifying opportunities and optimizations that others might overlook. His expertise in technical SEO is unparalleled; Chris not only understands the complex, ever-changing landscape of SEO but also how to leverage it to achieve tangible results. His recommendations were always informed, actionable, and, most importantly, effective.',
    name: 'Victoria Olsina',
    role: 'AI search and GEO expert for web3, crypto and fintech brands',
    relation: 'Managed Christopher directly',
    initials: 'VO',
  },
  {
    context: 'Agency reference, Avid Panda',
    headline: 'Helped the client gain organic visibility quickly in a highly competitive space',
    quote: 'One standout project involved expanding a client’s online presence into a brand-new international market. His work helped the client gain organic visibility quickly in a highly competitive space. Alongside this, Chris led the automation initiatives that streamlined repetitive tasks. By automating these processes, he freed up the team to focus on more strategic work.',
    name: 'Lex Baciu',
    role: 'Avid Panda',
    relation: 'Reference letter',
    initials: 'LB',
  },
  {
    context: 'Agency SEO team',
    headline: 'His understanding of SEO tools, analytics, and algorithms is unparalleled',
    quote: 'His understanding of SEO tools, analytics, and algorithms is unparalleled, and he stays ahead of industry trends, always ensuring that our strategies are cutting-edge. As part of this, he takes on a proactive approach to streamlining effectiveness through building custom scripts for processes. Beyond their technical skills, Chris is a natural leader who fosters a collaborative environment.',
    name: 'Evi Dunphy',
    role: 'SEO Manager',
    relation: 'Worked alongside Christopher',
    initials: 'ED',
  },
  {
    context: 'Agency leadership, RobotZebra',
    headline: 'Delivering excellent results for our clients',
    quote: 'He consistently went the extra mile to solve campaign challenges, delivering excellent results for our clients. His ability to stay ahead of industry trends and apply them effectively was impressive, leading to stronger performance and happier clients.',
    name: 'Pat K.',
    role: 'Law and regulation, compliance and governance, RobotZebra',
    relation: 'Senior to Christopher at RobotZebra',
    initials: 'PK',
  },
  {
    context: 'Local SEO consultation',
    headline: 'The man really knows what he is doing',
    quote: 'I hired Chris for a consultation on Local SEO. I needed a second opinion, and since he’s a specialist in that specific niche, I was happy to hire him. The man really knows what he is doing. Furthermore, he’s a good and relatable guy who is easy to deal with.',
    name: 'Andreas Karle',
    role: 'SEO and GEO consultant',
    relation: 'Christopher’s client',
    initials: 'AK',
  },
];
