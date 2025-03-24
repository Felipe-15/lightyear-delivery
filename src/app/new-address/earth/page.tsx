"use client";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { Select } from "@/app/components/Select";
import { createAddress } from "@/services/address/createAddress";
import { getAddressByCEP } from "@/services/getAddressByCEP";
import { maskInput } from "@/utils/maskInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormFields } from "./types";

export default function EarthAddressPage() {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const router = useRouter();

  const onSubmit = (data: FormFields) => {
    const { fullname, phone, type, ...addressDetails } = data;
    createAddress({
      fullname,
      phone,
      type,
      addressDetails,
      planet: "earth",
    });
    router.push("/");
  };

  const handleGetInfoByCEP = async (cep: string) => {
    const cleanedCEP = cep.replace(/[^0-9]/g, "");
    if (cleanedCEP.length !== 8) return;
    try {
      const addressInfo = await getAddressByCEP(cep);

      if (!addressInfo) return;

      for (const address of Object.entries(addressInfo)) {
        const [fieldName, value] = address;

        setValue(fieldName as keyof FormFields, value);
      }
    } catch {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 5000))}
      className="flex flex-col px-3 gap-3 md:max-w-[660px] md:mx-auto"
    >
      <legend className="font-semibold text-lg text-content">
        Dados do endereço
      </legend>
      <Input
        {...register("cep", {
          required: "CEP é obrigatório!",
          validate: (value) => {
            const cleanedValue = value.replace(/[^0-9]/g, "");
            if (cleanedValue.length !== 8) return "Formato inválido de CEP!";
            return true;
          },
        })}
        placeholder="CEP"
        error={errors?.cep?.message}
        onChange={(e) => {
          const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
          if (cleanedValue.length > 8) {
            setValue("cep", e.target.value.slice(0, 9));
            return;
          }
          setValue("cep", maskInput("#####-###", cleanedValue));

          if (cleanedValue.length === 8) {
            handleGetInfoByCEP(cleanedValue);
          }
        }}
        customClasses={{ container: "md:w-1/2 md:pr-2" }}
      />
      <fieldset className="w-full flex flex-col md:flex-row gap-3">
        <Input
          {...register("fullname", {
            required: "Nome é obrigatório!",
          })}
          error={errors.fullname?.message}
          placeholder="Nome completo"
          customClasses={{ container: "w-full" }}
        />
        <Input
          {...register("phone", {
            required: "Telefone é obrigatório!",
            minLength: { value: 16, message: "Formato inválido de número!" },
            maxLength: { value: 16, message: "Formato inválido de número!" },
          })}
          customClasses={{ container: "w-full" }}
          error={errors.phone?.message}
          onChange={(e) => {
            const cleanedValue = e.target.value.replace(/[^0-9]/g, "");

            if (cleanedValue.length > 11) {
              setValue("phone", e.target.value.slice(0, 16));
              return;
            }
            setValue("phone", maskInput("(##) # ####-####", cleanedValue));
          }}
          placeholder="Telefone"
        />
      </fieldset>
      <Select
        {...register("type", { required: "Tipo é obrigatório!" })}
        error={errors.type?.message}
      />
      <fieldset className="w-full flex flex-col md:flex-row gap-3">
        <Input
          {...register("state", {
            required: "Estado é obrigatório!",
          })}
          error={errors.state?.message}
          customClasses={{ container: "w-full" }}
          placeholder="Estado"
        />
        <Input
          {...register("city", {
            required: "Cidade é obrigatória!",
          })}
          error={errors.city?.message}
          customClasses={{ container: "w-full" }}
          placeholder="Cidade"
        />
      </fieldset>
      <fieldset className="flex gap-3">
        <Input
          {...register("street", {
            required: "Rua é obrigatória!",
          })}
          error={errors.street?.message}
          placeholder="Rua"
          customClasses={{ container: "w-full" }}
        />
        <Input
          {...register("number", {
            required: "Número é obrigatório!",
          })}
          error={errors.number?.message}
          placeholder="Número"
          customClasses={{ container: "max-w-[100px]" }}
        />
      </fieldset>
      <fieldset className="w-full flex flex-col md:flex-row gap-3">
        <Input
          {...register("district", {
            required: "Bairro é obrigatório!",
          })}
          error={errors.district?.message}
          placeholder="Bairro"
          customClasses={{ container: "w-full" }}
        />
        <Input
          {...register("complement")}
          error={errors.complement?.message}
          placeholder="Referência"
          customClasses={{ container: "w-full" }}
        />
      </fieldset>
      <div className="flex gap-3 w-full items-center mt-6 mb-4 md:max-w-[240px] md:ml-auto md:mt-3">
        <Button width="full">Salvar</Button>
        <Button
          type="button"
          onClick={() => {
            router.push("/");
          }}
          width="full"
          color="outline"
        >
          Descartar
        </Button>
      </div>
    </form>
  );
}
