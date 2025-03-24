import { DetailsProps } from "./types";

export const Details = ({ type, addressDetails }: DetailsProps) => {
  return (
    <>
      {type === "earth" ? (
        <>
          <span className="text-xs text-gray-700">
            {addressDetails.city}, {addressDetails.state}, {addressDetails.cep}
          </span>
          <span className="text-xs text-gray-700">
            {addressDetails.complement}
          </span>
        </>
      ) : (
        <span className="text-xs text-gray-700 font-bold">
          Lote {addressDetails.batch}
        </span>
      )}
    </>
  );
};
