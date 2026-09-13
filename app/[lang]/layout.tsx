import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { HtmlLang } from "@/components/html-lang";
import { getDictionary, langsType } from "./dictionaries/dictionaries";
import { locales } from "./dictionaries/languages";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: langsType }>;
}) {
  const { lang } = await params;
  const dicts = await getDictionary(lang);

  return (
    <div lang={dicts.lang} dir={dicts.dir}>
      <HtmlLang lang={dicts.lang} dir={dicts.dir} />
      <Navbar dicts={dicts} />
      <main className="container mx-auto max-w-7xl pt-6 md:pt-10 px-4 md:px-6 lg:px-8 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center mt-12 md:mt-16 py-4 px-4">
        <Link
          target="_blank"
          className="flex items-center gap-1 text-current bg-content1 py-2 px-3 rounded-2xl shadow-sm"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <Image
            src="https://hesari-storage.s3.ir-tbz-sh1.arvanstorage.ir/MJ%2F3%D8%A7%D8%B5%D9%84%DB%8Cmj.png?versionId="
            width={32}
            height={32}
            alt="footer"
          />
          <p className="text-sm font-medium">{dicts.footer}</p>
        </Link>
      </footer>
    </div>
  );
}
