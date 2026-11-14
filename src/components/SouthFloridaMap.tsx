import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Navigation,
  Sparkles,
  ChevronRight,
  Compass,
  CheckCircle2,
  Search
} from 'lucide-react';
import { COUNTIES_DATA, getAllCities } from '../data/locationsData';
import { trackPhoneClick } from '../utils/analytics';

import { LocalizedA } from './LocalizedA';
interface SouthFloridaMapProps {
  onSelectCity?: (slug: string) => void;
  title?: string;
  subtitle?: string;
}

export interface MapLocationItem {
  id: string;
  name: string;
  slug: string;
  county: string;
  countySlug: 'broward-county' | 'miami-dade-county' | 'palm-beach-county';
  zip: string;
  eta: string;
  corridor: string;
  highlights: string;
  isHub?: boolean;
}

export const SOUTH_FLORIDA_LOCATIONS: MapLocationItem[] = [
  // Broward County (Primary Mobile Dispatch Hub - 14 Cities)
  { id: 'coral-springs', name: 'Coral Springs', slug: 'coral-springs', county: 'Broward County', countySlug: 'broward-county', zip: '33065, 33067', eta: '15-20 min', corridor: 'Sawgrass Expy & Sample Rd', highlights: 'Core northwest dispatch hub, car lockouts & residential rekeys', isHub: true },
  { id: 'fort-lauderdale', name: 'Fort Lauderdale', slug: 'fort-lauderdale', county: 'Broward County', countySlug: 'broward-county', zip: '33301, 33304', eta: '15-20 min', corridor: 'I-95, I-595, US-1 & Las Olas', highlights: 'Downtown, Las Olas condos, airport & beachfront lockout units', isHub: true },
  { id: 'pompano-beach', name: 'Pompano Beach', slug: 'pompano-beach', county: 'Broward County', countySlug: 'broward-county', zip: '33060, 33062', eta: '15-20 min', corridor: 'I-95, Turnpike & Atlantic Blvd', highlights: 'Beachside unlocks, commercial storefronts & automotive keys' },
  { id: 'plantation', name: 'Plantation', slug: 'plantation', county: 'Broward County', countySlug: 'broward-county', zip: '33317, 33324', eta: '15-20 min', corridor: 'I-595 & Broward Blvd', highlights: 'Midtown offices, Jacaranda & residential deadbolt installs' },
  { id: 'davie', name: 'Davie', slug: 'davie', county: 'Broward County', countySlug: 'broward-county', zip: '33314, 33328', eta: '15-20 min', corridor: 'I-595, I-75 & University Dr', highlights: 'University campus unlocks & western residential rekeying' },
  { id: 'pembroke-pines', name: 'Pembroke Pines', slug: 'pembroke-pines', county: 'Broward County', countySlug: 'broward-county', zip: '33026, 33028', eta: '15-20 min', corridor: 'I-75 & Pines Blvd', highlights: 'Subdivision rekeys, Pembroke Lakes Mall car lockouts' },
  { id: 'hollywood', name: 'Hollywood', slug: 'hollywood', county: 'Broward County', countySlug: 'broward-county', zip: '33020, 33024', eta: '15-20 min', corridor: 'I-95 & Hollywood Blvd', highlights: 'Broadwalk beach unlocks, commercial hardware & deadbolts' },
  { id: 'miramar', name: 'Miramar', slug: 'miramar', county: 'Broward County', countySlug: 'broward-county', zip: '33025, 33027', eta: '15-25 min', corridor: 'Turnpike & Miramar Pkwy', highlights: 'Corporate technology parks & gated neighborhood locks' },
  { id: 'sunrise', name: 'Sunrise', slug: 'sunrise', county: 'Broward County', countySlug: 'broward-county', zip: '33323, 33351', eta: '15-20 min', corridor: 'Sawgrass Expy & Sunrise Blvd', highlights: 'Sawgrass Mills parking lockouts & arena district response' },
  { id: 'deerfield-beach', name: 'Deerfield Beach', slug: 'deerfield-beach', county: 'Broward County', countySlug: 'broward-county', zip: '33441, 33442', eta: '15-20 min', corridor: 'I-95, US-1 & Hillsboro Blvd', highlights: 'Canal community locks & coastal auto key cutting' },
  { id: 'tamarac', name: 'Tamarac', slug: 'tamarac', county: 'Broward County', countySlug: 'broward-county', zip: '33319, 33321', eta: '15-20 min', corridor: 'Commercial Blvd & University Dr', highlights: 'Woodmont & Kings Point residential rekeying' },
  { id: 'coconut-creek', name: 'Coconut Creek', slug: 'coconut-creek', county: 'Broward County', countySlug: 'broward-county', zip: '33066, 33073', eta: '15-20 min', corridor: 'Turnpike & Sample Rd', highlights: 'Promenade retail & casino parking emergency unlocks' },
  { id: 'margate', name: 'Margate', slug: 'margate', county: 'Broward County', countySlug: 'broward-county', zip: '33063, 33068', eta: '15-20 min', corridor: 'State Road 7 (US-441)', highlights: 'Commercial corridor locks & home rekeying' },
  { id: 'weston', name: 'Weston', slug: 'weston', county: 'Broward County', countySlug: 'broward-county', zip: '33326, 33331', eta: '15-25 min', corridor: 'I-75 & Royal Palm Blvd', highlights: 'Gated enclave high-security deadbolts & key fob replacements' },

  // Miami-Dade County (South Dispatch Zone - 12 Cities)
  { id: 'miami', name: 'Miami (Downtown & Brickell)', slug: 'miami', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33101, 33131', eta: '15-25 min', corridor: 'I-95, US-1 & Brickell Ave', highlights: 'High-rise luxury condos, downtown commercial & vehicle keys', isHub: true },
  { id: 'miami-beach', name: 'Miami Beach', slug: 'miami-beach', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33139, 33140', eta: '20-30 min', corridor: 'A1A Collins Ave & Tuttle Causeway', highlights: 'South Beach lockouts, coastal mortise locks & hospitality' },
  { id: 'aventura', name: 'Aventura', slug: 'aventura', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33180', eta: '15-20 min', corridor: 'Biscayne Blvd (US-1)', highlights: 'Aventura Mall area, condo locks & transponder programming' },
  { id: 'hialeah', name: 'Hialeah', slug: 'hialeah', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33012, 33016', eta: '15-25 min', corridor: 'Palmetto FL-826 & W 49th St', highlights: 'Commercial warehouse locks, auto laser keys & deadbolts' },
  { id: 'doral', name: 'Doral', slug: 'doral', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33178, 33122', eta: '15-25 min', corridor: 'FL-836 & FL-826 Palmetto', highlights: 'Business parks, cargo facilities & fleet vehicle keys' },
  { id: 'coral-gables', name: 'Coral Gables', slug: 'coral-gables', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33134, 33146', eta: '15-25 min', corridor: 'US-1 & Ponce de Leon Blvd', highlights: 'Miracle Mile offices, UM campus & historic mortise locks' },
  { id: 'kendall', name: 'Kendall', slug: 'kendall', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33176, 33186', eta: '20-30 min', corridor: 'Don Shula FL-874 & Kendall Dr', highlights: 'Dadeland Mall shopping lockouts & suburban residential rekeys' },
  { id: 'north-miami', name: 'North Miami', slug: 'north-miami', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33161, 33181', eta: '15-25 min', corridor: 'Biscayne Blvd & NE 125th St', highlights: 'Canal homes, FIU Biscayne campus & storefront locks' },
  { id: 'sunny-isles-beach', name: 'Sunny Isles Beach', slug: 'sunny-isles-beach', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33160', eta: '15-25 min', corridor: 'Collins Ave & Sunny Isles Blvd', highlights: 'Ultra-luxury high-rise condos & smart digital keypads' },
  { id: 'south-miami', name: 'South Miami', slug: 'south-miami', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33143', eta: '15-25 min', corridor: 'US-1 & Sunset Dr', highlights: 'Sunset Place retail, medical offices & residential locks' },
  { id: 'pinecrest', name: 'Pinecrest', slug: 'pinecrest', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33156', eta: '20-30 min', corridor: 'US-1 Pinecrest Pkwy', highlights: 'Luxury estate deadbolts, gate locks & multi-point systems' },
  { id: 'miami-gardens', name: 'Miami Gardens', slug: 'miami-gardens', county: 'Miami-Dade County', countySlug: 'miami-dade-county', zip: '33054, 33056', eta: '15-25 min', corridor: 'Turnpike & NW 27th Ave', highlights: 'Hard Rock Stadium parking lockouts & car key cutting' },

  // Palm Beach County (North Dispatch Zone - 11 Cities)
  { id: 'west-palm-beach', name: 'West Palm Beach', slug: 'west-palm-beach', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33401, 33407', eta: '15-25 min', corridor: 'I-95 & Okeechobee Blvd', highlights: 'Downtown, airport corridor & residential mobile vans', isHub: true },
  { id: 'boca-raton', name: 'Boca Raton', slug: 'boca-raton', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33431, 33486', eta: '15-20 min', corridor: 'I-95, Glades Rd & US-1', highlights: 'Town Center area, FAU campus & upscale home deadbolts', isHub: true },
  { id: 'delray-beach', name: 'Delray Beach', slug: 'delray-beach', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33444, 33483', eta: '15-20 min', corridor: 'I-95 & Atlantic Ave', highlights: 'Downtown Atlantic Ave storefronts & beachside unlocks' },
  { id: 'boynton-beach', name: 'Boynton Beach', slug: 'boynton-beach', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33426, 33435', eta: '15-25 min', corridor: 'I-95 & Boynton Beach Blvd', highlights: 'Residential lock replacement & coastal car lockouts' },
  { id: 'jupiter', name: 'Jupiter', slug: 'jupiter', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33458, 33477', eta: '20-30 min', corridor: 'I-95, Turnpike & US-1', highlights: 'Abacoa, Admirals Cove & northern coastal mobile dispatch' },
  { id: 'palm-beach-gardens', name: 'Palm Beach Gardens', slug: 'palm-beach-gardens', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33410, 33418', eta: '15-25 min', corridor: 'I-95 & PGA Blvd', highlights: 'PGA corridor, The Gardens Mall & country club locks' },
  { id: 'wellington', name: 'Wellington', slug: 'wellington', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33414, 33449', eta: '20-30 min', corridor: 'Southern Blvd & US-441', highlights: 'Equestrian estates, Olympia & mall area dispatch' },
  { id: 'lake-worth', name: 'Lake Worth Beach', slug: 'lake-worth', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33460, 33461', eta: '15-25 min', corridor: 'I-95, Lake Ave & Dixie Hwy', highlights: 'Historic cottage mortise locks & beach casino unlocks' },
  { id: 'royal-palm-beach', name: 'Royal Palm Beach', slug: 'royal-palm-beach', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33411, 33421', eta: '20-30 min', corridor: 'Southern Blvd & State Road 7', highlights: 'Suburban family home deadbolts & retail car keys' },
  { id: 'greenacres', name: 'Greenacres', slug: 'greenacres', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33413, 33463', eta: '15-25 min', corridor: 'Lake Worth Rd & Forest Hill Blvd', highlights: 'River Bridge rekeying & central Palm Beach dispatch' },
  { id: 'riviera-beach', name: 'Riviera Beach', slug: 'riviera-beach', county: 'Palm Beach County', countySlug: 'palm-beach-county', zip: '33404', eta: '15-25 min', corridor: 'I-95 & Blue Heron Blvd', highlights: 'Port marina auto keys & saltwater-resistant hardware' }
];

export function SouthFloridaMap({
  onSelectCity,
  title = "South Florida 24/7 Mobile Dispatch Coverage",
  subtitle = "Interactive mobile locksmith dispatch radar across 37 South Florida cities in Broward, Miami-Dade, and Palm Beach counties."
}: SouthFloridaMapProps) {
  const [selectedCounty, setSelectedCounty] = useState<'all' | 'broward-county' | 'miami-dade-county' | 'palm-beach-county'>('all');
  const [activeCityId, setActiveCityId] = useState<string>('coral-springs');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCity = SOUTH_FLORIDA_LOCATIONS.find(c => c.id === activeCityId) || SOUTH_FLORIDA_LOCATIONS[0];

  const visibleCities = SOUTH_FLORIDA_LOCATIONS.filter(c => {
    const matchesCounty = selectedCounty === 'all' || c.countySlug === selectedCounty;
    const matchesSearch = searchQuery === '' || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.zip.includes(searchQuery) ||
      c.corridor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCounty && matchesSearch;
  });

  const handleCitySelect = (city: MapLocationItem) => {
    setActiveCityId(city.id);
  };

  const handleOpenCityPage = (slug: string) => {
    if (onSelectCity) {
      onSelectCity(slug);
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Top Header & Context */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-5 sm:pb-6 sm:mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live Dispatch System · 37 Active Service Locations</span>
          </div>
          <h2 className="font-heading font-black text-xl sm:text-3xl text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* County Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full lg:w-auto">
          <button
            onClick={() => setSelectedCounty('all')}
            className={`flex-1 sm:flex-none px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
              selectedCounty === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Areas (37)
          </button>
          <button
            onClick={() => setSelectedCounty('broward-county')}
            className={`flex-1 sm:flex-none px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
              selectedCounty === 'broward-county'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Broward (14)
          </button>
          <button
            onClick={() => setSelectedCounty('miami-dade-county')}
            className={`flex-1 sm:flex-none px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
              selectedCounty === 'miami-dade-county'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Miami-Dade (12)
          </button>
          <button
            onClick={() => setSelectedCounty('palm-beach-county')}
            className={`flex-1 sm:flex-none px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
              selectedCounty === 'palm-beach-county'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Palm Beach (11)
          </button>
        </div>
      </div>

      {/* Mobile Quick City Search Box */}
      <div className="relative mb-5 lg:hidden">
        <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type your city or zip code (e.g., Coral Springs, Fort Lauderdale, 33065)..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-inner min-h-[44px]"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
          >
            Clear
          </button>
        )}
      </div>

      {/* Main Grid: On mobile, the Active Location Live Dispatch Console is rendered FIRST so users see their arrival time and Call button immediately! */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        
        {/* Active City Detail Card (order-1 on mobile, order-2 on desktop) */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
          
          <div className="bg-slate-900 border-2 border-amber-500/60 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header info */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Live Mobile Dispatch
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{activeCity.county}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {activeCity.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Corridor: <span className="text-amber-400 font-bold">{activeCity.corridor}</span>
                </p>
              </div>

              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            {/* Key Metrics on Smartphone */}
            <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
              <div className="p-2.5 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">ETA</div>
                  <div className="text-white font-black text-xs sm:text-sm">{activeCity.eta}</div>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Service Mode</div>
                  <div className="text-emerald-400 font-black text-xs sm:text-sm">We Come To You</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 space-y-1.5 text-xs text-slate-300 mb-4">
              <div>
                <strong className="text-white font-semibold">Zip Codes Served:</strong> {activeCity.zip}
              </div>
              <div className="line-clamp-2 sm:line-clamp-none">
                <strong className="text-amber-400 font-semibold">Local Coverage:</strong> {activeCity.highlights}.
              </div>
            </div>

            {/* Direct Call & Action Buttons (Finger-friendly min-h-[48px]) */}
            <div className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <LocalizedA
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: `map_active_city_call_${activeCity.id}`, pagePath: window.location.pathname })}
                  className="py-3.5 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {activeCity.name} Unit</span>
                </LocalizedA>

                <LocalizedA
                  href="sms:+17542616528"
                  className="py-3 px-4 bg-slate-800 text-slate-100 font-bold text-xs sm:text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Text Location</span>
                </LocalizedA>
              </div>

              {/* View Full City Page */}
              <button
                onClick={() => handleOpenCityPage(activeCity.slug)}
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer group min-h-[42px]"
              >
                <span>View {activeCity.name} Locksmith Page</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* City Selector Corridor Radar (order-2 on mobile, order-1 on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4">
          
          <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-bold">Tap Your City to Select</span>
            </div>
            <span className="text-amber-400 font-bold text-[11px] uppercase tracking-wider">
              {visibleCities.length} Cities
            </span>
          </div>

          {/* Quick-Scroll City Chip Grid */}
          <div className="flex flex-wrap gap-1.5 max-h-[300px] lg:max-h-none overflow-y-auto pr-1">
            {visibleCities.map((city) => {
              const isSelected = activeCity.id === city.id;
              return (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px] ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md scale-[1.02] ring-2 ring-amber-400'
                      : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950 fill-current' : 'text-amber-400'}`} />
                  <span>{city.name}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-400 pt-1">
            Don't see your specific neighborhood? We cover all 37 municipalities in Broward, Miami-Dade, and Palm Beach counties.
          </p>
        </div>

      </div>
    </div>
  );
}
export default SouthFloridaMap;
