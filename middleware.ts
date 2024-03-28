import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: "/",

  afterAuth(auth, req, evt) {
    if (!auth.userId && req.nextUrl.pathname !== "/") {
      const orgSelection = new URL("/", req.url);
      return NextResponse.redirect(orgSelection);
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
