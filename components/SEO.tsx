'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import content from '@/data/content.json';

function titleForPath(pathname: string) {
  if (pathname === '/' || pathname === '') return content.aboutPage?.aboutHospital?.title || 'Home';
  if (pathname.startsWith('/about')) return content.aboutPage?.aboutHospital?.title || 'About';
  if (pathname.startsWith('/doctors')) return content.doctorsPage?.title || 'Doctors';
  if (pathname.startsWith('/departments')) return 'Departments';
  if (pathname.startsWith('/contact') || pathname.startsWith('/contactus')) return content.contactPage?.title || 'Contact';
  return pathname.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Page';
}

function descriptionForPath(pathname: string) {
  if (pathname.startsWith('/doctors')) return 'Meet our expert doctors and consultants.';
  if (pathname.startsWith('/departments')) return 'Explore our departments and specialties.';
  if (pathname.startsWith('/contact') || pathname.startsWith('/contactus')) return content.contactPage?.description || 'Get in touch with us.';
  if (pathname.startsWith('/about')) return content.aboutPage?.aboutHospital?.description || 'About us.';
  return 'Uttaranchal Hospital & Diagnostic Centre - quality healthcare.';
}

export default function SEO() {
  const pathname = usePathname() || '/';
  const title = titleForPath(pathname);
  const description = descriptionForPath(pathname);

  return (
    <Head>
      <title>{title} | UHDC</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | UHDC`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
