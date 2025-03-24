import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const button = tv({
  base: "flex justify-center items-center gap-1 font-bold rounded-md border text-xs whitespace-nowrap py-3 px-3  cursor-pointer transition-all ",
  variants: {
    color: {
      brand: "bg-brand-500 text-white border-transparent hover:brightness-110",
      outline:
        "border border-brand-500 text-content bg-transparent hover:bg-zinc-100",
    },
    width: {
      half: "w-1/2",
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    color: "brand",
    width: "fit",
  },
});

export const Button = ({
  children,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>
>) => {
  return (
    <button {...props} className={button(props)}>
      {children}
    </button>
  );
};
