"use client";

import React from "react";
import Title from "../Title/Title";
import { useAppSelector } from "@/redux/app/hooks";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export default function AboutSection({dicts}:{dicts:DictsTypes}) {
  const { siteData: personData } = useAppSelector((state) => state.person.personData);
  const { name, description } = personData || {};
  if (!personData) return null;

    // const formattedAbout = personData.about
    // ? personData.about.replace(/\n/g, "<br />") // Replace newlines with <br />
    // : "";
  return (
    <section className="mt-20" id="#about">
      <Title text={dicts.menuItems.about}/>
      <div className="bg-background p-8 shadow-sm rounded-2xl">
        <p className="whitespace-pre text-wrap leading-7">{description?.[dicts.lang] ?? ''}</p>
      </div>
    </section>
  );
}
