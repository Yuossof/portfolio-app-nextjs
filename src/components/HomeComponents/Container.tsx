"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Nvb from './Nvb'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Social from './Social'
import Footer from './Footer'

const Container = ({ isAdmin }: { isAdmin: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div>
            <Nvb admin={isAdmin} />
            <main className="flex flex-col justify-center w-full bg-gray-900 min-h-screen relative overflow-visible">
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.30), transparent 70%)`,
                    }}
                />
                <Hero />
                <Skills />
                <Projects />
                <Social />
                <Footer />
            </main>
        </div>
    )
}

export default Container