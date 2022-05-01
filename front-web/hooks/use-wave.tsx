import { useContractFunction } from "@usedapp/core";
import { contract } from "../config";

export const useWave = () => {
  return useContractFunction(contract, "wave");
};
