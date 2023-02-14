const path = require('path'); // import path for fetching directory path
const fs = require('fs');     // import fs for reading file content
const solc = require('solc');  // import solc for executing sol file.

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");  // Fetching Inbox.sol from directory
const source = fs.readFileSync(inboxPath, "utf8");                    // Read file content and define what the content type is ie utf8


/***
 * The recommended way to interface with the Solidity compiler, especially for more
 * complex and automated setups is the so-called JSON-input-output interface.
 *
 * See https://docs.soliditylang.org/en/v0.8.5/using-the-compiler.html#compiler-input-and-output-json-description
 * for more details.
 */

const input = {
  language: "Solidity",
  sources: {
    // Each Solidity source file to be compiled must be specified by defining either
    // a URL to the file or the literal file content.
    // See https://docs.soliditylang.org/en/v0.8.5/using-the-compiler.html#input-description
    "Inbox.sol": {
      content: source
    }
  },
  settings: {
    metadata: {
      useLiteralContent: true
    },  
    outputSelection: {
      "*": {
        "*": ["*"]
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);

/*  output is like 
{ contracts: { 'Inbox.sol': { Inbox: [Object] } },
  sources: { 'Inbox.sol': { id: 0 } } }

  so we have to sent abi and bytecode separately from the output object 
  this contracts folder only contain one contrain if it has multiple then multiple output keys will be exported.
*/

exports.abi = output.contracts['Inbox.sol']['Inbox'].abi;
exports.bytecode = output.contracts['Inbox.sol']['Inbox'].evm.bytecode.object;



// Now use command node compile.js to compile the file
