import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import Title from "./Title";
import { Person } from "@/types/person";

export default function AboutPerson({
  personData,
  dicts,
}: {
  personData: Person;
  dicts: DictsTypes;
}) {
  const lang = dicts.lang as keyof typeof personData.about;
  const aboutText = personData.about?.[lang] ?? "";

  return (
    <div className="mt-14 md:mt-20" id="about">
      <Title text={dicts.about.title} />
      <div className="bg-content1 p-5 sm:p-6 md:p-8 shadow-sm rounded-2xl">
        <p className="leading-7 md:leading-8 text-sm sm:text-base">{aboutText}</p>
      </div>
    </div>
  );
}
