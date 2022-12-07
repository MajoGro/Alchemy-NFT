async function main() {
    const FrogCoin = await ethers.getContractFactory("FrogCoin");

    // Start deployment, returning a promise that resolves to a contract object
    const frogCoin = await FrogCoin.deploy();
    console.log("Contract deployed to address:", frogCoin.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });