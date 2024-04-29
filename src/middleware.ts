import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// export const config = { matcher: ["/admin", "/user"] };

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: "secret" });

  const pathname = req.nextUrl.pathname;

  if (req.nextUrl.pathname.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("api/auth/signin", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/admin") && session?.role !== "Admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/auth") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
