"use client"
import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'
import { Button } from '../ui/button'

const Social = () => {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
            <div className=" px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Button asChild variant="outline">
                            <Link href="mailto:your.email@example.com">
                                <Mail className="mr-2 h-4 w-4" />
                                Email
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://github.com/yourusername">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://linkedin.com/in/yourusername">
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