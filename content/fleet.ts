import type { Vehicle, VehicleCategory } from '@/types/content';

export const fleetCategories: Array<{ value: 'all' | VehicleCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'economy', label: 'Economy' },
  { value: 'family', label: 'Family' },
  { value: 'suv', label: 'SUV' },
  { value: 'premium', label: 'Premium' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'group', label: 'Group' },
];

export const fleet: Vehicle[] = [
  { id: 'economy-city', slug: 'economy-city', name: 'Economy City', examples: 'Contoh kelas: Brio, Agya, Ayla', category: 'economy', seats: 'Hingga 4', chauffeurAvailable: true, selfDriveAvailable: true, priceMode: 'quote', image: '/images/editorial/fleet-premium-mobility.webp', recommendedFor: ['Daily', 'City'], isFeatured: false },
  { id: 'family-comfort', slug: 'family-comfort', name: 'Family Comfort', examples: 'Contoh kelas: Innova Reborn, Zenix', category: 'family', seats: 'Hingga 7', chauffeurAvailable: true, selfDriveAvailable: true, priceMode: 'quote', image: '/images/editorial/destination-west-java.webp', recommendedFor: ['Vacation', 'Family'], isFeatured: true },
  { id: 'suv-journey', slug: 'suv-journey', name: 'SUV Journey', examples: 'Contoh kelas: Fortuner, Pajero Sport', category: 'suv', seats: 'Hingga 7', chauffeurAvailable: true, selfDriveAvailable: false, priceMode: 'quote', image: '/images/editorial/fleet-premium-mobility.webp', recommendedFor: ['Intercity', 'Business'], isFeatured: true },
  { id: 'premium-executive', slug: 'premium-executive', name: 'Premium Executive', examples: 'Contoh kelas: Camry, Alphard, Vellfire', category: 'premium', seats: 'Hingga 6', chauffeurAvailable: true, selfDriveAvailable: false, priceMode: 'quote', image: '/images/editorial/fleet-premium-mobility.webp', recommendedFor: ['Executive', 'Airport'], isFeatured: true },
  { id: 'signature-luxury', slug: 'signature-luxury', name: 'Signature Luxury', examples: 'Contoh kelas: Mercedes-Benz, BMW, Lexus', category: 'luxury', seats: 'Hingga 4', chauffeurAvailable: true, selfDriveAvailable: false, priceMode: 'quote', image: '/images/editorial/service-wedding.webp', recommendedFor: ['Wedding', 'VIP'], isFeatured: true },
  { id: 'group-mobility', slug: 'group-mobility', name: 'Group Mobility', examples: 'Contoh kelas: Hiace, Elf, Bus', category: 'group', seats: '10+ penumpang', chauffeurAvailable: true, selfDriveAvailable: false, priceMode: 'quote', image: '/images/editorial/destination-west-java.webp', recommendedFor: ['Group', 'Outing'], isFeatured: true },
];
