import "@/styles/globals.css";
import "@/styles/app.css";
import clsx from "clsx";
import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import manifestGenerator from "@/public/manifest";
import Image from "next/image";

// // Metadata configuration
// export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
//   const { data, domain } = await LocalPersonData();
//   const siteData = data?.siteData || {};
//   const lang: 'fa' | 'en' = data?.siteConfig?.lang ?? 'fa';

//   // Update manifest
//   // await manifestGenerator(data, domain ?? '');

//   return {
//     title: `
//       ${siteData?.name?.[lang] ?? 'web application'}
//       ${siteData?.name?.[lang] ? '|' : ''} 
//       ${siteData?.slogan?.[lang] ?? ''}
//     `,
//     description: siteData?.name?.[lang] ?? 'Website maker for every businesses in the iran',
//     keywords: siteData?.tags?.map((tag: { en: string; fa: string }) => tag?.[lang]) || [''],
//     robots: 'index, follow',
//     generator: 'Pazh',
//     creator: 'Pazh',
//     publisher: 'Pazh',
//     manifest: `/${domain?.split('.').join('-')}.json`,
//     icons: data?.siteConfig?.icon ?? '/pazh-local-logo.png',
//     verification: {
//       google: '',
//       yahoo: '',
//       yandex: '',
//       me: '',
//     },
//     appleWebApp: {
//       capable: true,
//       title: `${siteData?.name?.[lang] ?? 'Local business'} | ${siteData?.slogan?.[lang] ?? ''}`,
//       startupImage: siteData?.image ?? '',
//       statusBarStyle: 'default',
//     },
//     openGraph: {
//       title: `${siteData?.name?.[lang] ?? 'Local business'} | ${siteData?.slogan?.[lang] ?? ''}`,
//       description: siteData?.name?.[lang] ?? 'Website maker for every businesses in the iran',
//       images: siteData?.image ?? '',
//     },
//     twitter: {
//       title: `${siteData?.name?.[lang] ?? 'Local business'} | ${siteData?.slogan?.[lang] ?? ''}`,
//       description: siteData?.name?.[lang] ?? 'Website maker for every businesses in the iran',
//       images: siteData?.image ?? '',
//     },
//     metadataBase: new URL(`https://${domain}`),
//     alternates: {
//       canonical: '/',
//     },
//   };
// }

// //* Local business script
// const LocalPersonData = async () => {
//   const hostname = headers().get('x-forwarded-host')?.split(".")[0];
//   const domain = hostname;
//   try {
//     const data = await fetch(`https://person.contentapi.io/api/person/${domain}`, {
//       headers: { Authorization: `Bearer ${process.env.TOKEN}` },
//     })
//       .then((response) => response.json())
//       .then((data) => data);
//       console.log(data);
      
//     return {
//       data,
//       domain,
//     };
//   } catch {
//     return { data: {}, domain: domain };
//   }
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F3F2F7]" suppressHydrationWarning>
      <head>
        {/* Add custom <head> elements here if needed */}
      </head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-4 md:pt-16 px-3 md:px-6 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center mt-14 py-2">
            <Link
              target="_blank"
              className="flex items-center gap-1 text-current bg-background py-2 px-3 rounded-2xl"
              href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
              title="nextui.org homepage"
            >
              <Image src="https://hesari-storage.s3.ir-tbz-sh1.arvanstorage.ir/MJ%2F3%D8%A7%D8%B5%D9%84%DB%8Cmj.png?versionId=" 
              width={32} height={32} alt="footer" />
              <p className="text-sm font-medium">Powered by MJ-HESARI</p>
            </Link>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
