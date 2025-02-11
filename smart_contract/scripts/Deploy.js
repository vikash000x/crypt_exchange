const hre = require("hardhat");

const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions"); // Get contract factory
  const transactionsContract = await transactionsFactory.deploy(); // Deploy contract

  await transactionsContract.waitForDeployment(); // ✅ Corrected deployment await

  console.log("Transactions contract deployed to:", await transactionsContract.getAddress()); // ✅ Corrected address retrieval
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
