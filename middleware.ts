import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["it", "en"],
  defaultLocale: "it",
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(it|en)/:path*"],
};





