# Proof of Approval - zkgraph

### This zkgraph tracks all the approved address for USDT on sepolia

#### USDT address on Sepolia Testnet: 0x7169D38820dfd117C3FA1f22a697dBA58d90BA06

#### Event being read on Sepolia USDT: Approval(address,address,uint256)


## Usage CLI

> Note: Only `full` image will be processed by zkOracle node. `local` (generated by commands ending with `--local` option) means the zkGraph is compiled locally and only contains partial computation (so that proving and executing will be faster).

The workflow of local zkGraph development must follow: `Develop` (code in /src) -> `Compile` (get compiled wasm image) -> `Execute` (get expected output) -> `Prove` (generate input and pre-test for actual proving in zkOracle) -> `Verify` (verify proof on-chain).

To upload and publish your zkGraph, you should `Upload` (upload code to IPFS), and then `Publish` (register zkGraph on onchain zkGraph Registry).


## Commonly used commands

- **compile**: `npx zkgraph compile`
- **exec**: `npx zkgraph exec <block id>`
- **prove**: ` npx zkgraph prove <block id> <expected state> -i|-t|-p`  
- ……

Read more: https://github.com/hyperoracle/zkgraph-cli#cli
