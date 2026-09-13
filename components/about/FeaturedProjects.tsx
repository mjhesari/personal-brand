"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
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
    <section className="mt-14 md:mt-20" id="featured-projects">
      <Title text={dicts.projects.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {personData.projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group block h-full bg-content1 rounded-2xl overflow-hidden shadow-sm border border-default-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-default-100">
                <Image
                  src={item.mainImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-default-500">
                    {dicts.projects.view}
                  </p>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-xl bg-default-100 text-foreground inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon icon="line-md:external-link" className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
