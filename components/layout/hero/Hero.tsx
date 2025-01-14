"use client";

import { Chip } from "@nextui-org/react";
import { useAppSelector } from "@/redux/app/hooks";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";

// Dynamic Route: app/post/[id]/page.tsx
export default function HeroSection({ dicts }: { dicts: DictsTypes }) {
  const { siteData: personData } = useAppSelector(
    (state) => state.person.personData
  );
  const personPhoto = typeof personData?.image === "string" ? personData?.image : "/no-src";
  const personName =
    typeof personData?.name?.[dicts.lang] === "string"
      ? personData.name[dicts.lang]
      : "";
      const personSlogan =
    typeof personData?.slogan?.[dicts.lang] === "string"
      ? personData.slogan[dicts.lang]
      : "";
  return (
    <div>
      <div className="flex gap-10 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <div>
            <Chip
              startContent={
                <div className="shadow-sm w-[10px] h-[10px] rounded-full flex items-center justify-center bg-background">
                  <div className="w-[6px] h-[6px] rounded-full bg-success-600"></div>
                </div>
              }
              variant="faded"
              className="items-center h-auto px-[10px] text-success-600 text-base py-[5px] bg-[#F7F7F7] border border-[#E5E7EB]"
            >
              Available for projects
            </Chip>
          </div>
          <div className="mt-10">
            <h1 className="text-[#3D61FF] text-5xl md:text-7xl uppercase font-medium">
              {personName}
            </h1>
            <h1 className="text-5xl md:text-7xl uppercase font-medium">
              {" "}
              LastName
            </h1>
            <p className="text-base md:text-2xl text-[#181535] font-medium">
              {personSlogan}
            </p>
            <div className="mt-10 flex justify-between items-center"></div>
          </div>
        </div>
        <Image
          alt="Main photo"
          src={personPhoto}
          className="w-full md:w-1/2 rounded-xl"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
