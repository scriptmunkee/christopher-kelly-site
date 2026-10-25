// Site-wide settings.
export const site = {
  name: 'Christopher Kelly',
  url: 'https://christopher-kelly.co.uk',
  role: 'Enterprise AI SEO Consultant',

  // Booking link used by every "Book my call" button. External links open in a new tab.
  calendarUrl: 'https://tidycal.com/christopherkelly00/15-minute-meeting',

  // Analytics. Both keys are public, client-side identifiers (safe to commit).
  analytics: {
    // Cloudflare Web Analytics: cookieless, loads for everyone.
    cloudflareToken: '441bd70e437648718b020e6ce1973219',
    // PostHog (EU cloud): loads only after the visitor accepts cookies.
    posthogKey: 'phc_vEDfJ64brT22W6HXMVfQB3xuan5wrQwKtWKu3zfCsctp',
    posthogHost: 'https://eu.i.posthog.com',
  },

  // Your LinkedIn profile URL. Leave as '' to hide LinkedIn links.
  linkedinUrl: '',

  company: {
    legalName: 'Ascend Digital Marketing Ltd',
    number: '16822903',
  },

  // Set to true once /blog/ exists, to show Blog in the nav and footer.
  showBlog: false,

  // Free tools listed in the footer. Add { label, href } items when ready.
  freeTools: [] as { label: string; href: string }[],
};
