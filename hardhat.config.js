/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//import {config} from 'dotenv';
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
const { API_URL, PRIVATE_KEY } = process.env;

console.log(PRIVATE_KEY.length);

module.exports = {
  solidity: '0.8.1',
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
