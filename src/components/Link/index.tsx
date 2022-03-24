import { Link as LinkChakra, LinkProps } from "@chakra-ui/react";
import LinkNext from "next/link";
import { ReactNode } from "react";

interface LinkPropsComponent extends LinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children, ...rest }: LinkPropsComponent) {
  return (
    <LinkNext href={href}>
      <LinkChakra {...rest}>{children}</LinkChakra>
    </LinkNext>
  );
}
