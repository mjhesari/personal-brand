//* LocalBusiness Data Types
export interface SiteData {
    id: string;
    publicId: string;
    slug: string;
    name: {
      [key: string]: string;
    };
    slogan: {
      [key: string]: string;
    };
    businessModel: string;
    description: {
      [key: string]: string;
    };
    type:
      | string[]
      | {
          [key: string]: string;
        }[];
    industry:
      | string[]
      | {
          [key: string]: string;
        }[];
    tags:
      | string[]
      | {
          [key: string]: string;
        }[];
    address: string;
    borough: string;
    zip: string;
    city: string;
    region: string;
    country: string;
    phone?: {
      title: string;
      value: string;
    }[];
    mail?: {
      title: string;
      value: string;
    }[];
    workTime: WorkTime;
    logo: Logo[];
    media: Media[];
    color: Color[];
    links: Link[];
    foundingLocation: string;
    foundingDate: string;
    employeeCount: string;
    image: string;
    parentId: string | null;
    relatedBusinessId: string[];
    attributes: string[];
    claimed: boolean;
    status: string;
    date: string;
    version: string;
    authorId: string;
    geo: string;
  }
  
  interface WorkTime {
    friday: WorkTimeSlot[];
    monday: WorkTimeSlot[];
    sunday: WorkTimeSlot[];
    tuesday: WorkTimeSlot[];
    saturday: WorkTimeSlot[];
    thursday: WorkTimeSlot[];
    wednesday: WorkTimeSlot[];
  }
  
  interface WorkTimeSlot {
    open: Time;
    close: Time;
  }
  
  interface Time {
    hour: number;
    minute: number;
  }
  
  interface Logo {
    url: string;
    type: string;
  }
  
  interface Media {
    src: string;
    type: string;
    title: string;
    private: boolean;
    position: string;
  }
  
  interface Color {
    hex: string;
    type: string;
  }
  
  interface Link {
    url: string;
    type: string;
    title:{
      [key: string]: string;
    } ;
    longUrl:string
  }
  
 export interface SiteConfig {
    id: string;
    users: string[] | null;
    domain: string;
    lang: string;
    dir: string;
    type: string;
    defaultLanguage: string;
    theme: string;
    color: string;
    tag: string[];
    headScript: string;
    bodyScript: string;
    specificData?: SpecificData;
    multiLang: boolean;
    claimed: boolean;
    status: string;
    icon: string;
    date: string;
    version: string;
    authorId: string;
    title: {
      [key: string]: string;
    };
    description:{
      [key: string]: string;
    };
    siteName:{
      [key: string]: string;
    };
    image: string;
    video: string | null;
    audio: string | null;
    locale: string;
    authorName: string;
    googleVerification: string;
    yahooVerification: string | null;
    bingVerification: string | null;
    yandexVerification: string | null;
  }
  
  interface SpecificData {
    pardis: {
      description: {
        en: string;
      };
    };
    businessId: string;
  }
  
  export interface BusinessPersonTypes {
    siteData: SiteData | null;
    siteConfig: SiteConfig | null;
  }
  export interface DataGetterProps {
    personData: BusinessPersonTypes | null;
  }
  