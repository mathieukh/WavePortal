import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  accounts.forEach((account) => console.log(account.address));
});

const { RINKEBY_API_URL, DEV_WALLET_ACCOUNT_KEY } = process.env;

export default {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: RINKEBY_API_URL,
      accounts: [DEV_WALLET_ACCOUNT_KEY],
    },
  },
};
