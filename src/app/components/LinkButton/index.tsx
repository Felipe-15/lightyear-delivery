import Link from "next/link";
import { PropsWithChildren } from "react";
import { button } from "../Button";
import { LinkButtonProps } from "./types";
import { VariantProps } from "tailwind-variants";

export const LinkButton = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkButtonProps> & VariantProps<typeof button>) => {
  return (
    <Link role="button" href={href} className={button(props)}>
      {children}
    </Link>
  );
};
