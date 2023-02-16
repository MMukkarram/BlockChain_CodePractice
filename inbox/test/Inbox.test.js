const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // when we declare web3, we used Capital Web3 because of the contructor function we use later on and also due to the instance
const web3 = new Web3(ganache.provider()); // ganache.provider() will change according to the network current we are deploying our contract on local network ganache, so it will change when we live or on rinkybey etc


beforeEach(() => {

    //Get a list of all account (local account created by the ganache for testing. these are open account ie without passwords for testing)
    web3.eth.getAccounts().then(fetchedAcounts => {
        console.log(fetchedAcounts);
    });

    //Use one of these account for to deploy.
});

describe('Inbox Testing', () => {
    it('Deploys a contract', () => { })
});

//module.exports = solc.compile(source, 1).contracts[':Inbox'];

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