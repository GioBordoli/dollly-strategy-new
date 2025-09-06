# Dolly Strategy — Sito Marketing (Next.js)

Produzione-ready, conversion-first, struttura:
Hero → Logos → Stats → Soluzioni → Case Studies → Provalo → Confronto → Processo → CTA.

## Requisiti
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zod + react-hook-form
- next-seo
- plausible-tracker (opzionale)

## Avvio
```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Variabili d'ambiente (.env.local)
```bash
N8N_WEBHOOK_URL=https://gbordoli.app.n8n.cloud/webhook/get_data
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/giorgio-bordoli/30min?hide_event_type_details=1&hide_gdpr_banner=1
# opzionale analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=www.dollystrategy.com
```

## Brand & Tema
- Modifica i token in `src/styles/theme.css` (`--blue`, `--aqua`, ecc.).
- Utility globali in `src/app/globals.css` (gradiente e header glass).

## Componenti principali
- Header/Footer: `src/components/core/*`
- Sezioni Home: vedi file in `src/components/core/`
- Calendly inline: `calendly-inline.tsx` (URL da `NEXT_PUBLIC_CALENDLY_URL`).
- Form lead: `lead-form.tsx` → POST `/api/lead` → n8n webhook.

## Deploy (Vercel)
- Imposta env nel dashboard Vercel.
- API route Node (non Edge).
- Collegare dominio e redirect www → root.

## Assets
- Illustrazioni in `public/illustrations/`.
- Loghi in `public/logos/` (placeholder testuali per ora).
# dollly-strategy-new
