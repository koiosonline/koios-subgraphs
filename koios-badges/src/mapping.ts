import {
  Transfer as TransferEvent,
  KoiosNFT as TokenContract
} from "../generated/KoiosNFT/KoiosNFT"

import {
  Token, User
} from '../generated/schema'


export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params._tokenId.toString());
  if (!token) {
    token = new Token(event.params._tokenId.toString());
    token.creator = event.params._to.toHexString();
    token.tokenID = event.params._tokenId;

    let tokenContract = TokenContract.bind(event.address);
    token.contentURI = tokenContract.tokenURI(event.params._tokenId);
  }
  token.owner = event.params._to.toHexString();
  token.save();

  let user = User.load(event.params._to.toHexString());
  if (!user) {
    user = new User(event.params._to.toHexString());
    user.save();
  }
}
