import type { Metadata } from 'next';
import Hero from '@/components/about/Hero';
import About from '@/components/about/AboutPerson';
import Experiences from '@/components/about/Experiences';
import FeaturedProjects from '@/components/about/FeaturedProjects';
import Contanct from '@/components/about/Contanct';
import { Person } from '@/types/person';
import { PERSONS } from '@/utils/data';
import { getDictionary, langsType } from './dictionaries/dictionaries';
import { siteMeta } from '@/config/site-meta';

type PageProps = {
  params: Promise<{ lang: langsType }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dicts = await getDictionary(lang);
  const person = PERSONS['mj-hesari'];
  const title = dicts.meta?.title ?? `${person.firstName} ${person.lastName}`;
  const description =
    dicts.meta?.description ??
    (person.about?.[lang as keyof typeof person.about] as string) ??
    '';
  const keywords = dicts.meta?.keywords?.split(',').map((item) => item.trim());
  const canonical = `/${lang}`;
  const ogLocale =
    siteMeta.localeMap[lang as keyof typeof siteMeta.localeMap] ?? 'en_US';

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: '/en',
        fa: '/fa',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: canonical,
      siteName: siteMeta.name,
      title,
      description,
      images: [
        {
          url: person.image,
          width: 1200,
          height: 630,
          alt: `${person.firstName} ${person.lastName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [person.image],
      creator: siteMeta.twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dicts = await getDictionary(lang);
  const personalData: Person = PERSONS['mj-hesari'];

  return (
    <div>
      <Hero personData={personalData} dicts={dicts} />
      <About personData={personalData} dicts={dicts} />
      <Experiences personData={personalData} dicts={dicts} />
      <FeaturedProjects personData={personalData} dicts={dicts} />
      <Contanct personData={personalData} dicts={dicts} />
    </div>
  );
}
