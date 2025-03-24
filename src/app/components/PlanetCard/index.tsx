"use client";

import Image from "next/image";
import { PlanetCardProps } from "./types";
import { tv, VariantProps } from "tailwind-variants";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const planetCard = tv({
  base: "flex gap-3 items-center p-3 border border-content rounded-lg transition cursor-pointer hover:shadow-md hover:border-brand-500",
  variants: {
    isSelected: {
      true: "border-brand-500 bg-light-background/10 cursor-default hover:shadow-none",
    },
  },
});

export const PlanetCard = ({
  imageFilename,
  imageAlt,
  title,
  matchSelection,
  ...props
}: PlanetCardProps & VariantProps<typeof planetCard>) => {
  const pathname = usePathname();
  const router = useRouter();

  const isSelected = pathname
    .split("/")
    .some((path) => path === matchSelection);

  return (
    <button
      onClick={() => {
        router.push(`/new-address/${matchSelection}`);
      }}
      className={planetCard({ ...props, isSelected })}
    >
      <Image
        src={"/images/" + imageFilename}
        height={160}
        width={160}
        alt={imageAlt}
        className="w-[64px] h-auto"
      />
      <span className="font-semibold text-lg md:text-2xl">{title}</span>
    </button>
  );
};
