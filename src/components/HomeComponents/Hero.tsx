'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const Hero = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()



    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ">

            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5 }}
                className="z-10 text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Hello, I'm{' '}
                    </span>
                    <span className='text-white'>
                        <Typewriter
                            words={['Youssof', 'a Frontend Developer', 'a Creator']}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-gray-300">
                    Crafting digital experiences that inspire and innovate
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                    <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                        <a href="#projects">View My Work</a>
                    </Button>
                    <Button size="lg" className="border-[1px] border-gray-600 hover:shadow-lg">
                        Contact Me
                    </Button>
                </div>
                <div className="flex justify-center space-x-6">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, color: '#2ecc71' }}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, color: '#3498db' }}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, color: '#1da1f2' }}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTwitter size={24} />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero

