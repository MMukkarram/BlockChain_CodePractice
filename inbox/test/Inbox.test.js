const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // when we declare web3, we used Capital Web3 because of the contructor function we use later on and also due to the instance
const web3 = new Web3(ganache.provider()); // ganache.provider() will change according to the network current we are deploying our contract on local network ganache, so it will change when we live or on rinkybey etc




// Code for understaing mocha testing
class Car{
    park(){
        return "parked";
    }
    onTheWay(){
        return "Running";
    }
}

describe("Car Class Test cases", () => {
it("park func test case", () => {
    const car = new Car();
    assert.equal(car.park(),"parked");
});
it("onTheWay func test case", () => {
    const car = new Car();
    assert.equal(car.onTheWay(),"Running");
});
});