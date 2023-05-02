const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x0f1BcC4e358aEd8Ceb22a033698BDE3F2788952C';

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

main();