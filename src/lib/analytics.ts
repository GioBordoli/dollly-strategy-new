let plausible: ((event: string, opts?: { props?: Record<string, string | number | boolean> }) => void) | null = null;

export function initAnalytics() {
  if (typeof window === "undefined") return;
  try {
    // using plausible-tracker dynamic import to avoid SSR issues
    import("plausible-tracker").then(({ default: Plausible }) => {
      const { trackEvent } = Plausible({ domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "" });
      plausible = trackEvent;
    }).catch(() => {});
  } catch {}
}

export function track(name: string, props?: Record<string, string | number | boolean>) {
  if (!plausible) return;
  plausible(name, props ? { props } : undefined);
} 