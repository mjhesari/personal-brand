import Hero from "@/components/about/Hero";
import About from "@/components/about/AboutPerson";
import Experiences from "@/components/about/Experiences";
import FeaturedProjects from "@/components/about/FeaturedProjects";
import Contanct from "@/components/about/Contanct";
import person from "@/config/John-doe-person.json"
import { Person } from "@/types/person";
import { PERSONS } from "@/utils/data";
import { getDictionary, langsType } from "./dictionaries/dictionaries";

export default async function Page({params}:{params:Promise<{lang:langsType}>}) {
  const dicts = await getDictionary((await params)?.lang);
  const personalData:Person =PERSONS["mj-hesari"]
  return (
    <div>
      <Hero personData={personalData}/>
      <About personData={personalData} dicts={dicts}/>
      <Experiences personData={personalData} dicts={dicts}/>
      <FeaturedProjects personData={personalData} dicts={dicts}/>
      <Contanct personData={personalData} dicts={dicts}/>
    </div>
  );
}
