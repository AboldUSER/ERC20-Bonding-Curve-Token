const BondingBoldToken = artifacts.require("BondingBoldToken");

module.exports = function (deployer) {
  const reserveRatio = 2/3;
  deployer.deploy(BondingBoldToken, reserveRatio);
};
