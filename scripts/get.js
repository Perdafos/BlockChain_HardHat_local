import hre from "hardhat";

async function main() {
    const perdafosFactory = await hre.ethers.getContractFactory("Perdafos");
    const perdafos = await perdafosFactory.deploy();

    await perdafos.waitForDeployment();
    console.log("perdafos deployed to:", perdafos.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});