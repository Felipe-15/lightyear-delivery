import { ADDRESS_TYPES } from "@/interfaces/AddressTypes";

export type FormFields = {
  cep: string;
  fullname: string;
  phone: string;
  type: ADDRESS_TYPES;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
};
