'use client'

import { navLinks } from "@/lib/constants"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../darkMode"

function LeftSidebar() {

    const pathname = usePathname()

    return (
        <div className="h-full 2xl:h-[1300px] p-10 flex flex-col gap-16 bg-blue-2 dark:bg-stone-900/20 max-lg:hidden">
            <Image
                src="/PNINI’s Delicious Food.png"
                alt="logo"
                width={150}
                height={70}
className="rounded-full"
            />
            <div className="flex flex-col gap-12 ">
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium p-2 rounded-sm items-center ${pathname === link.url ? "bg-blue-500 text-white dark:text-black dark:bg-blue-200" : "text-gray-600 "}`}>
                        {link.icon}
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>
            <div className="flex gap-4 text-body-medium items-center ">
                <UserButton />
                <p>Edit profile</p>
            </div>
            <ModeToggle/>
        </div>
    )
}

export default LeftSidebar
