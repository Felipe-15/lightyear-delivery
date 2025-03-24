import { ADDRESS_TYPES } from "@/interfaces/AddressTypes";

export type FormFields = {
  batch: string;
  phone: string;
  fullname: string;
  type: ADDRESS_TYPES;
};
