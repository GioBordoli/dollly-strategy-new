"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Shared brand logo used in header and footer.
 * If header uses text-gradient instead of an image, replicate that here.
 */
export function BrandLogo({
  href = "/",
  className,
  imgSrc = "/logo.svg",
  alt = "Dolly Strategy",
  priority = false,
}: {
  href?: string;
  className?: string;
  imgSrc?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Link href={href} aria-label={alt} className={cn("inline-flex items-center", className)}>
      <Image src={imgSrc} alt={alt} width={160} height={40} className="h-8 w-auto" priority={priority} />
    </Link>
  );
} 