require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "db84b3850e1b4e91a4b151ff045f6a19";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: `https://mainnet.infura.io/v3/${projectId}`,
    //   accounts: [
    //     "d774cb93d72eea481f2c2fccbf8d840bc23465677c451bb975a4d9c14b541a7e",
    //   ],
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${projectId}`,
    //   accounts: [
    //     "d774cb93d72eea481f2c2fccbf8d840bc23465677c451bb975a4d9c14b541a7e",
    //   ],
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
