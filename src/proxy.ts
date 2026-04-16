import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  const isAuthenticated = !!accessToken || !!refreshToken;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/admin")) {
    try {
      if (!refreshToken) {
        throw new Error("No refresh token");
      }
      const { session } = await getSession(
        request.nextUrl.origin,
        refreshToken,
      );
      if (session.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart/:path*",
    "/login/:path*",
    "/register/:path*",
  ],
};

async function getSession(origin: string, refreshToken: string) {
  const controller = new AbortController();

  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(`${origin}/api/auth/session`, {
      headers: {
        cookie: `refresh_token=${refreshToken}`,
      },
      signal: controller.signal,
    });

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
