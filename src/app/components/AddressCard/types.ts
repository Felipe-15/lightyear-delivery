import { ADDRESS_TYPES } from "@/interfaces/AddressTypes";
import { EarthAddress } from "@/interfaces/EarthAddress";
import { MarsAddress } from "@/interfaces/MarsAddress";

export interface AddressCardProps {
  id: string;
  fullname: string;
  planet: "earth" | "mars";
  phone: string;
  type: ADDRESS_TYPES;
  addressDetails: EarthAddress | MarsAddress;
  handleDeleteAddress: () => void;
}
