import hre from "hardhat";

async function main() {
    const perdafosFactory = await hre.ethers.getContractFactory("Perdafos");
    const perdafos = await perdafosFactory.attach("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");

    const textRaw = await perdafos.setText("Dafa Ghaitsa")

    await perdafos.waitForDeployment();
    console.log(`text = ${textRaw}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});