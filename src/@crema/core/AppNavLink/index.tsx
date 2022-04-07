import Link from 'next/link';
import React, {ReactNode} from 'react';

interface AppNavLinkProperties {
  href: string;
  children: ReactNode;

  [x: string]: any;
}

const AppNavLink = React.forwardRef(
  (properties: AppNavLinkProperties, reference: React.Ref<HTMLAnchorElement>) => {
    const {href = '/', other, children} = properties;
    return (
      <Link data-testid='custom-link' href={href}>
        <a ref={reference} style={{textDecoration: 'none'}} {...other}>
          {children}
        </a>
      </Link>
    );
  },
);

export default AppNavLink;
