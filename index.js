const { LAMPORTS_PER_SOL } = require("@solana/web3.js");
const airdrop = require("./airdrop");
const { payer } = require("./config");
const createMintForTokens = require("./createMint");
const mintNewTokens = require("./mintTokens");

async function main() {
    await airdrop(payer.publicKey, LAMPORTS_PER_SOL);
    const mint = await createMintForTokens(payer, payer.publicKey);
    //Here, for example, amount is taken to 100
    await mintNewTokens(mint, payer.publicKey, 100);
}

main().catch(console.error);