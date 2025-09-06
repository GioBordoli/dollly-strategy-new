import { cn } from "@/lib/utils";
export default function Section({ id, className, children }: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
} 