import type * as React from 'react'
import { Link } from 'react-router'
export const SiteLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
> = ({ href, ...props }) => <Link to={href} {...props} />
