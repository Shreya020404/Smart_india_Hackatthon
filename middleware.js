import { NextResponse } from "next/server";
import { auth } from "@/app/auth"; // Adjust the import path based on your project structure

export async function middleware(request) {
  const session = await auth();

  // Redirect to login if not authenticated and trying to access dashboard
  if (!session?.user && request.nextUrl.pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to dashboard routes
};
