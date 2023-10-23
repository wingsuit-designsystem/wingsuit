'use client';

import Link from 'next/link';

export default function WingsuitLink({
  children,
  wingsuitClassName,
  href,
}: {
  children: React.ReactNode;
  href: string;
  wingsuitClassName: string;
}) {
  return (
    <Link
      href={href}
      className={href === 'demo' ? `${wingsuitClassName} bg-teal-300` : wingsuitClassName}
    >
      {children}
    </Link>
  );
}
