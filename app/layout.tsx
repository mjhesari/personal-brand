import "./globals.css";
import "./app.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { siteMeta } from "@/config/site-meta";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: "MJ Hesari | Next.js Frontend Developer",
    template: "%s | MJ Hesari",
  },
  description:
    "Frontend developer specializing in Next.js, React, and TypeScript.",
  applicationName: siteMeta.name,
  authors: [{ name: siteMeta.name, url: siteMeta.url }],
  creator: siteMeta.name,
  publisher: siteMeta.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "https://s34.picofile.com/file/8486208242/3%D8%A7%D8%B5%D9%84%DB%8Cmj.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://s34.picofile.com/file/8486208242/3%D8%A7%D8%B5%D9%84%DB%8Cmj.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F2F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background text-foreground font-sans antialiased relative",
          fontSans.variable,
          fontSans.className,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
