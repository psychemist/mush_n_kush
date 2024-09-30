require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");
const ACCOUNT_PRIVATE_KEY = vars.get("ACCOUNT_PRIVATE_KEY");
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SCROLLSCAN_API_KEY = vars.get("SCROLLSCAN_API_KEY");

module.exports = {
    solidity: "0.8.26",
    networks: {
        "scrollSepolia": {
            url: `https://scroll-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [ACCOUNT_PRIVATE_KEY]
        },
    },
    etherscan: {
        apiKey: {
            "scrollSepolia": SCROLLSCAN_API_KEY
        },
        customChains: [
            {
                network: "scrollSepolia",
                chainId: 534351,
                urls: {
                    apiURL: 'https://api-sepolia.scrollscan.com/api',
                    browserURL: 'https://sepolia.scrollscan.com/',
                },
            },
        ],
    },
    defaultNetwork: "hardhat",
    sourcify: {
        enabled: false,
    },
};
