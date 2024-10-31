"use client"
// import Link from 'next/link'
import React from 'react'
import { Menu, X } from "lucide-react"
import { Button } from '../ui/button'
import { useState } from 'react'
import { Link } from "react-scroll"
import Linkk from 'next/link'
function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


const Nvb = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-white shadow-sm border-b-[1px] border-gray-200">
                <Linkk className="flex items-center justify-center" href="#">
                    <CodeIcon className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-lg font-bold">Youssof</span>
                </Linkk>
                <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" smooth={true} duration={800} to='about'>
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" smooth={true} duration={800} to='skills'>
                        Skills
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" smooth={true} duration={800} to="projects">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" smooth={true} duration={800} to="contact">
                        Contact
                    </Link>
                    <Linkk className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" href="/admin">
                        Admin
                    </Linkk>
                </nav>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </header>
            {mobileMenuOpen && (
                <nav className="md:hidden flex flex-col items-center py-4 bg-background">
                    <Linkk className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#about" onClick={toggleMobileMenu}>
                        About
                    </Linkk>
                    <Linkk className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#skills" onClick={toggleMobileMenu}>
                        Skills
                    </Linkk>
                    <Linkk className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#projects" onClick={toggleMobileMenu}>
                        Projects
                    </Linkk>
                    <Linkk className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#contact" onClick={toggleMobileMenu}>
                        Contact
                    </Linkk>
                </nav>
            )}
        </>
    )
}

export default Nvb