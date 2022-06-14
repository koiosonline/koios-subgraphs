import { Transfer as TransferEvent, TitanNFT as NFTContract } from "../generated/TitanNFT/TitanNFT";
import { Nft, ContractInfo } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {

    // NFT Owner
  let nft = Nft.load(event.transaction.hash.toHex());

  if(!nft) {
    nft = new Nft(event.transaction.hash.toHex());
  }

  nft.to = event.params.to.toHex();
  nft.from = event.params.from.toHex();
  nft.owner = event.params.to.toHex();
  nft.tokenID = event.params.tokenId;
  
  const tokenContract = NFTContract.bind(event.address);
  nft.contentURI = tokenContract.tokenURI(event.params.tokenId);

  nft.save();

  // ContractInfo 
  let contractInfo = ContractInfo.load(event.transaction.hash.toHex());
  if(!contractInfo) {
    contractInfo = new ContractInfo(event.transaction.hash.toHex());
  }

  contractInfo.totalSupply = tokenContract._maxSupply();
  contractInfo.totalMinted = tokenContract.totalSupply();

  contractInfo.save();

}
