import type { TravelPackage } from '@/types/content';

export const packages: TravelPackage[] = [
  { id: 'airport', title: 'Airport Transfer', shortDescription: 'Private pickup atau drop-off untuk perjalanan bandara yang lebih tenang.', category: 'Transfer', includes: ['Vehicle class', 'Driver', 'Pickup coordination'], image: '/images/editorial/fleet-premium-mobility.webp' },
  { id: 'bandung', title: 'Bandung Escape', shortDescription: 'Perjalanan private ke Bandung dengan kendaraan yang sesuai jumlah penumpang.', category: 'Vacation', includes: ['Vehicle class', 'Driver', 'Trip coordination'], image: '/images/editorial/destination-west-java.webp' },
  { id: 'wedding', title: 'Wedding Signature', shortDescription: 'Premium car dan professional chauffeur untuk momen istimewa.', category: 'Event', includes: ['Premium class', 'Professional chauffeur', 'Schedule coordination'], image: '/images/editorial/service-wedding.webp' },
  { id: 'executive', title: 'Executive Day', shortDescription: 'Transportasi premium untuk meeting, guest, dan agenda bisnis.', category: 'Business', includes: ['Executive class', 'Professional chauffeur', 'Flexible itinerary'], image: '/images/editorial/fleet-premium-mobility.webp' },
  { id: 'family', title: 'Family Day Out', shortDescription: 'Pilihan kendaraan nyaman untuk perjalanan bersama keluarga.', category: 'Daily', includes: ['Family class', 'Driver option', 'Trip coordination'], image: '/images/editorial/destination-west-java.webp' },
  { id: 'group', title: 'Group Journey', shortDescription: 'Kelas kendaraan rombongan untuk gathering, event, atau vacation.', category: 'Group', includes: ['Group vehicle class', 'Driver', 'Route coordination'], image: '/images/editorial/destination-west-java.webp' },
];
