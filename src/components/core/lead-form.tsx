"use client"; //
import { useState } from "react";
type Status = "idle" | "loading" | "success" | "error";
function sanitizeDigits(s: string) {
  // keep numbers only
  return s.replace(/\D+/g, "");
}
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<"+1" | "+39">("+39");
  
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return; // guard
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    const first = String(fd.get("firstname") || "").trim();
    const last = String(fd.get("lastname") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const rawPhone = String(fd.get("phone") || "");
    const phone = sanitizeDigits(rawPhone);

    if (!first || !email || !phone) {
      setErrorMsg("Compila i campi obbligatori.");
      setStatus("error");
      return;
    }

    const payload = {
      // n8n/Webhook expects these keys:
      name: first,                 // used as {{first_name}} in Vapi via variableValues
      surname: last,
      email,
      countryCode,                 // "+39" | "+1"
      phone,                       // digits only; n8n will concat with countryCode
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.error
            ? typeof data.error === "string"
              ? data.error
              : JSON.stringify(data.error)
            : "Errore di invio"
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setCountryCode("+39");
    } catch (err) {
      console.error(err);
      setErrorMsg("Errore di rete");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl space-y-4">
      {/* Name + Surname row */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm text-slate-600">Nome*</label>
          <input
            name="firstname"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-slate-300"
            placeholder="Mario"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-slate-600">Cognome*</label>
          <input
            name="lastname"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-slate-300"
            placeholder="Rossi"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-slate-600">Email*</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-slate-300"
          placeholder="mario@email.com"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-slate-600">Telefono*</label>
        <div className="flex flex-wrap gap-3">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value as "+1" | "+39")}
            className="w-28 rounded-2xl border border-slate-200 bg-white px-3 py-3 outline-none focus:border-slate-300"
            aria-label="Prefisso"
          >
            <option value="+39">🇮🇹 +39</option>
            <option value="+1">🇺🇸 +1</option>
          </select>
          <input
            name="phone"
            inputMode="tel"
            pattern="[0-9()+.\-\s]{4,}"
            required
            className="min-w-[12rem] flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-300"
            placeholder={countryCode === "+39" ? "335 123 4567" : "(555) 123-4567"}
            aria-label="Numero di telefono"
          />
        </div>
        <p className="text-xs text-slate-500">
          Inserisci solo numeri; accettiamo anche spazi e simboli—li puliamo noi.
        </p>
      </div>

      <button
        disabled={status === "loading"}
        className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white shadow-lg hover:opacity-95 disabled:opacity-60"
      >
        {status === "loading" ? "Invio…" : "Prova ora"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-600">Perfetto! Ti contattiamo tra poco.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg || "Errore"}</p>
      )}
    </form>
  );
}