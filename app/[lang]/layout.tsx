import "./globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { DesktopNavbar } from "@/components/layout/navbar/DesktopNavbar";
import { Metadata } from "next";
import { headers } from "next/headers";
import { getDictionary, langsType } from "./dictionaries/dictionaries";
import { BusinessPersonTypes } from "@/types/types";
import { generatePersonBusinessSchema } from "@/data/data";

//* Local fonts
const yekanBakh = localFont({
  src: "./fonts/YekanBakh-VF.woff2",
  display: "swap",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
// Metadata configuration
export async function generateMetadata({
  params,
}: {
  params: { lang: langsType };
}): Promise<Metadata> {
  const { data, domain } = await LocalPersonData();
  const businessConfig = data?.siteData;
  const siteConfig = data?.siteConfig;
  const { lang } = params;
  // Update manifest
  // await manifestGenerator(data, domain ?? "");

  return {
    title: siteConfig?.title?.[lang] ?? `${domain}`,
    description:
      siteConfig?.description?.[lang] ??
      "Website maker for every businesses in the iran",
    keywords:
      businessConfig?.tags?.map((e) =>
        typeof e === "string" ? e : (e?.[lang] ?? "")
      ) ?? [],

    robots: "index, follow",
    generator: "Pazh",
    creator: "Pazh",
    publisher: "Pazh",
    // manifest: `/${domain?.split(".").join("-")}.json`,
    icons: siteConfig?.icon ?? "",
    verification: {
      google: siteConfig?.googleVerification ?? "",
      yahoo: siteConfig?.yahooVerification ?? "",
      yandex: siteConfig?.yandexVerification ?? "",
      me: siteConfig?.bingVerification ?? "",
    },
    appleWebApp: {
      capable: true,
      title: `${siteConfig?.title?.[lang] ?? "Local business"}`,
      startupImage: siteConfig?.image ?? "",
      statusBarStyle: "default",
    },
    openGraph: {
      title: siteConfig?.title?.[lang] ?? "",
      description:
        siteConfig?.description?.[lang] ??
        "Website maker for every businesses in the iran",
      images: siteConfig?.image ?? "",
    },
    twitter: {
      title: `${siteConfig?.title?.[lang] ?? "Local business"}`,
      description:
        siteConfig?.description?.[lang] ??
        "Website maker for every businesses in the iran",
      images: siteConfig?.image ?? "",
    },
    metadataBase: new URL(`https://${domain}`),
    alternates: {
      canonical: "/",
      languages: {
        en: `https://${domain}/en`,
        fa: `https://${domain}/fa`,
        ar: `https://${domain}/ar`,
      },
    },
  };
}
//* Local business script
const LocalPersonData = async () => {
  const hostname = headers().get("x-forwarded-host");
  const domain = !hostname?.includes("localhost")
    ? hostname
    : process.env.DOMAIN_LOCAL;
  try {
    const data: BusinessPersonTypes = await fetch(
      `https://apps.contentapi.io/api/site/${domain}`,
      {
        headers: { Authorization: `Bearer ${process.env.TOKEN}` },
        cache: "force-cache",
      }
    )
      .then((response) => response.json())
      .then((data) => data);

    return {
      data,
      domain,
    };
  } catch (error) {
    console.error("Error fetching LocalBusinessData:", error);
    return { data: { siteData: null, siteConfig: null }, domain };
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: langsType } }>) {
  const { data } = await LocalPersonData();
  const isMultiLang = data?.siteConfig?.multiLang ?? false;
  const defaultLanguage =
    (data?.siteConfig?.defaultLanguage as langsType) ?? "en";
  const dicts = await getDictionary(
    isMultiLang ? params.lang : defaultLanguage
  );
  const font = dicts.dir === "rtl" ? yekanBakh.className : roboto.className;
  const PersonBusinessSchema = await generatePersonBusinessSchema(
    data,
    params?.lang
  );

  return (
    <html lang={dicts.lang} dir={dicts.dir} className={`bg-[#F3F2F7] ${font}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PersonBusinessSchema),
          }}
          defer
        />
      </head>
      <body className={clsx("min-h-screen relative")}>
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "light" }}
          personData={data}
        >
          <DesktopNavbar dicts={dicts} />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
