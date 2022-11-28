import { type NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export const config = {
  matcher: ["/user/:path*", "/dashboard/:path*"]
};

export async function middleware(req: NextRequest) {
  // validate the user is authenticated
  const verifiedToken = await verifyAuth(req).catch((err) => {
  });


  if (!verifiedToken) {
    // if this an API request, respond with JSON
    if (req.nextUrl.pathname.startsWith("/dashboard/") || req.nextUrl.pathname.startsWith("/user/")) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin).href);
    }
    // otherwise, redirect to the set token page
    else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // The dashboard is only accessible to admins else redirect to the home page
  if (req.nextUrl.pathname.startsWith("/dashboard") && (verifiedToken.role !== "admin")){
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  
  
}
