import { CountyLocation } from '../types';

export const COUNTIES_DATA: CountyLocation[] = [
  {
    id: 'broward-county',
    slug: 'broward-county',
    name: 'Broward County',
    majorCities: [
      {
        id: 'fort-lauderdale',
        slug: 'fort-lauderdale',
        priorityTier: 1,
        placeType: 'city',
        name: 'Fort Lauderdale',
        zipCodes: ['33301', '33304', '33308', '33311', '33312', '33315', '33316'],
      },
      {
        id: 'hollywood',
        slug: 'hollywood',
        priorityTier: 1,
        placeType: 'city',
        name: 'Hollywood',
        zipCodes: ['33019', '33020', '33021', '33024'],
      },
      {
        id: 'pembroke-pines',
        slug: 'pembroke-pines',
        priorityTier: 2,
        placeType: 'city',
        name: 'Pembroke Pines',
        zipCodes: ['33026', '33027', '33028', '33029'],
      },
      {
        id: 'coral-springs',
        slug: 'coral-springs',
        priorityTier: 1,
        placeType: 'city',
        name: 'Coral Springs',
        zipCodes: ['33065', '33067', '33071', '33076'],
      },
      {
        id: 'pompano-beach',
        slug: 'pompano-beach',
        priorityTier: 1,
        placeType: 'city',
        name: 'Pompano Beach',
        zipCodes: ['33060', '33062', '33064', '33069'],
      },
      {
        id: 'miramar',
        slug: 'miramar',
        priorityTier: 2,
        placeType: 'city',
        name: 'Miramar',
        zipCodes: ['33023', '33025', '33027', '33029'],
      },
      {
        id: 'davie',
        slug: 'davie',
        priorityTier: 2,
        placeType: 'town',
        name: 'Davie',
        zipCodes: ['33314', '33324', '33328', '33330'],
      },
      {
        id: 'plantation',
        slug: 'plantation',
        priorityTier: 2,
        placeType: 'city',
        name: 'Plantation',
        zipCodes: ['33317', '33322', '33324'],
      },
      {
        id: 'sunrise',
        slug: 'sunrise',
        priorityTier: 2,
        placeType: 'city',
        name: 'Sunrise',
        zipCodes: ['33323', '33351'],
      },
      {
        id: 'deerfield-beach',
        slug: 'deerfield-beach',
        priorityTier: 2,
        placeType: 'city',
        name: 'Deerfield Beach',
        zipCodes: ['33441', '33442'],
      },
      {
        id: 'tamarac',
        slug: 'tamarac',
        priorityTier: 1,
        placeType: 'city',
        name: 'Tamarac',
        zipCodes: ['33319', '33321'],
      },
      {
        id: 'coconut-creek',
        slug: 'coconut-creek',
        priorityTier: 2,
        placeType: 'city',
        name: 'Coconut Creek',
        zipCodes: ['33066', '33073'],
      },
      {
        id: 'margate',
        slug: 'margate',
        priorityTier: 1,
        placeType: 'city',
        name: 'Margate',
        zipCodes: ['33063', '33068'],
      },
      {
        id: 'weston',
        slug: 'weston',
        priorityTier: 3,
        placeType: 'city',
        name: 'Weston',
        zipCodes: ['33326', '33327', '33331', '33332'],
      }
    ]
  },
  {
    id: 'miami-dade-county',
    slug: 'miami-dade-county',
    name: 'Miami-Dade County',
    majorCities: [
      {
        id: 'miami',
        slug: 'miami',
        priorityTier: 2,
        placeType: 'city',
        name: 'Miami',
        zipCodes: ['33101', '33125', '33129', '33130', '33131', '33137', '33138'],
      },
      {
        id: 'miami-beach',
        slug: 'miami-beach',
        priorityTier: 3,
        placeType: 'city',
        name: 'Miami Beach',
        zipCodes: ['33139', '33140', '33141'],
      },
      {
        id: 'hialeah',
        slug: 'hialeah',
        priorityTier: 2,
        placeType: 'city',
        name: 'Hialeah',
        zipCodes: ['33010', '33012', '33013', '33014', '33016'],
      },
      {
        id: 'coral-gables',
        slug: 'coral-gables',
        priorityTier: 3,
        placeType: 'city',
        name: 'Coral Gables',
        zipCodes: ['33134', '33146', '33156'],
      },
      {
        id: 'doral',
        slug: 'doral',
        priorityTier: 2,
        placeType: 'city',
        name: 'Doral',
        zipCodes: ['33122', '33126', '33166', '33178'],
      },
      {
        id: 'aventura',
        slug: 'aventura',
        priorityTier: 3,
        placeType: 'city',
        name: 'Aventura',
        zipCodes: ['33160', '33180'],
      },
      {
        id: 'kendall',
        slug: 'kendall',
        priorityTier: 3,
        placeType: 'census-designated place',
        name: 'Kendall',
        zipCodes: ['33156', '33173', '33176', '33183', '33186'],
      },
      {
        id: 'north-miami',
        slug: 'north-miami',
        priorityTier: 3,
        placeType: 'city',
        name: 'North Miami',
        zipCodes: ['33161', '33181'],
      },
      {
        id: 'sunny-isles-beach',
        slug: 'sunny-isles-beach',
        priorityTier: 3,
        placeType: 'city',
        name: 'Sunny Isles Beach',
        zipCodes: ['33160'],
      },
      {
        id: 'south-miami',
        slug: 'south-miami',
        priorityTier: 3,
        placeType: 'city',
        name: 'South Miami',
        zipCodes: ['33143'],
      },
      {
        id: 'pinecrest',
        slug: 'pinecrest',
        priorityTier: 3,
        placeType: 'village',
        name: 'Pinecrest',
        zipCodes: ['33156'],
      },
      {
        id: 'miami-gardens',
        slug: 'miami-gardens',
        priorityTier: 3,
        placeType: 'city',
        name: 'Miami Gardens',
        zipCodes: ['33054', '33055', '33056'],
      }
    ]
  },
  {
    id: 'palm-beach-county',
    slug: 'palm-beach-county',
    name: 'Palm Beach County',
    majorCities: [
      {
        id: 'west-palm-beach',
        slug: 'west-palm-beach',
        priorityTier: 2,
        placeType: 'city',
        name: 'West Palm Beach',
        zipCodes: ['33401', '33405', '33407', '33409', '33411'],
      },
      {
        id: 'boca-raton',
        slug: 'boca-raton',
        priorityTier: 1,
        placeType: 'city',
        name: 'Boca Raton',
        zipCodes: ['33431', '33432', '33433', '33486', '33487', '33496'],
      },
      {
        id: 'delray-beach',
        slug: 'delray-beach',
        priorityTier: 2,
        placeType: 'city',
        name: 'Delray Beach',
        zipCodes: ['33444', '33445', '33483', '33484'],
      },
      {
        id: 'boynton-beach',
        slug: 'boynton-beach',
        priorityTier: 2,
        placeType: 'city',
        name: 'Boynton Beach',
        zipCodes: ['33426', '33435', '33436', '33437'],
      },
      {
        id: 'jupiter',
        slug: 'jupiter',
        priorityTier: 2,
        placeType: 'town',
        name: 'Jupiter',
        zipCodes: ['33458', '33469', '33477', '33478'],
      },
      {
        id: 'wellington',
        slug: 'wellington',
        priorityTier: 3,
        placeType: 'village',
        name: 'Wellington',
        zipCodes: ['33414', '33449'],
      },
      {
        id: 'palm-beach-gardens',
        slug: 'palm-beach-gardens',
        priorityTier: 3,
        placeType: 'city',
        name: 'Palm Beach Gardens',
        zipCodes: ['33410', '33418'],
      },
      {
        id: 'lake-worth',
        slug: 'lake-worth',
        priorityTier: 3,
        placeType: 'city',
        name: 'Lake Worth Beach',
        zipCodes: ['33460', '33461'],
      },
      {
        id: 'royal-palm-beach',
        slug: 'royal-palm-beach',
        priorityTier: 3,
        placeType: 'village',
        name: 'Royal Palm Beach',
        zipCodes: ['33411', '33421'],
      },
      {
        id: 'greenacres',
        slug: 'greenacres',
        priorityTier: 3,
        placeType: 'city',
        name: 'Greenacres',
        zipCodes: ['33413', '33415', '33463'],
      },
      {
        id: 'riviera-beach',
        slug: 'riviera-beach',
        priorityTier: 3,
        placeType: 'city',
        name: 'Riviera Beach',
        zipCodes: ['33404'],
      }
    ]
  }
];

// Helper functions for easy lookups
export function getAllCities(): { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation }[] {
  const result: { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation }[] = [];
  COUNTIES_DATA.forEach(county => {
    county.majorCities.forEach(city => {
      result.push({ city, county });
    });
  });
  return result;
}

export function getCountyBySlug(slug: string): CountyLocation | undefined {
  return COUNTIES_DATA.find(c => c.slug === slug);
}

export function getCityBySlug(slug: string): { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation } | undefined {
  for (const county of COUNTIES_DATA) {
    const city = county.majorCities.find(ct => ct.slug === slug);
    if (city) {
      return { city, county };
    }
  }
  return undefined;
}
