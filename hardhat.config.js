require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

require("dotenv").config();

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Validate environment variables
if (!RPC_URL) {
  throw new Error("RPC_URL is not set in .env file");
}
if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY is not set in .env file");
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},

    // local dev convenience
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : undefined,
    },

    // your custom label (monadTestnet) – points to RPC_URL from .env
    monadTestnet: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 10143, // Monad testnet chain ID (actual)
    },
  },
};
