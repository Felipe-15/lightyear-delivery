import { EarthAddress } from "./EarthAddress";
import { MarsAddress } from "./MarsAddress";

export interface Address {
  id: string;
  fullname: string;
  planet: "earth" | "mars";
  phone: string;
  type: string;
  addressDetails: EarthAddress | MarsAddress;
}
