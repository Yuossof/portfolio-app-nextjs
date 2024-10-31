"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="about" className="w-full justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
            <div className=" flex justify-center S w-full px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Frontend Developer
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Crafting beautiful and responsive web experiences with modern technologies.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button asChild>
                            <Link href="#contact">Hire Me</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero