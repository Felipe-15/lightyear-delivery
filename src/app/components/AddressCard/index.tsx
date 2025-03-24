import { getTypeAddress } from "@/utils/typeAddress";
import Image from "next/image";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Details } from "./components/Details";
import { AddressCardProps } from "./types";

export const AddressCard = React.memo(function AddressCard({
  fullname,
  phone,
  planet,
  type,
  addressDetails,
  handleDeleteAddress,
}: AddressCardProps) {
  return (
    <label className="relative cursor-pointer flex h-full flex-col ">
      <input hidden type="radio" name="address" className="peer group" />
      <div className="absolute top-2 right-2 rounded-[50%] border border-gray-400 peer-checked:border-brand-500 p-[2px] transition-all">
        <div className="opacity-0 bg-brand-500 rounded-[50%] p-1 group-checked transition-all"></div>
      </div>
      <article className="flex w-full p-2 gap-2 border border-gray-400 rounded-md peer-checked:border-brand-500 transition-all min-h-[180px]">
        <Image
          src={`/images/${planet}-icon.png`}
          width={200}
          height={200}
          alt={`Ilustração ${planet === "earth" ? "da Terra" : "de Marte"}`}
          className="w-[48px] h-[48px] m-2 md:m-4"
        />
        <div className="flex flex-col w-full">
          <span
            style={{ backgroundColor: getTypeAddress(type).color }}
            className="px-2 py-[2px] bg-brand-500 text-xs w-fit text-white rounded-full mb-1"
          >
            {getTypeAddress(type).value}
          </span>
          <p className="flex flex-col gap-1">
            <span className="font-bold text-content text-sm">{fullname}</span>
            <span className="text-xs text-gray-700">{phone}</span>
            <Details type={planet} addressDetails={addressDetails} />
          </p>
          <footer className="hidden justify-end items-center w-full gap-3 mt-auto mb-1">
            <button
              onClick={handleDeleteAddress}
              className="cursor-pointer p-1 rounded-md border-2 border-danger text-danger hover:bg-danger hover:text-white transition"
            >
              <FaRegTrashAlt />
            </button>
          </footer>
        </div>
      </article>
    </label>
  );
});
