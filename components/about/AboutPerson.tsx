import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import Title from "./Title";
import { Person } from "@/types/person";

export default function AboutPerson({ personData, dicts }: { personData: Person, dicts: DictsTypes }) {
  const formattedAbout = personData.about?.[dicts.lang as keyof typeof personData.about]
    ? personData.about[dicts.lang as keyof typeof personData.about].replace(/\n/g, "<br />") // Replace newlines with <br />
    : "";
  return (
    <div className="mt-20" id="#about">
      <Title text="About Me" />
      <div className="bg-background p-8 shadow-sm rounded-2xl">
        <p>{formattedAbout}</p>
      </div>
    </div>
  );
}
