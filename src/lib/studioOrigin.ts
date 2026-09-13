/**
 * Where Beebizy Studio actually lives.
 *
 * This build is served from two origins: the Studio preview itself, and beebizy.com.
 * On beebizy.com a relative "/app" resolves against the marketing domain and lands on
 * beebizy.com/app, which is not the product. Links that open Studio therefore name the
 * product origin outright instead of trusting whichever host rendered the page.
 */
export const STUDIO_ORIGIN = "https://beebizy-studio-preview.vercel.app";

export function studioUrl(pathname = "/"): string {
  return `${STUDIO_ORIGIN}${pathname}`;
}
