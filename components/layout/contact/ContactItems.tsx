"use client";
import { Icon } from "@iconify-icon/react";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { convertToPhoneNumber } from "@/utils/functions/functions";
import Copier from "./Copy-Button";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
// import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
export type ContactItemTypes = {
  content: string;
  type: "phone" | "mail";
};
const ContactItems = ({
  content,
  type,
  dicts,
}: ContactItemTypes & { dicts: DictsTypes }) => {
  const contentRef = useRef<HTMLHeadingElement>(null);
  return (
    <div className="space-y-3">
        <div
          className="flex items-center justify-between bg-gray-500/15 rounded-xl p-2"
        >
          <p
                  dir="ltr"
            className={`${
              dicts?.dir === "ltr" ? "text-start" : "text-end"
            } text-base text-gray-700 leading-none`}
          >
            {type === "phone" ? convertToPhoneNumber(content ?? "") : content}
          </p>
          <div className="flex gap-x-1" ref={contentRef}>
            <Copier value={content} dicts={dicts} />
            <Button
              isIconOnly
              size="sm"
              radius="full"
              className="bg-transparent border-indigo-500 border"
            >
              <Icon
                icon="solar:letter-linear"
                className="text-indigo-500"
                width="20"
              />
            </Button>
          </div>
        </div>
    </div>
  );
};

export default ContactItems;
