import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the session token from the cookies
  let sessionToken = request.cookies.get('sessionToken')?.value
  // If the user is not logged in, redirect to the login page
  if (sessionToken) {
    if (!request.nextUrl.pathname.startsWith('/test-1')) {
      return NextResponse.redirect(new URL('/test-1', request.url))
    }
  } else {
    if (!request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/test-1/:path*', '/login/:path*', '/'],
}
