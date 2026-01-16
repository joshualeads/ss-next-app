'use client';

import { usePathname } from 'next/navigation';
import ContactUs from './ContactUs';

export default function LayoutClient() {
  const pathname = usePathname();
  
  // Don't render ContactUs on the contact page
  if (pathname === '/contact') {
    return null;
  }

  return <ContactUs />;
}
