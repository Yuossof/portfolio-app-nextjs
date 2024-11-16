"use client"
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { Settings } from 'lucide-react'
const SidebarV2 = () => {
    return (
        <aside className="w-64 bg-white shadow-md h-[40vh] border-2 border-gray-500 rounded-md m-2">
            <nav className="p-5 space-y-2">
                <Link
                    href="/"
                    className={buttonVariants({
                        className: "w-full justify-start",
                        variant: "ghost"
                    })}
                >
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home Page
                </Link>

                <Link
                    className={buttonVariants({
                        className: 'w-full justify-start',
                        variant: "ghost"
                    })}
                    href="/admin"
                >
                    <Settings />
                   Admin home
                </Link>
            </nav>
        </aside>
    )
}

export default SidebarV2