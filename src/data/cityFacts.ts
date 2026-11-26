interface CityFacts {
  population: number;
  incorporated: number | null;
}

export const CITY_FACT_SOURCES = {
  population: 'https://www.edr.state.fl.us/Content/population-demographics/data/2024_Pop_Estimates.pdf',
  kendall: 'https://data.census.gov/profile/Kendall_CDP,_Florida?g=160XX00US1236100',
  incorporation: 'https://static-s3.lobbytools.com/docs/2025/1/9/133418_2025_local_government_formation_manual.pdf',
};

// Population counts are from the April 1, 2020 Census, not current estimates.
export const CITY_FACTS: Readonly<Record<string, CityFacts>> = {
  'fort-lauderdale': { population: 182760, incorporated: 1911 },
  'hollywood': { population: 153067, incorporated: 1925 },
  'pembroke-pines': { population: 171178, incorporated: 1961 },
  'coral-springs': { population: 134394, incorporated: 1963 },
  'pompano-beach': { population: 112046, incorporated: 1947 },
  'miramar': { population: 134721, incorporated: 1955 },
  'davie': { population: 105691, incorporated: 1961 },
  'plantation': { population: 91750, incorporated: 1953 },
  'sunrise': { population: 97335, incorporated: 1961 },
  'deerfield-beach': { population: 86859, incorporated: 1925 },
  'tamarac': { population: 71897, incorporated: 1963 },
  'coconut-creek': { population: 57833, incorporated: 1967 },
  'margate': { population: 58712, incorporated: 1955 },
  'weston': { population: 68107, incorporated: 1996 },
  'miami': { population: 442241, incorporated: 1896 },
  'miami-beach': { population: 82890, incorporated: 1915 },
  'hialeah': { population: 223109, incorporated: 1925 },
  'coral-gables': { population: 49248, incorporated: 1925 },
  'doral': { population: 75874, incorporated: 2003 },
  'aventura': { population: 40242, incorporated: 1995 },
  'kendall': { population: 80241, incorporated: null },
  'north-miami': { population: 60191, incorporated: 1926 },
  'sunny-isles-beach': { population: 22342, incorporated: 1997 },
  'south-miami': { population: 12026, incorporated: 1926 },
  'pinecrest': { population: 18388, incorporated: 1996 },
  'miami-gardens': { population: 111640, incorporated: 2003 },
  'west-palm-beach': { population: 117415, incorporated: 1894 },
  'boca-raton': { population: 97422, incorporated: 1925 },
  'boynton-beach': { population: 80380, incorporated: 1920 },
  'delray-beach': { population: 66846, incorporated: 1911 },
  'jupiter': { population: 61047, incorporated: 1925 },
  'wellington': { population: 61637, incorporated: 1995 },
  'palm-beach-gardens': { population: 59182, incorporated: 1959 },
  'lake-worth': { population: 42219, incorporated: 1913 },
  'royal-palm-beach': { population: 38932, incorporated: 1959 },
  'greenacres': { population: 43990, incorporated: 1926 },
  'riviera-beach': { population: 37604, incorporated: 1922 },
};
