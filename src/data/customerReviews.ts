export interface CustomerReview {
  author: string;
  date?: string;
  quote: string;
  category: string;
  stars: 5;
  excerpt?: boolean;
}
// Public Google Maps profile displayed a 5.0 rating on November 28, 2026.
export const GOOGLE_MAPS_REVIEWS_URL = 'https://maps.google.com/maps?cid=16992150185739281311';
export const FEATURED_REVIEWS: CustomerReview[] = [
  { author: "Jacob Maman", stars: 5, category: "Vehicle lockout", quote: "Shawn answered quickly and came to help without making the situation stressful. Very professional.", excerpt: true },
  { author: "Netanel Medina", stars: 5, category: "Home lockout", quote: "thank you very much for unlocking my house" },
  { author: "Liad Mizrachi", stars: 5, category: "Customer service", quote: "Shawn was friendly, knowledgeable, and made sure everything was taken care of.", excerpt: true },
  { author: "orgest gjyli", stars: 5, category: "Response time", quote: "Nice service very responsive" },
  { author: "Mia Pesa", stars: 5, category: "Locksmith service", quote: "Fantastic service by Shawn 🤩" },
  {
    author: 'Roger Celler', date: 'November 13, 2026', stars: 5, category: 'Replacement car key',
    quote: 'Really happy with the service. Shawn made a new key for my 2022 Honda Accord and was very knowledgeable. The whole process was smooth and communication was excellent.'
  },
  {
    author: 'Shai Mengelgrein', date: 'November 13, 2026', stars: 5, category: 'All keys lost',
    quote: 'Lost my only key to my 2019 Ford F-150 and thought I was going to have a huge problem. Shawn handled everything professionally and got me a working key. Definitely impressed.'
  },
  {
    author: 'isaac', date: 'November 12, 2026', stars: 5, category: 'Home lockout',
    quote: 'Shawn came quick and opened my house within minutes so grateful.'
  },
  {
    author: 'Jairo Cortez', date: 'November 5, 2026', stars: 5, category: 'Car key replacement',
    quote: 'They came out quick and made a key for my 2020 dodge ram thanks'
  },
  {
    author: 'Leilani Winterdaal', date: 'November 4, 2026', stars: 5, category: 'Mobile locksmith service',
    quote: 'Technician came out in a timely matter, completed the job and was easy to work with.'
  },
  {
    author: 'ButterCup', date: 'November 10, 2026', stars: 5, category: 'Locksmith service',
    quote: 'Sean was prompt efficient and pleasant. They answer quickly and get the job done'
  },
  {
    author: 'richard wolf', date: 'November 8, 2026', stars: 5, category: 'Locksmith service',
    quote: "In one word OUTSTANDING!!!   Everything including price was perfect. That's more than 1 word."
  }
];
