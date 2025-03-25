import { InputProps } from "./types";

export const Input = ({
  customClasses,
  error,
  icon: Icon,
  ...props
}: InputProps) => {
  return (
    <div className={`${customClasses?.container}`}>
      <label
        className={`flex items-center w-full py-3 px-3 rounded-lg border ${
          !!error ? "border-danger" : "border-gray-400"
        } gap-2 ${customClasses?.label}`}
      >
        {Icon && <Icon size={20} className="fill-zinc-400" />}
        <input
          {...props}
          className={`outline-none text-sm font-medium w-full placeholder:text-zinc-300 ${customClasses?.input}`}
        />
      </label>
      {!!error && (
        <small className="font-semibold text-danger text-sm">{error}</small>
      )}
    </div>
  );
};
