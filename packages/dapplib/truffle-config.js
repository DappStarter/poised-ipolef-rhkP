require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift regret script unique grace cover army gesture'; 
let testAccounts = [
"0x86bcbdb5d7299ce60483236d623246b1246f1de7b3f5d10a0ea8babacf42abc6",
"0xde93a91c50fbf4b5d1e3fa3953c86f9757c395e2cf6184070fc142359a8e52ca",
"0x65f4a01dba4f5b4e1aac4c8cbf53ed6130e35d9ce334158bafe69f0d10d5b168",
"0x5f1da46411b9eaf26fdabef7d93fa8f322a36c713afde2f0c62a24cef845ed71",
"0x156dae613d00c919de4235f70b43ac29c4faba6718dca9677ae62013cef0e9be",
"0xc266d3054dcd5ade88520291a47b34168dda0b351f753042dd7aa2f2c30cfb24",
"0x4c9207d3184f36d077f55805cafb72df098c5f49cd5963b3474bb9d8c250c7f0",
"0x686a0a102cf6464da969aa0dbe6b4fef08323e270d49dfac9bcc955fd2a3fb1e",
"0x7155541573b6bcf9c2014c6f742893556735eaadb96693429b328c07e7cfa78a",
"0x23b0d25199282b249a8f46046b6557316f96b330fbebb581982e365e7bfd5ec9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

