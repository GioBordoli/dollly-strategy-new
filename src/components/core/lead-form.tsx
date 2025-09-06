"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadSchema, type LeadInput } from "@/lib/validations";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadInput>({ resolver: zodResolver(LeadSchema) });
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LeadInput) => {
    setError(null);
    setOk(false);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) { setOk(true); reset(); } else {
      const j = await res.json().catch(() => ({}));
      setError(j?.error ?? "Errore imprevisto. Riprova.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Nome</Label>
          <Input placeholder="Mario" {...register("nome")} />
          {errors.nome && <p className="text-sm text-red-600 mt-1">{errors.nome.message}</p>}
        </div>
        <div>
          <Label>Cognome</Label>
          <Input placeholder="Rossi" {...register("cognome")} />
          {errors.cognome && <p className="text-sm text-red-600 mt-1">{errors.cognome.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Email</Label>
          <Input placeholder="email@azienda.it" {...register("email")} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label>Telefono</Label>
          <Input placeholder="+39 ..." {...register("telefono")} />
          {errors.telefono && <p className="text-sm text-red-600 mt-1">{errors.telefono.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting} className="btn-gradient text-white px-6">
        {isSubmitting ? "Invio..." : "Invia e Prova Adesso"}
      </Button>
      {ok && <p className="text-green-700">Perfetto, ti contattiamo a breve.</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
} 