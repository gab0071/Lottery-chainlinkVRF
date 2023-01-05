require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

// https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan
// npx hardhat run scripts/deploy.js --network mumbai

const URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};

/* To interact with the contract and use the spacificated amount you can use this page https://eth-converter.com/

SMART CONTRACT PROJECT: 0xb877aC7A087abE5014A5164f7e0217b6819241FF
*/