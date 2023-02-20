const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {abi, bytecode}= require('./compile'); // getting interface (ABI) and deployed bytecode of our contract from compile.js file

const provider = new HDWalletProvider('clump pencil kid exact tomato trade total leisure move total belt morning', // Account mnemonic
                                      'https://goerli.infura.io/v3/6db0b97305bf4769ae3bc3b11e74dbab'); // infura test link

const web3 = new Web3(provider);

const deploy = async () => {
   const accounts = await web3.eth.getAccounts();
   console.log("Deploying our first From Account: ",accounts[0]);
   const result =  await new web3.eth.Contract(abi)
   .deploy({ data: bytecode, arguments: ["Hi There..!!"]})
   .send({from: accounts[0], gas:'1000000'}); 

   console.log("Contract deployed to : ", result.options.address);
};

deploy();