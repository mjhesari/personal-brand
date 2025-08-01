import { Person } from "@/types/person";
import Title from "./Title";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export default function FeaturedProjects({
  personData,
  dicts,
}: {
  personData: Person;
  dicts: DictsTypes;
}) {
  return (
    <div className="mt-20" id="featured-projects">
      <Title text="Featured Projects" />
      <div className="flex flex-wrap gap-6">
        {personData.projects.map((item) => {
          return (
            <div className="w-full md:w-[calc(50%-12px)]">
              <a target="_blank" className="w-full h-[320px]" href={item.url}>
                <img className="w-full h-56 rounded-2xl shadow-md" src={item.mainImage} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
