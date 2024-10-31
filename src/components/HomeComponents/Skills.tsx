"use client"

import React from 'react'
import { Card, CardContent } from '../ui/card'
const Skills = () => {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className=" px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Git"].map((skill) => (
                        <Card key={skill} className="flex items-center justify-center p-4 h-24">
                            <CardContent className="text-center p-0">
                                <p className="text-lg font-semibold">{skill}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills