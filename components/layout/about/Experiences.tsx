"use client";

import React, { useState } from "react";
import ExperiencesItem from "./ExperiencesItem";
import Title from "../Title/Title";
import BaseButton from "../../common/BaseButton";

export default function Experiences({ personData }: { personData: Person }) {
  // State to manage how many experiences to show
  const [showMore, setShowMore] = useState(false);
  const experiencesToShow = showMore ? personData.experiences.length : 3; // Show first 3 experiences initially

  // Handle toggling "Show More"
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mt-20" id="exprience">
      <Title text="Work Experiences" />
      <div className="flex flex-wrap gap-6">
        {personData.experiences.slice(0, experiencesToShow).map((item) => {
          return <ExperiencesItem key={item.id} experiencItem={item} />;
        })}
      </div>
      <BaseButton
        onClick={handleShowMore}
        className="mt-4 bg-white"
      >
            <img className={`w-6 h-6 transform transition-transform duration-700 ${showMore ? "rotate-180" : ""}`} src="/images/arrow.png" alt="arrow.png" />
        {showMore ? "Show Less" : "Show More"}
      </BaseButton>
    </div>
  );
}
