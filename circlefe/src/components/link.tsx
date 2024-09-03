import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";
import { Link as CLink, ComponentWithAs, LinkProps } from "@chakra-ui/react";

interface ChakraLinkProps extends ComponentWithAs<"a", LinkProps> {
  children: React.ReactNode;
  to: RRLinkProps["to"];
}

export function ChakraLink(props: ChakraLinkProps) {
  return (
    <CLink as={RRLink} {...props}>
      {props.children}
    </CLink>
  );
}
