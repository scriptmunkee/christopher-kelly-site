// Site-wide settings. Fill the [PLACEHOLDER] values before launch.
export const site = {
  name: 'Christopher Kelly',
  url: 'https://christopher-kelly.co.uk',
  role: 'Enterprise AI SEO Consultant',

  // Booking link used by every "Book my call" button.
  // Paste your Zoho Bookings or Cal.com URL here. Until then, buttons scroll to the booking section.
  calendarUrl: '#book',

  // Your LinkedIn profile URL. Leave as '' to hide LinkedIn links.
  linkedinUrl: '',

  company: {
    legalName: 'Ascend Digital Marketing Ltd',
    number: '[NUMBER]',
  },

  // Set to true once /blog/ exists, to show Blog in the nav and footer.
  showBlog: false,

  // Free tools listed in the footer. Add { label, href } items when ready.
  freeTools: [] as { label: string; href: string }[],
};
