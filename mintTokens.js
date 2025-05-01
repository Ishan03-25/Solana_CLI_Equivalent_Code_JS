const { getOrCreateAssociatedTokenAccount, mintTo } = require("@solana/spl-token");
const { connection, payer } = require("./config");
const { PublicKey } = require("@solana/web3.js");

//For example, amount value is set to 100
async function mintNewTokens(mint, to, amount) {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, payer, mint, new PublicKey(to));
    console.log("Token account created at ", tokenAccount.address.toBase58());
    await mintTo(connection, payer, mint, tokenAccount.address.toBase58());
    console.log("Minted ", amount, "tokens to ", tokenAccount.address.toBase58());
}

module.exports = mintNewTokens;