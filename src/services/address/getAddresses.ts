import { Address } from "@/interfaces/Address";
import { getStorage } from "@/utils/storage";

export const getAddresses = () => {
  return getStorage<Address[]>("addresses") || [];
};
