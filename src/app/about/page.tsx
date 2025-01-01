import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const About = async () => {
    return (
        <div>
            {/* <Header admin={isAdmin} /> */}
            <main className="flex items-center mb-6  justify-center w-full m-auto bg-gray-900 min-h-screen relative overflow-visible">
                <div className='lg:w-2/4 lg:mt-0 xl:mt-0 md:mt-0 2xl:mt-0 sm:mt-8 xl:w-2/4 2xl:w-3/4 md:3/4 sm:w-[90%] w-[90%] mt-8 flex flex-col gap-9 p-4 rounded-md bg-gray-700'>
                    <h1 className='text-center text-3xl font-semibold text-white'>About Me</h1>
                    <section className='flex flex-col gap-3 items-start'>
                        <h2 className='text-2xl  text-white'>Hello I&apos;m Youssof</h2>
                        <p className='text-gray-300 text-md '>
                            I worked as a Front-End Developer for two years, focusing on building interactive user interfaces using HTML5, CSS3, and JavaScript. My primary goal was to design responsive and visually appealing websites that deliver an exceptional user experience.
                            I utilized frameworks like React.js and Bootstrap to develop dynamic projects, while also optimizing performance with tools like Lighthouse and caching techniques. I collaborated closely with design and back-end teams to ensure seamless integration and adherence to standards.
                            I also worked on testing websites and applications to ensure cross-browser and mobile compatibility, leveraging tools like Git for efficient code management within a team environment.
                            Additionally, I completed personal projects such as designing e-commerce websites and admin dashboards, which enhanced my skills and deepened my understanding of market demands.
                        </p>
                    </section>
                    <Link href="/#contact"><Button>Get In Touch</Button></Link>
                </div>
            </main>

        </div>
    )
}

export default About