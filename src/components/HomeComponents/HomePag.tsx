
import { cookies } from 'next/headers'
import { verifyTokenForPage } from '@/utils/verifyToken'
import Container from './Container'

const HomePag = async () => {

        const cookieStore = await cookies();
        const token = cookieStore.get('jwtToken')?.value;
        const userPayload = verifyTokenForPage(token as string)
        const isAdmin = userPayload?.isAdmin as boolean



    return (
        <div>
            <Container isAdmin={isAdmin} />
        </div>
    );
};



export default HomePag;
