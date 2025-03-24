import { EarthAddress } from "@/interfaces/EarthAddress";
import { MarsAddress } from "@/interfaces/MarsAddress";

export type DetailsProps =
  | {
      type: "earth";
      addressDetails: EarthAddress;
    }
  | {
      type: "mars";
      addressDetails: MarsAddress;
    };
