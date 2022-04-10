require('dotenv').config();
const express = require('express');
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const app = express();

const PORT = process.env.PORT || 4000;

const web3 = new Web3(new HDWalletProvider(process.env.PRIVATE_KEY, process.env.RPC_URL));

const getBalance = async () => {
    const balance = await web3.eth.getBalance(process.env.ACCOUNT_ADDRESS);
    const converted = web3.utils.fromWei(balance, 'ether');

    return converted;
}

getBalance();

app.get('/', (req, res) => {
    res.send('App Works !!!!');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});