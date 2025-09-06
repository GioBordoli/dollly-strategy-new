import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <div className="text-center bg-card rounded-2xl shadow-card p-8">
      <h3 className="text-xl md:text-2xl font-semibold">Pronto a vedere come l’AI può far crescere il tuo business?</h3>
      <div className="mt-5 flex items-center justify-center gap-4">
        <Link href="/book">
          <Button className="btn-gradient text-white shadow-md px-6">Prenota una Call</Button>
        </Link>
        <a href="#provalo" className="text-bluebrand font-medium">Provalo tu stesso</a>
      </div>
    </div>
  );
} 