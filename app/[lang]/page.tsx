// import Experiences from "@/components/layout/about/Experiences";
// import FeaturedProjects from "@/components/layout/about/FeaturedProjects";
import { getDictionary, langsType } from "./dictionaries/dictionaries";
import HeroSection from "@/components/layout/hero/Hero";
import ContactSection from "@/components/layout/contact/ContactSection";
import AboutSection from "@/components/layout/about/AboutSection";


export default async function Page({ params }: { params: { lang: langsType } }) {
  const dicts = await getDictionary(params?.lang);
  return (
    <main className="max-w-[1100px] mx-auto pt-4 md:pt-16 px-3 md:px-6 " suppressHydrationWarning>
      <HeroSection dicts={dicts}/>
      <AboutSection dicts={dicts}/>
      {/* <Experiences personData={jsonPerson.pr001}/>
      <FeaturedProjects personData={jsonPerson.pr001}/> */}
      <ContactSection dicts={dicts}/>
    </main>
  );
}
