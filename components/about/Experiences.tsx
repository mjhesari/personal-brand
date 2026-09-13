"use client";

import React, { useState } from "react";
import ExperiencesItem from "./ExperiencesItem";
import Title from "./Title";
import BaseButton from "../common/BaseButton";
import { Person } from "@/types/person";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export default function Experiences({
  personData,
  dicts,
}: {
  personData: Person;
  dicts: DictsTypes;
}) {
  const [showMore, setShowMore] = useState(false);
  const experiencesToShow = showMore ? personData.experiences.length : 3;

  return (
    <div className="mt-14 md:mt-20" id="exprience">
      <Title text={dicts.experiences.title} />
      <div className="flex flex-wrap gap-4 md:gap-6">
        {personData.experiences.slice(0, experiencesToShow).map((item) => (
          <ExperiencesItem key={item.id} experiencItem={item} />
        ))}
      </div>
      {personData.experiences.length > 3 ? (
        <BaseButton
          onClick={() => setShowMore(!showMore)}
          className="mt-4 bg-content1 text-foreground shadow-sm"
        >
          <img
            className={`w-6 h-6 transform transition-transform duration-700 ${showMore ? "rotate-180" : ""}`}
            src="/images/arrow.png"
            alt=""
          />
          {showMore ? dicts.experiences.showLess : dicts.experiences.showMore}
        </BaseButton>
      ) : null}
    </div>
  );
}
