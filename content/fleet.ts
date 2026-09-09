import type { Vehicle, VehicleCategory } from '@/types/content';

export const fleetCategories: Array<{ value: 'all' | VehicleCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'premium', label: 'Premium' },
  { value: 'family', label: 'Family' },
  { value: 'suv', label: 'SUV' },
  { value: 'group', label: 'Group' },
];

export const fleet: Vehicle[] = [
  { id: 'mercedes-benz-c300', slug: 'mercedes-benz-c300', brand: 'Mercedes-Benz', model: 'C300', name: 'Mercedes-Benz C300', category: 'luxury', priceMode: 'quote', image: '/images/editorial/service-wedding.webp', recommendedFor: ['Wedding', 'Luxury', 'Corporate'], isFeatured: true },
  { id: 'toyota-alphard-gen-4-hybrid', slug: 'toyota-alphard-gen-4-hybrid', brand: 'Toyota', model: 'Alphard Gen 4 Hybrid', name: 'Toyota Alphard Gen 4 Hybrid', category: 'premium', priceMode: 'quote', image: '/images/fleet/toyota-alphard-gen-4-hybrid.webp', imageAlt: 'Toyota Alphard Gen 4 Hybrid', recommendedFor: ['Wedding', 'Luxury', 'Corporate'], isFeatured: true },
  { id: 'toyota-voxy-facelift', slug: 'toyota-voxy-facelift', brand: 'Toyota', model: 'Voxy Facelift', name: 'Toyota Voxy Facelift', category: 'premium', priceMode: 'quote', image: '/images/fleet/toyota-voxy-facelift.webp', imageAlt: 'Toyota Voxy Facelift', recommendedFor: ['Wedding', 'Luxury', 'Corporate'], isFeatured: false },
  { id: 'denza', slug: 'denza', brand: 'Denza', model: '', name: 'Denza', category: 'premium', priceMode: 'quote', image: '/images/fleet/denza.webp', imageAlt: 'Denza', recommendedFor: ['Wedding', 'Luxury', 'Corporate'], isFeatured: true },
  { id: 'toyota-hiace-premio', slug: 'toyota-hiace-premio', brand: 'Toyota', model: 'Hiace Premio', name: 'Toyota Hiace Premio', category: 'group', priceMode: 'quote', image: '/images/fleet/toyota-hiace-premio.webp', imageAlt: 'Toyota Hiace Premio', recommendedFor: ['Group'], isFeatured: true },
  { id: 'toyota-hiace', slug: 'toyota-hiace', brand: 'Toyota', model: 'Hiace', name: 'Toyota Hiace', category: 'group', priceMode: 'quote', image: '/images/fleet/toyota-hiace.webp', imageAlt: 'Toyota Hiace', recommendedFor: ['Group'], isFeatured: false },
  { id: 'toyota-hiace-premio-14-seat', slug: 'toyota-hiace-premio-14-seat', brand: 'Toyota', model: 'Hiace Premio 14 Seat', name: 'Toyota Hiace Premio 14 Seat', category: 'group', priceMode: 'quote', image: '/images/fleet/toyota-hiace-premio-14-seat.webp', imageAlt: 'Toyota Hiace Premio 14 Seat', recommendedFor: ['Group'], isFeatured: false },
  { id: 'toyota-innova-zenix-q', slug: 'toyota-innova-zenix-q', brand: 'Toyota', model: 'Innova Zenix Q', name: 'Toyota Innova Zenix Q', category: 'family', priceMode: 'quote', image: '/images/editorial/fleet-premium-mobility.webp', recommendedFor: ['Vacation', 'Family', 'Corporate'], isFeatured: true },
  { id: 'toyota-innova-zenix-g-hybrid', slug: 'toyota-innova-zenix-g-hybrid', brand: 'Toyota', model: 'Innova Zenix G Hybrid', name: 'Toyota Innova Zenix G Hybrid', category: 'family', priceMode: 'quote', image: '/images/fleet/toyota-innova-zenix-g-hybrid.webp', imageAlt: 'Toyota Innova Zenix G Hybrid', recommendedFor: ['Vacation', 'Family'], isFeatured: false },
  { id: 'toyota-innova-reborn', slug: 'toyota-innova-reborn', brand: 'Toyota', model: 'Innova Reborn', name: 'Toyota Innova Reborn', category: 'family', priceMode: 'quote', image: '/images/fleet/toyota-innova-reborn.webp', imageAlt: 'Toyota Innova Reborn', recommendedFor: ['Vacation', 'Family'], isFeatured: false },
  { id: 'hyundai-stargazer', slug: 'hyundai-stargazer', brand: 'Hyundai', model: 'Stargazer', name: 'Hyundai Stargazer', category: 'family', priceMode: 'quote', image: '/images/fleet/hyundai-stargazer.webp', imageAlt: 'Hyundai Stargazer', recommendedFor: ['Vacation', 'Family'], isFeatured: false },
  { id: 'mitsubishi-xpander', slug: 'mitsubishi-xpander', brand: 'Mitsubishi', model: 'Xpander', name: 'Mitsubishi Xpander', category: 'family', priceMode: 'quote', image: '/images/fleet/mitsubishi-xpander.webp', imageAlt: 'Mitsubishi Xpander', recommendedFor: ['Vacation', 'Family'], isFeatured: true },
  { id: 'toyota-veloz', slug: 'toyota-veloz', brand: 'Toyota', model: 'Veloz', name: 'Toyota Veloz', category: 'family', priceMode: 'quote', image: '/images/editorial/fleet-premium-mobility.webp', recommendedFor: ['Vacation', 'Family'], isFeatured: false },
  { id: 'toyota-avanza-new', slug: 'toyota-avanza-new', brand: 'Toyota', model: 'Avanza New', name: 'Toyota Avanza New', category: 'family', priceMode: 'quote', image: '/images/fleet/toyota-avanza-new.webp', imageAlt: 'Toyota Avanza New', recommendedFor: ['Vacation', 'Family'], isFeatured: true },
  { id: 'suzuki-xl7', slug: 'suzuki-xl7', brand: 'Suzuki', model: 'XL7', name: 'Suzuki XL7', category: 'family', priceMode: 'quote', image: '/images/fleet/suzuki-xl7.webp', imageAlt: 'Suzuki XL7', recommendedFor: ['Vacation', 'Family'], isFeatured: false },
  { id: 'toyota-fortuner-gr', slug: 'toyota-fortuner-gr', brand: 'Toyota', model: 'Fortuner GR', name: 'Toyota Fortuner GR', category: 'suv', priceMode: 'quote', image: '/images/fleet/toyota-fortuner-gr.webp', imageAlt: 'Toyota Fortuner GR', recommendedFor: ['SUV', 'Outstation'], isFeatured: true },
  { id: 'mitsubishi-pajero-sport', slug: 'mitsubishi-pajero-sport', brand: 'Mitsubishi', model: 'Pajero Sport', name: 'Mitsubishi Pajero Sport', category: 'suv', priceMode: 'quote', image: '/images/fleet/mitsubishi-pajero-sport.webp', imageAlt: 'Mitsubishi Pajero Sport', recommendedFor: ['SUV', 'Outstation'], isFeatured: true },
  { id: 'toyota-rush-gr', slug: 'toyota-rush-gr', brand: 'Toyota', model: 'Rush GR', name: 'Toyota Rush GR', category: 'suv', priceMode: 'quote', image: '/images/fleet/toyota-rush-gr.webp', imageAlt: 'Toyota Rush GR', recommendedFor: ['SUV', 'Outstation'], isFeatured: false },
];

export const featuredFleetSlugs = [
  'toyota-alphard-gen-4-hybrid',
  'denza',
  'toyota-innova-zenix-q',
  'toyota-hiace-premio',
  'mercedes-benz-c300',
  'toyota-fortuner-gr',
  'mitsubishi-pajero-sport',
  'mitsubishi-xpander',
  'toyota-avanza-new',
] as const;
