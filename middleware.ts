import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'

export async function middleware(req: NextRequest) {
  const session = await auth()
  const user = session?.user
  const { pathname } = req.nextUrl

  // If logged in and visiting login page (/), redirect to /home
  if (pathname === '/' && user?.email) {
    return NextResponse.redirect(new URL('/home', req.url))
  }

  // If not logged in and visiting protected routes, redirect to /
  const protectedRoutes = ['/home', '/conversations', '/account', '/conversations/']
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtected && !user?.email) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Allow request if it doesn’t match conditions
  return NextResponse.next()
}

// Apply middleware only to these routes
export const config = {
  matcher: ['/', '/home/:path*', '/conversations', '/conversations/:path*', '/account'],
}
