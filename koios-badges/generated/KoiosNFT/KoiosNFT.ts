// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewBadge extends ethereum.Event {
  get params(): NewBadge__Params {
    return new NewBadge__Params(this);
  }
}

export class NewBadge__Params {
  _event: NewBadge;

  constructor(event: NewBadge) {
    this._event = event;
  }

  get _templateid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class KoiosNFT__templatesResult {
  value0: string;
  value1: string;
  value2: BigInt;
  value3: boolean;
  value4: boolean;
  value5: boolean;

  constructor(
    value0: string,
    value1: string,
    value2: BigInt,
    value3: boolean,
    value4: boolean,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }
}

export class KoiosNFT__GetTemplateInfoResultValue0Struct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get cid(): string {
    return this[1].toString();
  }

  get managedBy(): BigInt {
    return this[2].toBigInt();
  }

  get SelfMint(): boolean {
    return this[3].toBoolean();
  }

  get SelfBurn(): boolean {
    return this[4].toBoolean();
  }

  get AllowTransfer(): boolean {
    return this[5].toBoolean();
  }
}

export class KoiosNFT extends ethereum.SmartContract {
  static bind(address: Address): KoiosNFT {
    return new KoiosNFT("KoiosNFT", address);
  }

  ADMINTOKEN(): BigInt {
    let result = super.call("ADMINTOKEN", "ADMINTOKEN():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ADMINTOKEN(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ADMINTOKEN", "ADMINTOKEN():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BADGECREATORTOKEN(): BigInt {
    let result = super.call(
      "BADGECREATORTOKEN",
      "BADGECREATORTOKEN():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BADGECREATORTOKEN(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BADGECREATORTOKEN",
      "BADGECREATORTOKEN():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CONTRACTTOKEN(): BigInt {
    let result = super.call("CONTRACTTOKEN", "CONTRACTTOKEN():(uint256)", []);

    return result[0].toBigInt();
  }

  try_CONTRACTTOKEN(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "CONTRACTTOKEN",
      "CONTRACTTOKEN():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allTokens(param0: BigInt): BigInt {
    let result = super.call("allTokens", "allTokens(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_allTokens(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("allTokens", "allTokens(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allTokensIndex(param0: BigInt): BigInt {
    let result = super.call(
      "allTokensIndex",
      "allTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_allTokensIndex(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allTokensIndex",
      "allTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  counter(): BigInt {
    let result = super.call("counter", "counter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_counter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("counter", "counter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownedTokens(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "ownedTokens",
      "ownedTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_ownedTokens(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownedTokens",
      "ownedTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ownedTokensIndex(param0: BigInt): BigInt {
    let result = super.call(
      "ownedTokensIndex",
      "ownedTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_ownedTokensIndex(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownedTokensIndex",
      "ownedTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ownedTypedTokens(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "ownedTypedTokens",
      "ownedTypedTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_ownedTypedTokens(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownedTypedTokens",
      "ownedTypedTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ownerOfToken(param0: BigInt): Address {
    let result = super.call("ownerOfToken", "ownerOfToken(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_ownerOfToken(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ownerOfToken",
      "ownerOfToken(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  receivedData(): Bytes {
    let result = super.call("receivedData", "receivedData():(bytes)", []);

    return result[0].toBytes();
  }

  try_receivedData(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("receivedData", "receivedData():(bytes)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  receivedFrom(): Address {
    let result = super.call("receivedFrom", "receivedFrom():(address)", []);

    return result[0].toAddress();
  }

  try_receivedFrom(): ethereum.CallResult<Address> {
    let result = super.tryCall("receivedFrom", "receivedFrom():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  receivedOperator(): Address {
    let result = super.call(
      "receivedOperator",
      "receivedOperator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_receivedOperator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "receivedOperator",
      "receivedOperator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  receivedTokenId(): BigInt {
    let result = super.call(
      "receivedTokenId",
      "receivedTokenId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_receivedTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "receivedTokenId",
      "receivedTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  templateOf(param0: BigInt): BigInt {
    let result = super.call("templateOf", "templateOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_templateOf(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("templateOf", "templateOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  templates(param0: BigInt): KoiosNFT__templatesResult {
    let result = super.call(
      "templates",
      "templates(uint256):(string,string,uint256,bool,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new KoiosNFT__templatesResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toBoolean(),
      result[5].toBoolean()
    );
  }

  try_templates(
    param0: BigInt
  ): ethereum.CallResult<KoiosNFT__templatesResult> {
    let result = super.tryCall(
      "templates",
      "templates(uint256):(string,string,uint256,bool,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KoiosNFT__templatesResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBoolean(),
        value[4].toBoolean(),
        value[5].toBoolean()
      )
    );
  }

  typedTokens(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "typedTokens",
      "typedTokens(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_typedTokens(param0: BigInt, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "typedTokens",
      "typedTokens(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  typedTokensIndex(param0: BigInt): BigInt {
    let result = super.call(
      "typedTokensIndex",
      "typedTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_typedTokensIndex(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "typedTokensIndex",
      "typedTokensIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC721Received(
    _operator: Address,
    _from: Address,
    _tokenId: BigInt,
    _data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    _operator: Address,
    _from: Address,
    _tokenId: BigInt,
    _data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ownerOf(_tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenByIndex(_index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(_index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(_owner: Address, _index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    _owner: Address,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokensOfType(_type: BigInt): BigInt {
    let result = super.call("tokensOfType", "tokensOfType(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_type)
    ]);

    return result[0].toBigInt();
  }

  try_tokensOfType(_type: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokensOfType",
      "tokensOfType(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_type)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfTypeByIndex(_type: BigInt, _index: BigInt): BigInt {
    let result = super.call(
      "tokenOfTypeByIndex",
      "tokenOfTypeByIndex(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_type),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfTypeByIndex(
    _type: BigInt,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfTypeByIndex",
      "tokenOfTypeByIndex(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_type),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  CreateNewBadge(
    _name: string,
    _cid: string,
    _managedBy: BigInt,
    _SelfMint: boolean,
    _SelfBurn: boolean,
    _AllowTransfer: boolean
  ): BigInt {
    let result = super.call(
      "CreateNewBadge",
      "CreateNewBadge(string,string,uint256,bool,bool,bool):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_cid),
        ethereum.Value.fromUnsignedBigInt(_managedBy),
        ethereum.Value.fromBoolean(_SelfMint),
        ethereum.Value.fromBoolean(_SelfBurn),
        ethereum.Value.fromBoolean(_AllowTransfer)
      ]
    );

    return result[0].toBigInt();
  }

  try_CreateNewBadge(
    _name: string,
    _cid: string,
    _managedBy: BigInt,
    _SelfMint: boolean,
    _SelfBurn: boolean,
    _AllowTransfer: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "CreateNewBadge",
      "CreateNewBadge(string,string,uint256,bool,bool,bool):(uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_cid),
        ethereum.Value.fromUnsignedBigInt(_managedBy),
        ethereum.Value.fromBoolean(_SelfMint),
        ethereum.Value.fromBoolean(_SelfBurn),
        ethereum.Value.fromBoolean(_AllowTransfer)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  GetTemplateId(_tokenId: BigInt): BigInt {
    let result = super.call(
      "GetTemplateId",
      "GetTemplateId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_GetTemplateId(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "GetTemplateId",
      "GetTemplateId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  GetTemplateInfo(
    _templateid: BigInt
  ): KoiosNFT__GetTemplateInfoResultValue0Struct {
    let result = super.call(
      "GetTemplateInfo",
      "GetTemplateInfo(uint256):((string,string,uint256,bool,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(_templateid)]
    );

    return result[0].toTuple() as KoiosNFT__GetTemplateInfoResultValue0Struct;
  }

  try_GetTemplateInfo(
    _templateid: BigInt
  ): ethereum.CallResult<KoiosNFT__GetTemplateInfoResultValue0Struct> {
    let result = super.tryCall(
      "GetTemplateInfo",
      "GetTemplateInfo(uint256):((string,string,uint256,bool,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(_templateid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as KoiosNFT__GetTemplateInfoResultValue0Struct
    );
  }

  nrTemplates(): BigInt {
    let result = super.call("nrTemplates", "nrTemplates():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nrTemplates(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nrTemplates", "nrTemplates():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  checkIsAdmin(): boolean {
    let result = super.call("checkIsAdmin", "checkIsAdmin():(bool)", []);

    return result[0].toBoolean();
  }

  try_checkIsAdmin(): ethereum.CallResult<boolean> {
    let result = super.tryCall("checkIsAdmin", "checkIsAdmin():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkIsBadgeCreator(): boolean {
    let result = super.call(
      "checkIsBadgeCreator",
      "checkIsBadgeCreator():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_checkIsBadgeCreator(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkIsBadgeCreator",
      "checkIsBadgeCreator():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkMayCreate(_templateId: BigInt): boolean {
    let result = super.call(
      "checkMayCreate",
      "checkMayCreate(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_templateId)]
    );

    return result[0].toBoolean();
  }

  try_checkMayCreate(_templateId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkMayCreate",
      "checkMayCreate(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_templateId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _baseURI(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class CreateTokenCall extends ethereum.Call {
  get inputs(): CreateTokenCall__Inputs {
    return new CreateTokenCall__Inputs(this);
  }

  get outputs(): CreateTokenCall__Outputs {
    return new CreateTokenCall__Outputs(this);
  }
}

export class CreateTokenCall__Inputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _templateId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateTokenCall__Outputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }
}

export class CreateTokensCall extends ethereum.Call {
  get inputs(): CreateTokensCall__Inputs {
    return new CreateTokensCall__Inputs(this);
  }

  get outputs(): CreateTokensCall__Outputs {
    return new CreateTokensCall__Outputs(this);
  }
}

export class CreateTokensCall__Inputs {
  _call: CreateTokensCall;

  constructor(call: CreateTokensCall) {
    this._call = call;
  }

  get _to(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _templateId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateTokensCall__Outputs {
  _call: CreateTokensCall;

  constructor(call: CreateTokensCall) {
    this._call = call;
  }
}

export class BurnTokenCall extends ethereum.Call {
  get inputs(): BurnTokenCall__Inputs {
    return new BurnTokenCall__Inputs(this);
  }

  get outputs(): BurnTokenCall__Outputs {
    return new BurnTokenCall__Outputs(this);
  }
}

export class BurnTokenCall__Inputs {
  _call: BurnTokenCall;

  constructor(call: BurnTokenCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnTokenCall__Outputs {
  _call: BurnTokenCall;

  constructor(call: BurnTokenCall) {
    this._call = call;
  }
}

export class CreateNewBadgeCall extends ethereum.Call {
  get inputs(): CreateNewBadgeCall__Inputs {
    return new CreateNewBadgeCall__Inputs(this);
  }

  get outputs(): CreateNewBadgeCall__Outputs {
    return new CreateNewBadgeCall__Outputs(this);
  }
}

export class CreateNewBadgeCall__Inputs {
  _call: CreateNewBadgeCall;

  constructor(call: CreateNewBadgeCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _cid(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _managedBy(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _SelfMint(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _SelfBurn(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _AllowTransfer(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }
}

export class CreateNewBadgeCall__Outputs {
  _call: CreateNewBadgeCall;

  constructor(call: CreateNewBadgeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateBadgeCall extends ethereum.Call {
  get inputs(): UpdateBadgeCall__Inputs {
    return new UpdateBadgeCall__Inputs(this);
  }

  get outputs(): UpdateBadgeCall__Outputs {
    return new UpdateBadgeCall__Outputs(this);
  }
}

export class UpdateBadgeCall__Inputs {
  _call: UpdateBadgeCall;

  constructor(call: UpdateBadgeCall) {
    this._call = call;
  }

  get _templateid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _cid(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _managedBy(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _SelfMint(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _SelfBurn(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _AllowTransfer(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }
}

export class UpdateBadgeCall__Outputs {
  _call: UpdateBadgeCall;

  constructor(call: UpdateBadgeCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetContractURICall extends ethereum.Call {
  get inputs(): SetContractURICall__Inputs {
    return new SetContractURICall__Inputs(this);
  }

  get outputs(): SetContractURICall__Outputs {
    return new SetContractURICall__Outputs(this);
  }
}

export class SetContractURICall__Inputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }

  get _contractURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetContractURICall__Outputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }
}

export class DestroyCall extends ethereum.Call {
  get inputs(): DestroyCall__Inputs {
    return new DestroyCall__Inputs(this);
  }

  get outputs(): DestroyCall__Outputs {
    return new DestroyCall__Outputs(this);
  }
}

export class DestroyCall__Inputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }
}

export class DestroyCall__Outputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }
}