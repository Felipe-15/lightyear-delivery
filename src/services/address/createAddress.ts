import { Address } from "@/interfaces/Address";
import { getStorage, setStorage } from "@/utils/storage";

export const createAddress = (
  data: Omit<Address, "id"> & { planet: "earth" | "mars" }
) => {
  const currentAddresses = getStorage<Address[]>("addresses");

  const newAddress = {
    ...data,
    id: Math.random().toString(36).substring(2, 12),
  };

  if (currentAddresses) {
    setStorage("addresses", [...currentAddresses, newAddress]);
    return;
  }

  setStorage("addresses", [newAddress]);
};
