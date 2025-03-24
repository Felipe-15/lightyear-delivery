import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { PlanetCard } from "../components/PlanetCard";

export default function NewAddressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <header className="flex items-center gap-2 py-6 px-3 border-b border-b-gray-400">
        <Link
          href="/"
          className="text-brand-500 p-1 rounded-md border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
        >
          <IoChevronBack />
        </Link>
        <h2 className="text-content font-bold text-2xl">Novo endereço</h2>
      </header>
      <h2 className="px-3 text-content font-bold text-lg my-6 md:max-w-[660px] md:mx-auto md:text-2xl">
        Qual o planeta?
      </h2>
      <ul className="mb-6 flex w-full items-center justify-center gap-3 md:max-w-[660px] md:mx-auto">
        <li>
          <PlanetCard
            matchSelection="earth"
            title="Terra"
            imageFilename="earth-icon.png"
            imageAlt="Ilustração da Terra"
          />
        </li>
        <li>
          <PlanetCard
            matchSelection="mars"
            title="Marte"
            imageFilename="mars-icon.png"
            imageAlt="Ilustração de Marte"
          />
        </li>
      </ul>
      {children}
    </section>
  );
}
