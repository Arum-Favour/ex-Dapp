require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TymeyPi4fDPjSIkaJ9LhjgrZfffN2X5e",
      accounts: [
        "5358a9a7ac44b5ae97ec8e4d95425bd3d505c17bc0e34bdc56cf0ac1b4bd8b2b",
      ],
    },
  },
};
