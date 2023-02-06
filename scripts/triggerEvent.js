const ethers = require('ethers');
require('dotenv').config();

async function main() {
    //use proxy address deployed
    const MY_EMIT_PROXY =
        "0x8272b09F90a55983cceC1954C1bC171A09243C25";
    //target contract
    const TARGET_CONTRACT = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    //call proxy using its event and address
    const contract = await ethers.getContractAt(
        "EmitTheWinnerEvent",
        MY_EMIT_PROXY
    );

    await contract.EmitTheWinnerEvent(TARGET_CONTRACT);
    console.log("Proxy triggered! see if your proxy addy is at target contract event in goerli etherscan");
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

