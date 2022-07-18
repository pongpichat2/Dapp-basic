// deploy file
// use file Greeting in folder Contreacts
const Greeting = artifacts.require("Greeting");
// deployer
module.exports = function (deployer) {
    deployer.deploy(Greeting);
};
  