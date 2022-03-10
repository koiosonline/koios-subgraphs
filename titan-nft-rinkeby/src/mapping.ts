import { Transfer as TransferEvent, TitanNFT as NFTContract } from "../generated/TitanNFT/TitanNFT";
import { NFT } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let nft = NFT.load(event.transaction.hash.toHex());

  if(!nft) {
    nft = new NFT(event.transaction.hash.toHex());
  }

  nft.contentURI = event.params.to.toHex();
  nft.to = event.params.to.toHex();
  nft.from = event.params.from.toHex();

  nft.save();
}
