export default function ExperiencesItem({
  experiencItem,
}: {
  experiencItem: Experience;
}) {
  return (
    <div className="w-full items-start sm:w-[calc(33.3333%-16px)] bg-background shadow-md flex justify-between flex-col p-8 rounded-2xl">
      <div className="w-14 h-14 rounded-2xl flex justify-center items-center bg-[#F3F2F7] mb-6">
        <img src={experiencItem.companyLogo} alt={experiencItem.companyName} />
      </div>
      <p className="text-xl mb-3 font-medium">{experiencItem.companyName}</p>
      <p className="text-sm font-medium mb-6">{experiencItem.jobTitle}</p>

      <div className="bg-[#F3F2F7] text-sm font-medium inline-flex py-1 px-3 rounded-3xl">
        {experiencItem.start} - {experiencItem.end}
      </div>
    </div>
  );
}
