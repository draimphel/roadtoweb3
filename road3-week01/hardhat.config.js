require("@nomicfoundation/hardhat-toolbox");


require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks: {
    mumbai: {
      url: GOERLI_URL,
      gasPrice: 25000000000,
      accounts: [PRIVATE_KEY]
    },
    etherscan: {
      url: "https://mumbai.polygonscan.com",
      apiKey: {
        polygonMumbai: process.env.ETHERSCAN_API_KEY
      }

    }
  }
};
