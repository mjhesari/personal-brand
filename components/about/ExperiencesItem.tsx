import { Experience } from "@/types/person";

export default function ExperiencesItem({
  experiencItem,
}: {
  experiencItem: Experience;
}) {
  return (
    <div className="w-full items-start sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] bg-content1 shadow-sm border border-default-100 flex justify-between flex-col p-5 sm:p-6 md:p-8 rounded-2xl">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex justify-center items-center bg-default-100 mb-5 md:mb-6 overflow-hidden">
        <img src={experiencItem.companyLogo} alt={experiencItem.companyName} className="w-full h-full object-cover" />
      </div>
      <p className="text-lg md:text-xl mb-2 md:mb-3 font-medium text-foreground">{experiencItem.companyName}</p>
      <p className="text-sm font-medium mb-5 md:mb-6 text-default-600">{experiencItem.jobTitle}</p>

      <div className="bg-default-100 text-foreground text-xs sm:text-sm font-medium inline-flex py-1 px-3 rounded-3xl">
        {experiencItem.start} - {experiencItem.end}
      </div>
    </div>
  );
}
