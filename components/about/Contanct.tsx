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
    <section className="mt-14 md:mt-20" id="contact">
      <Title text={dicts.contact.title} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-stretch">
        <div className="lg:col-span-3">
          <ContactForm dicts={dicts} />
        </div>
        <div className="lg:col-span-2">
          <ContactAbout dicts={dicts} personData={personData} />
        </div>
      </div>
    </section>
  );
}
