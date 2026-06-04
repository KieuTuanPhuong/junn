import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageShowcaseProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
  fill?: boolean;
  imageClassName?: string;
}

export function ImageShowcase({
  src,
  alt,
  href,
  className,
  imageClassName,
  width,
  height,
  fill = false,
  ...props
}: ImageShowcaseProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden bg-muted",
        fill ? "h-full w-full" : "",
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? (width || 1200) : undefined}
        height={!fill ? (height || 800) : undefined}
        fill={fill}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-[1.15]",
          fill ? "object-cover" : "h-auto w-full object-cover",
          imageClassName
        )}
      />
      
      {/* Overlay & Glass circle view detail button */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-black/10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl transition-transform duration-500 scale-50 group-hover:scale-100">
          <span className="sr-only">View detail</span>
          <ArrowUpRight className="h-8 w-8 stroke-[1.5]" />
        </div>
      </div>
    </Link>
  );
}
