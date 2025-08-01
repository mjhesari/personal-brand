export interface Address {
  zip: string;
  city: string;
  title: string;
  region: string;
  address: string;
  borough: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Link {
  url: string;
  type: string;
  title: string;
}

export interface Business {
  end: string;
  type: string;
  start: string;
  businessId: string;
}

export type PersonTypes = {
  id: string;
  publicId: string;
  slug: string;
  firstName: string;
  lastName: string;
  personNumber: string;
  passportNumber: string;
  firstNameLatin: string;
  lastNameLatin: string;
  birthDay: string;
  birthPlace: string;
  birthCountry: string;
  gender: string;
  phone: string[]; // Encoded JSON string, needs decoding
  mail: string[];  // Encoded JSON string, needs decoding
  address: Address[];
  photo: string;
  media: string[]; // Encoded JSON string, needs decoding
  tags: string[];
  links: Link[];
  business: Business[];
  claimed: boolean;
  status: string;
  date: string;
  version: string;
  authorId: string;
} | null;

export interface Details {
  count: number;
}

export interface ApiResponse {
  data: PersonTypes[];
  details: Details;
}

export interface MultiLangText {
  en: string;
  fa: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  logo: string;
  about: MultiLangText; 
  image: string;
  experiences: Experience[];
  projects: Project[];
  links: SocialLink[];
}

interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  start: string; // Format: YYYY-MM-DD
  end: string;   // Format: YYYY-MM-DD or "Present"
}

interface Project {
  id: string;
  name: string;
  mainImage: string;
  url: string;
}

interface SocialLink {
  id: string;
  name:string // restrict to known platforms
  icon: string;
  url: string;
}
