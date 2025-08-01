import dicts from "./en.json";
import { locales } from "@/app/[lang]/dictionaries/languages";

type Language = (typeof locales)[number];
export type langsType = keyof typeof dictionaries;
export type DictsTypes = typeof dicts;

const dictionaries: Record<Language, () => Promise<DictsTypes>> =
  locales?.reduce((acc, lang) => {
    acc[lang] = () => import(`./${lang}.json`).then((module) => module.default);
    return acc;
  }, {} as Record<Language, () => Promise<DictsTypes>>);

export const getDictionary = async (locale: langsType) => {
  const dicLocale = dictionaries[locale];
  if (!dicLocale) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Dictionary for locale "${locale}" not found. Returning empty object.`);
    }
    return {} as DictsTypes;
  }
  return (await dicLocale()) as DictsTypes;
};
