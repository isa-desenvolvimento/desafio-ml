import NextLink from 'next/link';
import { ReactNode } from 'react';

type ILinkProps = {
  href: string;
  children: ReactNode;
}

export default function Link({ href, children }: ILinkProps) {
  return (
    <NextLink href={href}>
      <a>
        {children}
      </a>
    </NextLink>
  );
}
