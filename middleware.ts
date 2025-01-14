import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const locales = ['en', 'fa'];

// Get the preferred locale based on the Accept-Language header
function getLocale(request: NextRequest, defaultLanguage: string | undefined): string {
  if (defaultLanguage && locales.includes(defaultLanguage)) {
    return defaultLanguage;
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map((lang) => lang.split(';')[0].trim());

    for (const preferredLocale of preferredLocales) {
      if (locales.includes(preferredLocale)) {
        return preferredLocale;
      }
    }
  }

  return 'en'; 
}
async function fetchSiteData(apiUrl: string, token: string): Promise<any> {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch site data: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching site data:', error);
    return null;
  }
}
export async function  middleware(request: NextRequest) {
  const hostname = headers().get("x-forwarded-host");
  const domain = hostname?.includes("localhost") ? process.env.DOMAIN_LOCAL : hostname;
  const apiUrl = `https://apps.contentapi.io/api/site/${domain}`;
  const token = process.env.TOKEN ?? "";
  const data = await fetchSiteData(apiUrl, token);
  // Check if the pathname already includes a locale
  
  if (data?.siteConfig?.multiLang) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
      return NextResponse.next();
    }

    const staticPaths = [
      '/_next',
      '/images',
      '/fonts',
      '/assets',
      '/icons',
      '/patterns',
    ];

    if (staticPaths.some((path) => pathname.startsWith(path))) {
      return NextResponse.next();
    }

    const locale = getLocale(request, data?.siteConfig?.defaultLanguage);

    const redirectUrl = new URL(`/${locale}${pathname}`, request.nextUrl);
    return NextResponse.redirect(redirectUrl);
  } else {
    const locale = getLocale(request, data?.siteConfig?.defaultLanguage);
    
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      const redirectUrl = new URL(`/${locale}${pathname}`, request.nextUrl);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }
};

export const config = {
  matcher: ['/((?!_next|api|images|fonts|assets|icons|patterns).*)'],
};