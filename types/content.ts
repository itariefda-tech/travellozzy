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
  | 'family'
  | 'suv'
  | 'premium'
  | 'luxury'
  | 'group';

export type Vehicle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  name: string;
  category: VehicleCategory;
  priceMode: 'quote';
  image: string;
  imageAlt?: string;
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
