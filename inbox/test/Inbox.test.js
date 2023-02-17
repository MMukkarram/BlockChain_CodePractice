const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // when we declare web3, we used Capital Web3 because of the contructor function we use later on and also due to the instance
const web3 = new Web3(ganache.provider()); // ganache.provider() will change according to the network current we are deploying our contract on local network ganache, so it will change when we live or on rinkybey etc
const {abi, bytecode}= require('../compile'); // getting interface (ABI) and deployed bytecode of our contract from compile.js file

let accounts;
let inbox;
beforeEach(async () => {

    // Get a list of all account (local account created by the ganache for testing. 
    // These are open account ie without passwords for testing)
    
 /* This is something with dirty code we use async in foreach and await funtion which is look pretier
    web3.eth.getAccounts().then(fetchedAcounts => {
        console.log(fetchedAcounts);
    }); */

    accounts = await web3.eth.getAccounts(); //await is basically wait to complete the request first then execute further

    //Use one of these account for to deploy.

    inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ['Hi. This is the message for Inbox constructor to initialize the message']})
     // basically we pass bytecode and the contructor arguments in deploy which is used in Inbox constuctor.
    .send({from: accounts[0], gas:'1000000'}); 
    // we call send method to send the transactions and also mention some amount of gas fees which is required to complete the transaction
    
});

describe('Inbox Testing', () => {
    it('Deploys a contract', () => { 
        console.log(inbox);
    });
});


/*
// Code for understaing mocha testing
class Car{
    park(){
        return "parked";
    }
    onTheWay(){
        return "Running";
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe("Car Class Test cases", () => {
it("park func test case", () => {
    assert.equal(car.park(),"parked");
});
it("onTheWay func test case", () => {
    assert.equal(car.onTheWay(),"Running");
});
});*/