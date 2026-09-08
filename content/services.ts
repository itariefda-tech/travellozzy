import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'event',
    name: 'TRAVELOZY Event',
    shortName: 'Event',
    copy: {
      desktop: 'Wedding, engagement, graduation, anniversary, hingga corporate event dengan perjalanan yang tertata.',
      mobile: 'Wedding, wisuda & special moments.',
    },
    highlights: ['Wedding', 'Graduation', 'Corporate Event'],
    icon: 'calendar',
  },
  {
    slug: 'vacation',
    name: 'TRAVELOZY Vacation',
    shortName: 'Vacation',
    copy: {
      desktop: 'Perjalanan keluarga, pasangan, dan sahabat ke Bandung, Puncak, Bogor, Anyer, dan beyond.',
      mobile: 'Liburan keluarga & luar kota.',
    },
    highlights: ['Bandung', 'Puncak', 'Family Trip'],
    icon: 'map',
  },
  {
    slug: 'transfer',
    name: 'TRAVELOZY Transfer',
    shortName: 'Transfer',
    copy: {
      desktop: 'Airport, hotel, station, dan point-to-point transfer yang sederhana dan terencana.',
      mobile: 'Airport & point-to-point.',
    },
    highlights: ['Airport', 'Hotel', 'Whoosh'],
    icon: 'plane',
  },
  {
    slug: 'daily',
    name: 'TRAVELOZY Daily',
    shortName: 'Daily',
    copy: {
      desktop: 'Mobilitas fleksibel untuk aktivitas keluarga, meeting, kunjungan, atau kebutuhan mendadak.',
      mobile: 'Harian & kebutuhan mendadak.',
    },
    highlights: ['4–24 Hours', 'Weekly', 'Monthly'],
    icon: 'clock',
  },
  {
    slug: 'business',
    name: 'TRAVELOZY Business',
    shortName: 'Business',
    copy: {
      desktop: 'Executive transport, guest pickup, operational vehicle, dan roadshow untuk kebutuhan profesional.',
      mobile: 'Executive & corporate.',
    },
    highlights: ['Executive', 'Guest', 'Roadshow'],
    icon: 'briefcase',
  },
  {
    slug: 'luxury',
    name: 'TRAVELOZY Luxury',
    shortName: 'Luxury',
    copy: {
      desktop: 'Premium car dan professional chauffeur untuk momen ketika perjalanan biasa belum cukup.',
      mobile: 'Premium & VIP ride.',
    },
    highlights: ['VIP', 'Chauffeur', 'Special Occasion'],
    icon: 'sparkles',
  },
  {
    slug: 'group',
    name: 'TRAVELOZY Group',
    shortName: 'Group',
    copy: {
      desktop: 'Pilihan kelas Hiace, Elf, hingga bus untuk outing, gathering, wedding guest, dan group vacation.',
      mobile: 'Rombongan & group trip.',
    },
    highlights: ['Family Gathering', 'Outing', 'Group Transfer'],
    icon: 'users',
  },
];
