export default function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      {eyebrow && <div className="text-bluebrand font-medium uppercase tracking-wider text-xs mb-2">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
} 