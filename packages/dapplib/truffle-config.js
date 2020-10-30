require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet radar social coach hotel light army gift'; 
let testAccounts = [
"0xc6041c5a567efbc1e7b352775388df471b0442f9fd0db2d5945a3c6fa77f628f",
"0x99071499f3ea04012402ea8a1bd68ecda576cb167fff836f8790d4741038de74",
"0xd28d2f7e2ecfea218113ca016f3a860b9f96c89a8832b7a2cc364a244bbee6eb",
"0x02e3bbf91c9b0d13fb0cf359fd8d2120c6a88711a27e75c745721846f61d24fa",
"0x9f2a2ed78f9af5fe2f1da7bbca4e5b703bd66a65d1857411d9ec8a6a4e9e5ac3",
"0x57101e2bd7fa6492262bd2f23211d137f582548ba2341c992c9c8dbb8d296067",
"0xeb4543b2e1248f814335d5b72894bace7ba46bbb74f91d202cb599b5a5c5b5a9",
"0x544b73c0c5d7dc6a23ec58c230da999bcb9266ce1a85b926b9cee06fb9f58832",
"0x8aa7dfaeb3d62345a312df58aa7803c4641181524a26c457dc70a96a74cfaaf1",
"0x573119c512453d70414316f5fc6e1ecd786df4e8b2d32b63b0f64765946f5aa2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
