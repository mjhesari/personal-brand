import { Chip } from '@nextui-org/react';
import BaseButton from '../common/BaseButton';
import { Person } from '@/types/person';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Dynamic Route: app/post/[id]/page.tsx
export default function Hero({ personData }: { personData: Person }) {
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
          <div className="mt-10 flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-[#3D61FF] text-5xl md:text-7xl leading-[1] uppercase font-medium">
              {personData.firstName}
            </h1>
            <h1 className="text-5xl md:text-7xl uppercase font-medium leading-[1.5]">
              {' '}
              {personData.lastName}
            </h1>
            <p className="text-base md:text-2xl text-[#181535] font-medium">
              {personData?.jobTitle}
            </p>
            <div className="mt-10 flex flex-col md:justify-between items-center md:items-start gap-10">
              <div className="flex gap-8">
                {personData.links
                  ? personData?.links?.map((item) => {
                      return (
                          <Link href={item.url} key={item.url}>
                            <Icon
                              className="w-10 h-10"
                              icon={item.icon}
                            />
                          </Link>
                      )
                    })
                  : null}
              </div>
              <BaseButton className="bg-white">
                <Icon
                  className="w-10 h-10"
                  icon="line-md:download-loop"
                />
                My Resume
              </BaseButton>
            </div>
          </div>
        </div>
        <Image
          src={personData?.image ?? ''}
          alt={`${personData.firstName}'s profile`}
          className="w-full md:w-1/2 rounded-xl"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
