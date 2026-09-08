export type ResponsiveCopy = {
  desktop: string;
  mobile: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  copy: ResponsiveCopy;
  highlights: string[];
  icon: 'calendar' | 'plane' | 'map' | 'clock' | 'briefcase' | 'sparkles' | 'users';
};

export type VehicleCategory =
  | 'economy'
  | 'regular'
  | 'family'
  | 'suv'
  | 'premium'
  | 'luxury'
  | 'group';

export type Vehicle = {
  id: string;
  slug: string;
  name: string;
  examples: string;
  category: VehicleCategory;
  seats: string;
  chauffeurAvailable: boolean;
  selfDriveAvailable: boolean;
  priceMode: 'quote';
  image: string;
  recommendedFor: string[];
  isFeatured: boolean;
};

export type TravelPackage = {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  includes: string[];
  image: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  copy: ResponsiveCopy;
  highlights: string[];
  image: string;
  recommendedVehicles: string[];
};
