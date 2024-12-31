import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_PRIVATE_KEY as string);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('jwtToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login1', request.url));
  }

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);

    if (!payload.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
