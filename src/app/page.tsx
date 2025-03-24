"use client";

import { Address } from "@/interfaces/Address";
import { Suspense, useEffect, useMemo, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { AddressCard } from "./components/AddressCard";
import { Input } from "./components/Input";
import { LinkButton } from "./components/LinkButton";

import { ADDRESS_TYPES } from "@/interfaces/AddressTypes";
import { EarthAddress } from "@/interfaces/EarthAddress";
import { MarsAddress } from "@/interfaces/MarsAddress";
import { deleteAddress } from "@/services/address/deleteAddress";
import { getAddresses } from "@/services/address/getAddresses";
import { useRouter, useSearchParams } from "next/navigation";

function Home() {
  const router = useRouter();
  const params = useSearchParams();
  const searchParam = params.get("search");

  const [addresses, setAddressess] = useState<Address[]>([]);
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = () => {
    const response = getAddresses();

    setAddressess(response);
  };

  const handleDeleteAddress = (id: string) => {
    deleteAddress(id);
    setAddressess((prev) => prev.filter((address) => address.id !== id));
  };

  const filteredAddresses = useMemo(() => {
    return addresses.filter(
      (address) =>
        (address.addressDetails as EarthAddress)?.cep?.includes(
          searchParam || ""
        ) ||
        (address.addressDetails as MarsAddress)?.batch?.includes(
          searchParam || ""
        )
    );
  }, [searchParam, addresses]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex mt-6 px-3 gap-3 w-full justify-between">
        <Input
          customClasses={{
            container: "md:max-w-[320px] md:w-full",
            label: "hover:border-brand-500 transition",
          }}
          defaultValue={searchParam || ""}
          icon={IoMdSearch}
          placeholder="Busque por CEP ou Lote"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              const value = e.currentTarget.value;
              router.push(`/${value ? "?search=" + value : ""}`);
            }
          }}
        />
        <LinkButton href="/new-address/earth">
          <MdAdd className="text-base" /> Novo endereço
        </LinkButton>
      </div>
      <ul className="flex flex-col grid-list gap-4 mt-4 px-3 mb-6">
        {!filteredAddresses.length && (
          <h2 className="text-content font-bold text-lg col-span-2">
            Ops, parece que não temos endereços por aqui! :(
          </h2>
        )}
        {filteredAddresses.map((address) => (
          <li
            key={address.id}
            className="transition hover:-translate-y-1 hover:shadow-md min-h-[180px] w-full"
          >
            <AddressCard
              {...address}
              type={address.type as ADDRESS_TYPES}
              handleDeleteAddress={() => handleDeleteAddress(address.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
