import { Chip } from '@nextui-org/react';
import BaseButton from '../common/BaseButton';
import { Person } from '@/types/person';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DictsTypes } from '@/app/[lang]/dictionaries/dictionaries';

export default function Hero({
  personData,
  dicts,
}: {
  personData: Person;
  dicts: DictsTypes;
}) {
  const lang = dicts.lang as keyof typeof personData.jobTitle;

  return (
    <div>
      <div className="flex gap-6 md:gap-10 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <div>
            <Chip
              startContent={
                <div className="shadow-sm w-[10px] h-[10px] rounded-full flex items-center justify-center bg-background">
                  <div className="w-[6px] h-[6px] rounded-full bg-success-600"></div>
                </div>
              }
              variant="faded"
              className="items-center h-auto px-[10px] text-success-600 text-sm sm:text-base py-[5px] bg-default-100 border border-default-200"
            >
              {dicts.hero.available}
            </Chip>
          </div>
          <div className="mt-6 md:mt-10 flex flex-col gap-3 md:gap-4 items-center md:items-start">
            <h1 className="text-primary text-4xl sm:text-5xl md:text-7xl leading-[1] uppercase font-medium">
              {personData.firstName}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase font-medium leading-[1.3] md:leading-[1.5] text-foreground">
              {personData.lastName}
            </h1>
            <p className="text-sm sm:text-base md:text-2xl text-foreground font-medium text-center md:text-start">
              {personData.jobTitle?.[lang]}
            </p>
            <div className="mt-6 md:mt-10 flex flex-col md:justify-between items-center md:items-start gap-6 md:gap-10">
              <div className="flex gap-5 md:gap-8">
                {personData.links
                  ? personData.links.map((item) => (
                      <Link href={item.url} key={item.url}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10" icon={item.icon} />
                      </Link>
                    ))
                  : null}
              </div>
              <BaseButton className="bg-content1 text-foreground shadow-sm px-4 py-3">
                <Icon className="w-8 h-8 md:w-10 md:h-10" icon="line-md:download-loop" />
                {dicts.hero.resume}
              </BaseButton>
            </div>
          </div>
        </div>
        <Image
          src={personData?.image ?? ''}
          alt={`${personData.firstName}'s profile`}
          className="w-full md:w-1/2 rounded-2xl object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
