'use client'

import { navLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { ModeToggle } from '../darkMode';

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='sticky top-0 z-20 w-full flex justify-between items-center px-4 py-4 bg-blue-2 dark:bg-stone-950 shadow-xl lg:hidden'>
      <Image
        src='/PNINI’s Delicious Food.png'
        alt='logo'
        width={60}
        height={10}
        className='rounded-full'
      />
      <div className='flex gap-8 max-md:hidden'>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname === link.url ? 'text-blue-1' : ''}`}>
            <p onClick={closeMenu}>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='static flex gap-4 items-center'>
        <Menu className='cursor-pointer md:hidden' onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className='flex flex-col absolute top-[90px] w-screen h-screen items-center justify-center right-0 gap-8 p-5 bg-white dark:bg-stone-900 shadow-md'>
            {navLinks.map((link) => (
              <Link href={link.url} key={link.label} className='flex gap-4 text-body-medium hover:text-blue-500 hover:dark:text-slate-400'>
                {link.icon}
                <p onClick={closeMenu}>{link.label}</p>
              </Link>
            ))}
            <div className='md:hidden'>
              <ModeToggle />
            </div>
          </div>
        )}
        <div className='max-md:hidden'>
          <ModeToggle />
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Topbar;
