const { PublicKey } = require("@solana/web3.js");
const { connection } = require("./config");

async function airdrop(publicKey, amount) {
    console.log(`Airdropping ${amount / LAMPORTS_PER_SOL} SOL to ${publicKey}...`);
    const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey));
    await connection.confirmTransaction({signature: airdropSignature});
    console.log('Airdrop complete!');
}

module.exports = airdrop;