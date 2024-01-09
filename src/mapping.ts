//@ts-ignore
import { require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Block, Event, Address } from "@hyperoracle/zkgraph-lib";

let addr = Bytes.fromHexString('0x7169D38820dfd117C3FA1f22a697dBA58d90BA06');
let esig_sync = Bytes.fromHexString("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925");

export function handleBlocks(blocks: Block[]): Bytes {
  // init output state
  let state: Bytes;

  // #1 can access all (matched) events of the latest block
  let events: Event[] = blocks[0].events;

  // #2 also can access (matched) events of a given account address (should present in yaml first).
  // a subset of 'events'
  let eventsByAcct: Event[] = blocks[0].account(addr).events;

  // #3 also can access (matched) events of a given account address & a given esig  (should present in yaml first).
  // a subset of 'eventsByAcct'
  let eventsByAcctEsig: Event[] = blocks[0].account(addr).eventsByEsig(esig_sync)

  // require match event count > 0
  require(eventsByAcctEsig.length > 0)

  // this 2 way to access event are equal effects, alway true when there's only 1 event matched in the block (e.g. block# 2279547 on sepolia).
  require(
    events[0].data == eventsByAcct[0].data 
    && events[0].data == eventsByAcctEsig[0].data
  );

  // set state to the address of the 1st (matched) event, demo purpose only.
  state = Address.fromString(events[0].topic2.toHexString());
  console.log(events[0].topic2.toHexString());

  return state
}
