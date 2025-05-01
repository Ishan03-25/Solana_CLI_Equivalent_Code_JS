const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));
const payer = Keypair.fromSecretKey(Uint8Array.from([
    //your secret key
]));

module.exports = { connection, payer };