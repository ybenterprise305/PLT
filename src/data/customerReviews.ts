/** Selected verbatim Google Business Profile reviews checked against the connected profile on November 14, 2026.
 * The reviewer-provided photo belongs to the specific Nick Manning review only.
 * All cards link to the original public Google Maps business profile.
 */
export interface CustomerReview {
  author: string;
  date: string;
  quote: string;
  category: string;
  stars: 5;
  image?: string;
  imageAlt?: string;
}
export const GOOGLE_MAPS_REVIEWS_URL = 'https://maps.google.com/maps?cid=16992150185739281311';
export const FEATURED_REVIEWS: CustomerReview[] = [
  {
    author: 'Nick Manning', date: 'November 11, 2026', stars: 5, category: 'Locksmith service',
    quote: 'Shawn did a Great job. Quick service and very friendly. Some locksmiths get bad reps for ripping people off. Shawn will try and fix the problem the cheapest and most efficient way possible. I highly recommend keeping the company’s phone number in your contacts for an emergency.',
    image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLe-dYCB1WXlRs-QX9Znx5xl2FI-gUwHKSPa6Xij1oleRYQw6jlB6udrmu3RZ_crLIHvR0oQG4P72LB0ztjpgudEC2gbdZs4BMgcC4_VQYaR4bE8pndrFOieEIPz6php1CGJ9S17VDZpY2M=k-no',
    imageAlt: 'Photo included with Nick Manning’s Google review'
  },
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
