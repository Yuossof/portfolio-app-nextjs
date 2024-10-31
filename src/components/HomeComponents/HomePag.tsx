import Skills from './Skills'
import Hero from './Hero'
import Social from './Social'
import Nvb from './Nvb'
import Projects from './Projects'
import Footer from './Footer'


const HomePag = () => {

    return (
        <div className="">
            <Nvb />

            <main className="flex flex-col justify-center w-full ">
                <Hero />
                <Skills />
                <Projects />
                <Social />
                <Footer />
            </main>

        </div>
    )
}

export default HomePag