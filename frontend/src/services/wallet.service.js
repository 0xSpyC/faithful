import {ABI} from "../helper/abi.js";
import {ethers} from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
// const publicAddr = signer.getAddress();
// const faithfulContract = new ethers.Contract("0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE", ABI, signer);

export async function setupMetamask(ABI) {
    let assets = {}
    await provider.send("eth_requestAccounts", []);
    let signer = provider.getSigner();
    let address = await signer.getAddress();
    let balance = await SCgetBalance(address);
    let ffulbalance = await SCgetFFULBalance(signer, address);
    assets.addr = address;
    assets.BNB = balance;
    assets.FFUL= ffulbalance;
    console.log(assets)
    return assets;
}

export async function SCgetBalance(Addr) {
	let balance = await provider.getBalance(Addr);
	balance = ethers.utils.formatUnits(balance.toBigInt(), 18);
	return balance;
}

export async function SCgetFFULBalance(signer, Addr) {
    let faithfulContract = new ethers.Contract("0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE", ABI, signer);
    console.log(faithfulContract)
    //console.log(ethers.encodeFunctionResult("balanceOf", ["0xFaC8613f930515C8E4a2B6E70B5B61918354b348"]))
    // let ffulbalance
    console.log(Addr)
	faithfulContract.owner().then((response) => console.log(response));
    // console.log(ffulbalance)
	// ffulbalance = ethers.utils.formatUnits(ffulbalance.toBigInt(), 18);
	//  return ffulbalance;
}

// async function SCaddProduct(name, details, imageCID, hashCID) {
// 	if (name.length < 3 || name.length > 24) {
// 		console.log("Product name must be between 3 and 24 characters");
// 		return false;
// 	}
// 	if (details.length >= 8) {
// 		console.log("Product details must be at least 8 characters");
// 		return false;
// 	}
// 	await faithfulContract.addProduct(name, details, imageCID, hashCID);
// 	return true;
// }
/*
async function SCgetProduct(id) {
	let product = await faithfulContract.products(id);
	return product;
}*/
