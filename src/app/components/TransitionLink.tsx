"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useTransition } from "./TransitionProvider";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
  const { navigateWithTransition } = useTransition();

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        // Allow ctrl/cmd + click to open in new tab normally
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
          return;
        }
        
        // Let external links or anchors fall back to default behavior
        if (href.startsWith("http") || href.startsWith("#")) {
          return;
        }

        e.preventDefault();
        navigateWithTransition(href);
      }}
    >
      {children}
    </Link>
  );
}
