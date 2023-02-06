require('dotenv').config();
const hre = require("hardhat");
async function main() {
    //deploy with hardhat ethers factory
    const Factory = await hre.ethers.getContractFactory(
        "EmitTheWinnerEvent"
    );
    const contract = await Factory.deploy();
    await contract.deployed();
    //log console address to use later
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
