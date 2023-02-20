# BlockChain_CodePractice

Install Solidity compiler:
   npm install --save solc

Initall ganache for local deployment:
   npm install --save mocha ganache-cli
   
For running test cases.
should change script => test tag value to "mocha" in package.json file

Signup on infura.io for deployment your test contract. select the goreli network or any other according to your use case. and copy the link. which we use further during deployment.
https://goerli.infura.io/v3/6db0b97305bf4769ae3bc3b11e74dbab

Now install truffle package for deployment on local machine using command (and make sure you should be in main folder in this case Inbox:
    npm install --save truffle-hdwallet-provider
 
For deployment run this command ( make sure you should be in main folder in this case Inbox) 
 node [fileName.js] // In out case  node deploy.js.
