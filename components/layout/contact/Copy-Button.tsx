'use client';

// Public imports
import { useState } from 'react';

//* Import components
import { Button } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { Icon } from '@iconify-icon/react';
import { DictsTypes } from '@/app/[lang]/dictionaries/dictionaries';

//* Import services

const Copier = ({ value,dicts }: { value: string } &{dicts:DictsTypes}) => {
  /* -------------------------------- Hooks -------------------------------- */
  const [isCopied, setIsCopied] = useState(false);

  /* ------------------------------- Function ------------------------------ */
  // Copying the value
  const copyValue = () => {
    window.navigator.clipboard?.writeText(value).catch(() => null);
    setIsCopied(true);
    toast.success(`${dicts?.button?.copy}`);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };


  return (
    <Button
      isIconOnly
      onPress={copyValue}
      size='sm'
      radius='full'
      className='bg-transparent border-indigo-500 border relative'    >
      <Icon icon="solar:copy-linear" className='transition-all text-indigo-500 inset-0' width={isCopied ? 0 : 20}  height={20}/>
      <Icon icon="line-md:circle-twotone-to-confirm-circle-transition"
        className='transition-all text-indigo-500 inset-0'
        width={isCopied ? 25 : 0}
        height={25}
      />
    </Button>
  );
};

export default Copier;
