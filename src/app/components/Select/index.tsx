import { addressTypes } from "@/utils/typeAddress";
import { FaChevronDown } from "react-icons/fa";
import { SelectProps } from "./types";

export const Select = ({ error, ...props }: SelectProps) => {
  return (
    <>
      <label
        className={`relative border ${
          !!error ? "border-danger" : "border-gray-400"
        } rounded-md cursor-pointer w-full`}
      >
        <select
          {...props}
          required
          className="peer appearance-none outline-none bg-transparent text-content font-semibold w-full p-2 cursor-pointer"
          defaultValue={""}
        >
          <option
            selected
            defaultValue=""
            className="text-zinc-100"
            disabled
            hidden
          ></option>
          {Object.keys(addressTypes).map((key) => (
            <option key={key} value={key}>
              {addressTypes[key as keyof typeof addressTypes].value}
            </option>
          ))}
        </select>
        <span className="peer-valid:hidden absolute top-1/2 -translate-y-1/2 left-2 text-sm font-semibold text-zinc-300">
          Tipo
        </span>
        <FaChevronDown className="absolute  fill-brand-500 top-1/2 -translate-y-1/2 right-2 transition-all peer-focus:rotate-180" />
      </label>
      {!!error && (
        <small className="font-semibold text-danger text-sm">{error}</small>
      )}
    </>
  );
};
