const { createMint, TOKEN_PROGRAM_ID } = require("@solana/spl-token");
const { connection, payer } = require("./config");

async function createMintForTokens(payer, mintAuthority) {
    const mint = await createMint(connection, payer, mintAuthority, null, 6, TOKEN_PROGRAM_ID);
    console.log("Mint created at ", mint.toBase58());
    return mint;
}

module.exports = createMintForTokens;