import Image from "next/image";

export type LogoItem = { src: string; alt: string };

type Props = {
  items: LogoItem[];
  height?: number;
  gap?: number;
  durationSec?: number;
};

export default function LogosMarquee({
  items,
  height = 28,
  gap = 48,
  durationSec = 30,
}: Props) {
  const duplicated = [...items, ...items];
  const style: React.CSSProperties = {
    // CSS var to control animation duration
    // @ts-expect-error custom property
    "--marquee-duration": `${durationSec}s`,
  };

  return (
    <div className="group mask-fade-x" aria-label="Partner e tecnologie">
      <div className="overflow-hidden">
        <div className="marquee" style={style}>
          {duplicated.map((item, i) => (
            <div key={`${item.src}-${i}`} style={{ marginRight: `${gap}px`, display: "inline-flex", alignItems: "center" }}>
              <Image
                src={item.src}
                alt={item.alt}
                height={height}
                width={Math.round(height * 4)}
                style={{ height, width: "auto" }}
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 