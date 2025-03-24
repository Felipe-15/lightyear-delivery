"use client";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { maskInput } from "@/utils/maskInput";
import { useForm } from "react-hook-form";

import { createAddress } from "@/services/address/createAddress";
import { FormFields } from "./types";
import { useRouter } from "next/navigation";
import { Select } from "@/app/components/Select";

export default function MarsAddressPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => {
    const { batch, fullname, phone, type } = data;
    createAddress({
      fullname,
      phone,
      type,
      addressDetails: { batch },
      planet: "mars",
    });
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 5000))}
      className="flex flex-col px-3 gap-3 md:max-w-[660px] md:mx-auto"
    >
      <legend className="font-semibold text-lg text-content">
        Dados do endereço
      </legend>
      <fieldset className="flex gap-3">
        <Input
          {...register("batch", {
            required: "Lote é obrigatório!",
            maxLength: { value: 4, message: "Número de lote são 4 dígitos" },
            minLength: { value: 4, message: "Número de lote são 4 dígitos" },
          })}
          error={errors.batch?.message}
          onChange={(e) => {
            const cleanedBatch = e.target.value
              .replace(/[^0-9]/g, "")
              .slice(0, 4);
            setValue("batch", cleanedBatch);
          }}
          placeholder="Número do lote"
          customClasses={{ container: "md:w-full" }}
        />
        <Select
          {...register("type", { required: "Tipo é obrigatório!" })}
          error={errors.type?.message}
        />
      </fieldset>

      <Input
        {...register("fullname", {
          required: "Nome é obrigatório!",
        })}
        error={errors.fullname?.message}
        placeholder="Nome completo"
      />
      <Input
        {...register("phone", {
          required: "Telefone é obrigatório!",
        })}
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
