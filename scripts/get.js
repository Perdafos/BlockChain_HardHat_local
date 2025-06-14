import hre from "hardhat";

async function main() {
    const perdafosFactory = await hre.ethers.getContractFactory("Perdafos");
    const perdafos = await perdafosFactory.attach("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");

    const pemilik = await perdafos.getPemilik()
    const textRaw = await perdafos.textRaw()

    await perdafos.waitForDeployment();
    console.log("perdafos deployed to:", perdafos.target);
    console.log(`text = ${textRaw}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});