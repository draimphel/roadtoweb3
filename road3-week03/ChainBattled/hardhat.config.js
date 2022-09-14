require("@nomicfoundation/hardhat-toolbox");


const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more



module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};