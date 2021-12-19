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
  changeUser(erc20Symbol, event.params.from.toHex(), -event.params.value);
  changeUser(erc20Symbol, event.params.to.toHex(), event.params.value);
}

function changeUser(erc20Symbol: string, address: string, delta: BigInt): void { // note delta can be neg.
  if (address == "0x0000000000000000000000000000000000000000") return // skip 0 address
  let user = User.load(address)
  if (!user)
    user = newUser(address)
  user.erc20Symbol = erc20Symbol
  user.balance = user.balance + delta
  user.save()
}

function newUser(address: string): User {
  let user = new User(address)
  user.address = address
  user.balance = BigInt.fromI32(0)
  return user
}