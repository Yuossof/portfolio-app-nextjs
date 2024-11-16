import Hero from './Hero'
import Social from './Social'
import Nvb from './Nvb'
import Projects from './Projects'
import Footer from './Footer'
import Skills from './Skills'
import { cookies } from 'next/headers'
import { verifyTokenForPage } from '@/utils/verifyToken'

const HomePag = async () => {

        const cookieStore = await cookies();
        const token = cookieStore.get('jwtToken')?.value;
        const userPayload = verifyTokenForPage(token as string)
        const isAdmin = userPayload?.isAdmin as boolean
        const id = userPayload?.id as string



    return (
        <div className="">

            <Nvb admin={isAdmin} id={id}/>
            <main className="flex flex-col justify-center w-full ">
                <Hero />
                <Skills admin={isAdmin} id={id}/>
                <Projects />
                <Social />
                <Footer />
            </main>
        </div>
    );
};



export default HomePag;
