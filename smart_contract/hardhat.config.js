require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/G_6s6oMbN5PYPNQCV3eZ2VciMC7_pDBK",
      accounts: ['bf71626dfbf7d852fe69491bb340cb6136559ff1d018c1083365171097dbf90b']
    }
  }

};
