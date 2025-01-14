import { langsType } from "@/app/[lang]/dictionaries/dictionaries";
// Import types

export const dayOfWeekPersian = {
  saturday: "شنبه",
  sunday: "یکشنبه",
  monday: "دوشنبه",
  tuesday: "سه‌شنبه",
  wednesday: "چهارشنبه",
  thursday: "پنجشنبه",
  friday: "جمعه",
};

//* Menu items (Arranged)
export const menuItems = [
  {
    label: "contact",
    href: "#contact",
  },
  {
    label: "exprience",
    href: "#exprience",
  },
  {
    label: "featuredProjects",
    href: "#featuredprojects",
  },
  {
    label: "about",
    href: "#about",
  },
];
type outputLocationDetailsT = { tr: { [key: string]: string } } | null;


const fetchLocationDetail = async (url: string): Promise<outputLocationDetailsT> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      console.error(`Error fetching data from ${url}: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error occurred while fetching ${url}: ${error}`);
    return null;
  }
};

import { BusinessPersonTypes } from "@/types/types";
//*LocalBusiness schema
export const generatePersonBusinessSchema = async (
  data: BusinessPersonTypes,
  lang: langsType
  ) => {
    const businessConfig = data.siteData;
  const siteConfig = data?.siteConfig ;
  // URLs for API requests
  const countryUrl = businessConfig?.country ? `https://region.contentapi.io/api/country/${businessConfig?.country??""}` : "";
  const provinceUrl = businessConfig?.region ? `https://region.contentapi.io/api/province/${businessConfig?.region??""}`:"";
  const cityUrl = businessConfig?.city ? `https://region.contentapi.io/api/city/${businessConfig?.city}`:"";

  // Fetch location details
  const countryData = await fetchLocationDetail(countryUrl);
  const provinceData = await fetchLocationDetail(provinceUrl);
  const cityData = await fetchLocationDetail(cityUrl);
  const openingHoursSpecification = Object.keys(businessConfig?.workTime||{}).map(weekDay => {
    const open = businessConfig?.workTime?.[weekDay as keyof typeof businessConfig.workTime]?.[0]?.open;
    const close = businessConfig?.workTime?.[weekDay as keyof typeof businessConfig.workTime]?.[0]?.close;
    return ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekDay ?? "",
      opens: `${open?.hour??0}:${String(open?.minute??0).padStart(2, '0')}:00`,
      closes: `${close?.hour??0}:${String(close?.minute??0).padStart(2, '0')}:00`,
    });
  } ) ??""

  const commonData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    url: `https://${siteConfig?.domain}`,
    logo: businessConfig?.logo?.[0]?.url ?? "",
    sameAs: businessConfig?.links?.map((link) => link?.longUrl) ?? "",
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig?.geo?.split(",")[0] || "",
      longitude: businessConfig?.geo?.split(",")[1] || "",
    },
    foundingLocation: businessConfig?.foundingLocation ?? "",
    foundingDate: businessConfig?.foundingDate ?? "",
    numberOfEmployees: businessConfig?.employeeCount ?? "",
    image: businessConfig?.image ?? "",
  };

  const languageSpecificData = {
    name:
      siteConfig?.siteName?.["en" as keyof typeof siteConfig.title]??'Local Business',
    description:
    siteConfig?.description?.['en' as keyof typeof siteConfig.description] ?? "Business Description",
    slogan: businessConfig?.slogan?.['en' as keyof typeof businessConfig.slogan] ?? "Business Slogan",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig?.address ?? "",
      addressLocality: cityData?.tr?.en ?? "city name",
      postalCode: businessConfig?.zip ?? "",
      addressRegion: provinceData?.tr?.en ?? "region name",
      addressCountry: countryData?.tr?.en ?? "country name",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessConfig?.phone?.map((phone) => phone?.value ?? "") ?? "",
      contactType: "Customer Service" ,
      areaServed: siteConfig?.locale ?? "",
      availableLanguage: lang || "en",
      email: businessConfig?.mail?.map((mail) => mail?.value ?? ""),
    },
    openingHoursSpecification :openingHoursSpecification ?? "",
  };

  return { ...commonData, ...languageSpecificData };
};
