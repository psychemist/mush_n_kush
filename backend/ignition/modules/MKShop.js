const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const MKShopModule = buildModule("MKShopModule", (m) => {
    const mkshop = m.contract("MKShop");

    return { mkshop };
});

module.exports = MKShopModule;