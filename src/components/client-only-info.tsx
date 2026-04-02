'use client';

import { useState, useEffect } from 'react';

interface ClientOnlyInfoProps {
  children: React.ReactNode;
}

export default function ClientOnly({ children }: ClientOnlyInfoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}