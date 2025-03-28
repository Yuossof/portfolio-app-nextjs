"use client"
import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'
import { Button } from '../ui/button'

const Social = () => {
    return (
        <section id="contact" className='z-10 mb-16'>
            <div className=" px-4 md:px-6 z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-slate-200 font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                    </div>
                    <div className="flex gap-3 sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row flex-col" id='contact'>
                        <div className='flex gap-3'>
                            <Button asChild variant="default" className='bg-slate-900 border-2 border-gray-700 shadow-lg'>
                                <Link href="mailto:youssofwr@gmail.com">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email
                                </Link>
                            </Button>
                            <Button asChild variant="default" className='bg-slate-900 border-2 border-gray-700 shadow-lg'>
                                <Link href="https://github.com/Yuossof">
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Link>
                            </Button>
                        </div>
                        <Button asChild variant="default" className='bg-slate-900 border-2 border-gray-700 shadow-lg'>
                            <Link href="https://linkedin.com/in/youssof-ahmed-0839932a6">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social