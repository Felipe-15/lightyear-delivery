import { CEPResponse } from "@/interfaces/CEPResponse";

export const getAddressByCEP = async (cep: string) => {
  console.log("Buscou cep!");
  try {
    const addressData = (await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    ).then((data) => data.json())) as CEPResponse;

    const mappedValues = {
      state: addressData.estado,
      district: addressData.bairro,
      complement: addressData.complemento,
      city: addressData.localidade,
      street: addressData.logradouro,
    };

    return mappedValues;
  } catch {
    console.error("Failed while request cep info!");
  }
};
