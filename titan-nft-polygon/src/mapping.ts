import { Transfer as TransferEvent, TitanNFT as NFTContract } from "../generated/TitanNFT/TitanNFT";
import { Nft } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let nft = Nft.load(event.transaction.hash.toHex());

  if(!nft) {
    nft = new Nft(event.transaction.hash.toHex());
  }

  nft.to = event.params.to.toHex();
  nft.from = event.params.from.toHex();
  nft.owner = event.params.to.toHex();
  
  const tokenContract = NFTContract.bind(event.address);
  nft.contentURI = tokenContract.tokenURI(event.params.tokenId);

  nft.save();
}
