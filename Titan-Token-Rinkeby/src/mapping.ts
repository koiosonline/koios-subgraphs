import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  ERC20Token, // The contract itself
  Transfer
} from "../generated/ERC20Token/ERC20Token"

import {
  User,
} from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let contract = ERC20Token.bind(event.address)
  let erc20Symbol = contract.symbol()
  let contentURI = contract.tokenURI();
  log.info("In handleTransfer " + erc20Symbol, []);
  changeUser(erc20Symbol, contentURI, event.params.from.toHex(), event.params.to.toHex(), -event.params.value);
  changeUser(erc20Symbol, contentURI, event.params.to.toHex(), "0x0000000000000000000000000000000000000000", event.params.value);
}

function changeUser(erc20Symbol: string, contentURI: string, address: string, addressTo: string, delta: BigInt): void { // note delta can be neg.
  if (address == "0x0000000000000000000000000000000000000000") return // skip 0 address
  let user = User.load(address)
  if (!user)
    user = newUser(address)
  user.erc20Symbol = erc20Symbol
  user.contentURI = contentURI
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

/*

{
  users(where: {
    erc20Symbol:"Titan"}) {
    id
    address
    balance
    erc20Symbol
  }
}

query {
  users {
    id
    address
    balance
    erc20Symbol
  }
}
*/