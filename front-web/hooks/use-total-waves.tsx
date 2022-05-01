import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { contract } from "../config";

export const useTotalWaves = (): BigNumber | undefined => {
  const { value, error } =
    useCall({
      contract,
      method: "getTotalWaves",
      args: [],
    }) ?? {};
  if (error || !value) {
    if (error) console.error(error.message);
    return undefined;
  }
  return value[0];
};
