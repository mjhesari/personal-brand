import { Person } from "@/types/person";
import ContactAbout from "./ContactAbout";
import ContactForm from "./ContactForm";
import Title from "./Title";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export default function Contanct({
    personData,
    dicts,
  }: {
    personData: Person;
    dicts: DictsTypes;
  }) {
  return (
    <div className="mt-20">
      <Title text="Contact Me" />
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2">
          <ContactAbout />
        </div>
      </div>
    </div>
  );
}
