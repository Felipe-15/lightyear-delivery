import { Address } from "@/interfaces/Address";
import { getStorage, setStorage } from "@/utils/storage";

export const deleteAddress = (id: string) => {
  const currentAddress = getStorage<Address[]>("addresses")!;

  setStorage(
    "addresses",
    currentAddress.filter((address) => address.id !== id)
  );
};
