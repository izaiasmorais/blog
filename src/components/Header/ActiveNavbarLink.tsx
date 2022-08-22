import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatch?: boolean;
  activeClassName: string;
}

export function ActiveNavbarLink({
  children,
  shouldMatch = false,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  if (rest.href !== "/" && rest.as !== "/") {
    if (
      (!shouldMatch && asPath.startsWith(String(rest.href))) ||
      asPath.startsWith(String(rest.as))
    ) {
      isActive = true;
    }
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className: isActive ? activeClassName : "",
      })}
    </Link>
  );
}
