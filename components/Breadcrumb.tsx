'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '@/data/content.json';
import React from 'react';

function segmentToLabel(segment: string) {
  if (!segment) return '';
  // try match with header navigation
  const nav = content.header?.navigation || [];
  const found = nav.find((n: any) => (n.link || '').endsWith(segment) || (n.name || '').toLowerCase() === segment.toLowerCase());
  if (found) return found.name;
  // fallback: prettify
  return segment.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumb() {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <li>
          <Link href="/" className="hover:text-slate-900 font-medium">
            Home
          </Link>
        </li>

        {parts.map((part, idx) => {
          const href = '/' + parts.slice(0, idx + 1).join('/');
          const isLast = idx === parts.length - 1;
          const label = segmentToLabel(part);

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-slate-400">/</span>
              {isLast ? (
                <span className="text-slate-800 font-medium">{label}</span>
              ) : (
                <Link href={href} className="hover:text-slate-900">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
