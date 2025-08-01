import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const locales = ["en", "fa"]; // Supported locales

// Get the preferred locale based on the Accept-Language header
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return "en"; // Default locale

  const preferredLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim());
  
  // Match preferred locale with supported locales
  for (const preferredLocale of preferredLocales) {
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  return "en"; // Default locale if none match
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;  

  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next(); // No redirection needed
  }

  // Exclude paths for static assets (images, fonts, etc.)
  const staticPaths = [
    "/_next",  // Next.js internal paths
    "/favicon.ico", // Favicon
    "/images", // Example static folder for images
    "/fonts",   // Example static folder for fonts
    "/assets",  // Any other static folder you have
  ];

  // Skip locale check for these static paths
  if (staticPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Determine the preferred locale
  const locale = getLocale(request);

  // Redirect to the pathname with the preferred locale
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);


  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Match all paths except internal ones like _next, assets, etc.
    "/((?!_next|api|favicon.ico|images|fonts|assets).*)", // exclude assets from middleware
  ],
};
