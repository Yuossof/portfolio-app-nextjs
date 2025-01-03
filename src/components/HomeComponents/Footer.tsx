"use client"
import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t z-10 text-slate-200">
            <p className="text-xs text-gray-200 dark:text-gray-400">© 2024 Youssef. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Privacy
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="/login">
                    login
                </Link>
            </nav>
        </footer>
    )
}

export default Footer