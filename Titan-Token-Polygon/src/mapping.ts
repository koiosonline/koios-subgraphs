import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  Titan, // The contract itself
  Transfer
} from "../generated/Titan/Titan"

import {
  User,
} from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let contract = Titan.bind(event.address)
  let erc20Symbol = contract.symbol()
  log.info("In handleTransfer " + erc20Symbol, []);
  changeUser(erc20Symbol, event.params.from.toHex(), event.params.to.toHex(), -event.params.value);
  changeUser(erc20Symbol, event.params.to.toHex(), "0x0000000000000000000000000000000000000000", event.params.value);
}

function changeUser(erc20Symbol: string, address: string, addressTo: string, delta: BigInt): void { // note delta can be neg.
  if (address == "0x0000000000000000000000000000000000000000") return // skip 0 address
  let user = User.load(address)
  if (!user)
    user = newUser(address)
  user.erc20Symbol = erc20Symbol
  user.balance = user.balance + delta
  if(addressTo == "0x49a4d8e05a3b93728d3fe95bf6c1fd6520d26fca") 
    user.transferedMint = user.transferedMint + delta.abs()
  user.save()
}

function newUser(address: string): User {
  let user = new User(address)
  user.address = address
  user.balance = BigInt.fromI32(0)
  user.transferedMint = BigInt.fromI32(0)
  return user
}