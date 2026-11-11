export interface LocksmithService {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  features: string[];
  commonSituations: string[];
  techniquesAndTools: string[];
  category: 'emergency' | 'residential' | 'commercial' | 'automotive';
}

export interface CityLocation {
  id: string;
  slug: string;
  name: string;
  countyId: string;
  countyName: string;
  zipCodes: string[];
  keyHighways: string[];
  popularAreas: string[];
  metaTitle: string;
  metaDescription: string;
  customIntro: string;
  serviceHighlights: string[];
}

export interface CountyLocation {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  seat: string;
  majorCities: CityLocation[];
  overview: string;
  highways: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface DispatchRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  serviceType: string;
  county: string;
  city: string;
  streetAddress?: string;
  urgency: 'immediate' | 'today' | 'scheduled';
  notes?: string;
  timestamp: string;
  status: 'received' | 'assigned' | 'dispatched';
}
