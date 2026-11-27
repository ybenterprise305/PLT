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
  priorityTier: 1 | 2 | 3;
  placeType: 'city' | 'town' | 'village' | 'census-designated place';
  zipCodes: string[];
}

export interface CountyLocation {
  id: string;
  slug: string;
  name: string;
  majorCities: CityLocation[];
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
