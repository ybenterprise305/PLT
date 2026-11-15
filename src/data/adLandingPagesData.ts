/** Public route registry for individual advertising pages.
 * Internal keyword research and ad-copy planning belong outside the public website bundle.
 * All 15 /lp/:slug pages remain available; this file intentionally contains no campaign strategy.
 */
export interface AdCampaignConfig { slug: string; serviceId: string; name: string; }
export const AD_CAMPAIGNS: AdCampaignConfig[] = [
  { slug: "car-lockout", serviceId: "automotive-locksmith", name: "Emergency Car Lockouts" },
  { slug: "car-key-replacement", serviceId: "key-replacement", name: "Car Key Replacement & Programming" },
  { slug: "house-lockout", serviceId: "emergency-lockout-service", name: "Emergency House Lockouts" },
  { slug: "lock-rekeying", serviceId: "lock-rekeying", name: "Mobile Lock Rekeying" },
  { slug: "commercial-locksmith", serviceId: "commercial-locksmith", name: "Commercial Locksmith & Access" },
  { slug: "emergency-locksmith", serviceId: "emergency-locksmith-service", name: "24/7 Emergency Mobile Locksmith" },
  { slug: "smart-lock-installation", serviceId: "residential-locksmith", name: "Smart Lock Installation" },
  { slug: "ignition-repair", serviceId: "automotive-locksmith", name: "Ignition Switch & Cylinder Repair" },
  { slug: "broken-key-extraction", serviceId: "emergency-lockout-service", name: "Broken Key Extraction" },
  { slug: "deadbolt-installation", serviceId: "lock-installation", name: "High-Security Deadbolt Installation" },
  { slug: "lock-change", serviceId: "lock-replacement", name: "Lock Replacement & Installation" },
  { slug: "safe-lockout", serviceId: "commercial-locksmith", name: "Safe Lockouts & Opening" },
  { slug: "storage-unit-lockout", serviceId: "commercial-locksmith", name: "Storage Unit Lockouts" },
  { slug: "car-key-fob-programming", serviceId: "automotive-locksmith", name: "Car Key Fob Programming" },
  { slug: "lost-car-keys", serviceId: "key-replacement", name: "Lost Car Key Replacement" },
];
export function getAdCampaignBySlug(slug: string): AdCampaignConfig | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/\/+$/, '').trim();
  const exact = AD_CAMPAIGNS.find(c => c.slug === normalized);
  if (exact) return exact;
  const singular = normalized.endsWith('s') ? normalized.slice(0,-1) : normalized;
  const plural = normalized.endsWith('s') ? normalized : normalized + 's';
  return AD_CAMPAIGNS.find(c => c.slug === singular || c.slug === plural || c.serviceId === normalized || c.serviceId === singular);
}
