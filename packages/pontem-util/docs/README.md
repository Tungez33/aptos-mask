# ethereumjs-util

## Index

### Interfaces

- [ECDSASignature](interfaces/ecdsasignature.md)

### Variables

- [KECCAK256_NULL](#keccak256_null)
- [KECCAK256_NULL_S](#keccak256_null_s)
- [KECCAK256_RLP](#keccak256_rlp)
- [KECCAK256_RLP_ARRAY](#keccak256_rlp_array)
- [KECCAK256_RLP_ARRAY_S](#keccak256_rlp_array_s)
- [KECCAK256_RLP_S](#keccak256_rlp_s)
- [MAX_INTEGER](#max_integer)
- [TWO_POW256](#two_pow256)
- [publicToAddress](#publictoaddress)
- [setLength](#setlength)
- [stripZeros](#stripzeros)

### Functions

- [addHexPrefix](#addhexprefix)
- [baToJSON](#batojson)
- [bufferToHex](#buffertohex)
- [bufferToInt](#buffertoint)
- [defineProperties](#defineproperties)
- [ecrecover](#ecrecover)
- [ecsign](#ecsign)
- [fromRpcSig](#fromrpcsig)
- [fromSigned](#fromsigned)
- [generateAddress](#generateaddress)
- [generateAddress2](#generateaddress2)
- [hashPersonalMessage](#hashpersonalmessage)
- [importPublic](#importpublic)
- [isPrecompiled](#isprecompiled)
- [isValidAddress](#isvalidaddress)
- [isValidChecksumAddress](#isvalidchecksumaddress)
- [isValidPrivate](#isvalidprivate)
- [isValidPublic](#isvalidpublic)
- [isValidSignature](#isvalidsignature)
- [isZeroAddress](#iszeroaddress)
- [keccak](#keccak)
- [keccak256](#keccak256)
- [privateToAddress](#privatetoaddress)
- [privateToPublic](#privatetopublic)
- [pubToAddress](#pubtoaddress)
- [ripemd160](#ripemd160)
- [rlphash](#rlphash)
- [setLengthLeft](#setlengthleft)
- [setLengthRight](#setlengthright)
- [sha256](#sha256)
- [toBuffer](#tobuffer)
- [toChecksumAddress](#tochecksumaddress)
- [toRpcSig](#torpcsig)
- [toUnsigned](#tounsigned)
- [unpad](#unpad)
- [zeroAddress](#zeroaddress)
- [zeros](#zeros)

---

## Variables

<a id="keccak256_null"></a>

### `<Const>` KECCAK256_NULL

**● KECCAK256_NULL**: _`Buffer`_ = Buffer.from(KECCAK256_NULL_S, 'hex')

_Defined in [index.ts:42](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L42)_

Keccak-256 hash of null

---

<a id="keccak256_null_s"></a>

### `<Const>` KECCAK256_NULL_S

**● KECCAK256_NULL_S**: _`string`_ = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"

_Defined in [index.ts:36](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L36)_

Keccak-256 hash of null

---

<a id="keccak256_rlp"></a>

### `<Const>` KECCAK256_RLP

**● KECCAK256_RLP**: _`Buffer`_ = Buffer.from(KECCAK256_RLP_S, 'hex')

_Defined in [index.ts:64](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L64)_

Keccak-256 hash of the RLP of null

---

<a id="keccak256_rlp_array"></a>

### `<Const>` KECCAK256_RLP_ARRAY

**● KECCAK256_RLP_ARRAY**: _`Buffer`_ = Buffer.from(KECCAK256_RLP_ARRAY_S, 'hex')

_Defined in [index.ts:53](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L53)_

Keccak-256 of an RLP of an empty array

---

<a id="keccak256_rlp_array_s"></a>

### `<Const>` KECCAK256_RLP_ARRAY_S

**● KECCAK256_RLP_ARRAY_S**: _`string`_ = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"

_Defined in [index.ts:47](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L47)_

Keccak-256 of an RLP of an empty array

---

<a id="keccak256_rlp_s"></a>

### `<Const>` KECCAK256_RLP_S

**● KECCAK256_RLP_S**: _`string`_ = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"

_Defined in [index.ts:58](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L58)_

Keccak-256 hash of the RLP of null

---

<a id="max_integer"></a>

### `<Const>` MAX_INTEGER

**● MAX_INTEGER**: _`BN`_ = new BN(
'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
16,
)

_Defined in [index.ts:20](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L20)_

The max integer that this VM can handle

---

<a id="two_pow256"></a>

### `<Const>` TWO_POW256

**● TWO_POW256**: _`BN`_ = new BN(
'10000000000000000000000000000000000000000000000000000000000000000',
16,
)

_Defined in [index.ts:28](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L28)_

2^256

---

<a id="publictoaddress"></a>

### `<Const>` publicToAddress

**● publicToAddress**: _[pubToAddress]()_ = pubToAddress

_Defined in [index.ts:315](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L315)_

---

<a id="setlength"></a>

### `<Const>` setLength

**● setLength**: _[setLengthLeft]()_ = setLengthLeft

_Defined in [index.ts:123](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L123)_

---

<a id="stripzeros"></a>

### `<Const>` stripZeros

**● stripZeros**: _[unpad]()_ = unpad

_Defined in [index.ts:150](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L150)_

---

## Functions

<a id="addhexprefix"></a>

### `<Const>` addHexPrefix

▸ **addHexPrefix**(str: _`string`_): `string`

_Defined in [index.ts:532](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L532)_

Adds "0x" to a given `String` if it does not already start with "0x".

**Parameters:**

| Name | Type     |
| ---- | -------- |
| str  | `string` |

**Returns:** `string`

---

<a id="batojson"></a>

### `<Const>` baToJSON

▸ **baToJSON**(ba: _`any`_): `undefined` | `string` | `any`[]

_Defined in [index.ts:584](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L584)_

Converts a `Buffer` or `Array` to JSON.

**Parameters:**

| Name | Type  | Description |
| ---- | ----- | ----------- |
| ba   | `any` | (Buffer     | Array) |

**Returns:** `undefined` | `string` | `any`[](Array|String|null)

---

<a id="buffertohex"></a>

### `<Const>` bufferToHex

▸ **bufferToHex**(buf: _`Buffer`_): `string`

_Defined in [index.ts:195](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L195)_

Converts a `Buffer` into a hex `String`.

**Parameters:**

| Name | Type     | Description                  |
| ---- | -------- | ---------------------------- |
| buf  | `Buffer` | \`Buffer\` object to convert |

**Returns:** `string`

---

<a id="buffertoint"></a>

### `<Const>` bufferToInt

▸ **bufferToInt**(buf: _`Buffer`_): `number`

_Defined in [index.ts:187](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L187)_

Converts a `Buffer` to a `Number`.

**Parameters:**

| Name | Type     | Description                  |
| ---- | -------- | ---------------------------- |
| buf  | `Buffer` | \`Buffer\` object to convert |

**Returns:** `number`

---

<a id="defineproperties"></a>

### `<Const>` defineProperties

▸ **defineProperties**(self: _`any`_, fields: _`any`_, data: _`any`_): `void`

_Defined in [index.ts:606](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L606)_

Defines properties on a `Object`. It make the assumption that underlying data is binary.

**Parameters:**

| Name   | Type  | Description                                                                                                                                                                                                          |
| ------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| self   | `any` | the \`Object\` to define properties on                                                                                                                                                                               |
| fields | `any` | an array fields to define. Fields can contain:_ \`name\` - the name of the properties_ \`length\` - the number of bytes the field can have* \`allowLess\` - if the field can be less than the length* \`allowEmpty\` |
| data   | `any` | data to be validated against the definitions                                                                                                                                                                         |

**Returns:** `void`

---

<a id="ecrecover"></a>

### `<Const>` ecrecover

▸ **ecrecover**(msgHash: _`Buffer`_, v: _`number`_, r: _`Buffer`_, s: _`Buffer`_, chainId?: _`undefined` | `number`_): `Buffer`

_Defined in [index.ts:373](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L373)_

ECDSA public key recovery from signature.

**Parameters:**

| Name               | Type        |
| ------------------ | ----------- |
| msgHash            | `Buffer`    |
| v                  | `number`    |
| r                  | `Buffer`    |
| s                  | `Buffer`    |
| `Optional` chainId | `undefined` | `number` |

**Returns:** `Buffer`
Recovered public key

---

<a id="ecsign"></a>

### `<Const>` ecsign

▸ **ecsign**(msgHash: _`Buffer`_, privateKey: _`Buffer`_, chainId?: _`undefined` | `number`_): [ECDSASignature](interfaces/ecdsasignature.md)

_Defined in [index.ts:341](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L341)_

Returns the ECDSA signature of a message hash.

**Parameters:**

| Name               | Type        |
| ------------------ | ----------- |
| msgHash            | `Buffer`    |
| privateKey         | `Buffer`    |
| `Optional` chainId | `undefined` | `number` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

---

<a id="fromrpcsig"></a>

### `<Const>` fromRpcSig

▸ **fromRpcSig**(sig: _`string`_): [ECDSASignature](interfaces/ecdsasignature.md)

_Defined in [index.ts:407](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L407)_

Convert signature format of the `eth_sign` RPC method to signature parameters NOTE: all because of a bug in geth: [https://github.com/ethereum/go-ethereum/issues/2053](https://github.com/ethereum/go-ethereum/issues/2053)

**Parameters:**

| Name | Type     |
| ---- | -------- |
| sig  | `string` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

---

<a id="fromsigned"></a>

### `<Const>` fromSigned

▸ **fromSigned**(num: _`Buffer`_): `BN`

_Defined in [index.ts:204](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L204)_

Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type     | Description          |
| ---- | -------- | -------------------- |
| num  | `Buffer` | Signed integer value |

**Returns:** `BN`

---

<a id="generateaddress"></a>

### `<Const>` generateAddress

▸ **generateAddress**(from: _`Buffer`_, nonce: _`Buffer`_): `Buffer`

_Defined in [index.ts:482](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L482)_

Generates an address of a newly created contract.

**Parameters:**

| Name  | Type     | Description                                    |
| ----- | -------- | ---------------------------------------------- |
| from  | `Buffer` | The address which is creating this new address |
| nonce | `Buffer` | The nonce of the from account                  |

**Returns:** `Buffer`

---

<a id="generateaddress2"></a>

### `<Const>` generateAddress2

▸ **generateAddress2**(from: _`Buffer` | `string`_, salt: _`Buffer` | `string`_, initCode: _`Buffer` | `string`_): `Buffer`

_Defined in [index.ts:502](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L502)_

Generates an address for a contract created using CREATE2.

**Parameters:**

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| from     | `Buffer` | `string`    | The address which is creating this new address |
| salt     | `Buffer` | `string`    | A salt |
| initCode | `Buffer` | `string`    | The init code of the contract being created |

**Returns:** `Buffer`

---

<a id="hashpersonalmessage"></a>

### `<Const>` hashPersonalMessage

▸ **hashPersonalMessage**(message: _`any`_): `Buffer`

_Defined in [index.ts:364](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L364)_

Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call. The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign` call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key used to produce the signature.

**Parameters:**

| Name    | Type  |
| ------- | ----- |
| message | `any` |

**Returns:** `Buffer`

---

<a id="importpublic"></a>

### `<Const>` importPublic

▸ **importPublic**(publicKey: _`Buffer`_): `Buffer`

_Defined in [index.ts:330](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L330)_

Converts a public key to the Ethereum format.

**Parameters:**

| Name      | Type     |
| --------- | -------- |
| publicKey | `Buffer` |

**Returns:** `Buffer`

---

<a id="isprecompiled"></a>

### `<Const>` isPrecompiled

▸ **isPrecompiled**(address: _`Buffer` | `string`_): `boolean`

_Defined in [index.ts:524](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L524)_

Returns true if the supplied address belongs to a precompiled account (Byzantium).

**Parameters:**

| Name    | Type     |
| ------- | -------- |
| address | `Buffer` | `string` |

**Returns:** `boolean`

---

<a id="isvalidaddress"></a>

### `<Const>` isValidAddress

▸ **isValidAddress**(address: _`string`_): `boolean`

_Defined in [index.ts:439](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L439)_

Checks if the address is a valid. Accepts checksummed addresses too.

**Parameters:**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

**Returns:** `boolean`

---

<a id="isvalidchecksumaddress"></a>

### `<Const>` isValidChecksumAddress

▸ **isValidChecksumAddress**(address: _`string`_): `boolean`

_Defined in [index.ts:473](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L473)_

Checks if the address is a valid checksummed address.

**Parameters:**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

**Returns:** `boolean`

---

<a id="isvalidprivate"></a>

### `<Const>` isValidPrivate

▸ **isValidPrivate**(privateKey: _`Buffer`_): `boolean`

_Defined in [index.ts:277](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L277)_

Checks if the private key satisfies the rules of the curve secp256k1.

**Parameters:**

| Name       | Type     |
| ---------- | -------- |
| privateKey | `Buffer` |

**Returns:** `boolean`

---

<a id="isvalidpublic"></a>

### `<Const>` isValidPublic

▸ **isValidPublic**(publicKey: _`Buffer`_, sanitize?: _`boolean`_): `boolean`

_Defined in [index.ts:287](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L287)_

Checks if the public key satisfies the rules of the curve secp256k1 and the requirements of Ethereum.

**Parameters:**

| Name                     | Type      | Default value | Description                                                       |
| ------------------------ | --------- | ------------- | ----------------------------------------------------------------- |
| publicKey                | `Buffer`  | -             | The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false         | Accept public keys in other formats                               |

**Returns:** `boolean`

---

<a id="isvalidsignature"></a>

### `<Const>` isValidSignature

▸ **isValidSignature**(v: _`number`_, r: _`Buffer`_, s: _`Buffer`_, homesteadOrLater?: _`boolean`_, chainId?: _`undefined` | `number`_): `boolean`

_Defined in [index.ts:544](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L544)_

Validate a ECDSA signature.

**Parameters:**

| Name                             | Type        | Default value | Description                                                                          |
| -------------------------------- | ----------- | ------------- | ------------------------------------------------------------------------------------ |
| v                                | `number`    | -             |
| r                                | `Buffer`    | -             |
| s                                | `Buffer`    | -             |
| `Default value` homesteadOrLater | `boolean`   | true          | Indicates whether this is being used on either the homestead hardfork or a later one |
| `Optional` chainId               | `undefined` | `number`      | -                                                                                    |

**Returns:** `boolean`

---

<a id="iszeroaddress"></a>

### `<Const>` isZeroAddress

▸ **isZeroAddress**(address: _`string`_): `boolean`

_Defined in [index.ts:446](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L446)_

Checks if a given address is a zero address.

**Parameters:**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

**Returns:** `boolean`

---

<a id="keccak"></a>

### `<Const>` keccak

▸ **keccak**(a: _`any`_, bits?: _`number`_): `Buffer`

_Defined in [index.ts:221](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L221)_

Creates Keccak hash of the input

**Parameters:**

| Name                 | Type     | Default value | Description            |
| -------------------- | -------- | ------------- | ---------------------- |
| a                    | `any`    | -             | The input data (Buffer | Array | String | Number) |
| `Default value` bits | `number` | 256           | The Keccak width       |

**Returns:** `Buffer`

---

<a id="keccak256"></a>

### `<Const>` keccak256

▸ **keccak256**(a: _`any`_): `Buffer`

_Defined in [index.ts:234](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L234)_

Creates Keccak-256 hash of the input, alias for keccak(a, 256).

**Parameters:**

| Name | Type  | Description            |
| ---- | ----- | ---------------------- |
| a    | `any` | The input data (Buffer | Array | String | Number) |

**Returns:** `Buffer`

---

<a id="privatetoaddress"></a>

### `<Const>` privateToAddress

▸ **privateToAddress**(privateKey: _`Buffer`_): `Buffer`

_Defined in [index.ts:432](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L432)_

Returns the ethereum address of a given private key.

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| privateKey | `Buffer` | A private key must be 256 bits wide |

**Returns:** `Buffer`

---

<a id="privatetopublic"></a>

### `<Const>` privateToPublic

▸ **privateToPublic**(privateKey: _`Buffer`_): `Buffer`

_Defined in [index.ts:321](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L321)_

Returns the ethereum public key of a given private key.

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| privateKey | `Buffer` | A private key must be 256 bits wide |

**Returns:** `Buffer`

---

<a id="pubtoaddress"></a>

### `<Const>` pubToAddress

▸ **pubToAddress**(pubKey: _`Buffer`_, sanitize?: _`boolean`_): `Buffer`

_Defined in [index.ts:306](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L306)_

Returns the ethereum address of a given public key. Accepts "Ethereum public keys" and SEC1 encoded keys.

**Parameters:**

| Name                     | Type      | Default value | Description                                                       |
| ------------------------ | --------- | ------------- | ----------------------------------------------------------------- |
| pubKey                   | `Buffer`  | -             | The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false         | Accept public keys in other formats                               |

**Returns:** `Buffer`

---

<a id="ripemd160"></a>

### `<Const>` ripemd160

▸ **ripemd160**(a: _`any`_, padded: _`boolean`_): `Buffer`

_Defined in [index.ts:254](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L254)_

Creates RIPEMD160 hash of the input.

**Parameters:**

| Name   | Type      | Description                                    |
| ------ | --------- | ---------------------------------------------- |
| a      | `any`     | The input data (Buffer                         | Array | String | Number) |
| padded | `boolean` | Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

---

<a id="rlphash"></a>

### `<Const>` rlphash

▸ **rlphash**(a: _`rlp.Input`_): `Buffer`

_Defined in [index.ts:270](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L270)_

Creates SHA-3 hash of the RLP encoded version of the input.

**Parameters:**

| Name | Type        | Description    |
| ---- | ----------- | -------------- |
| a    | `rlp.Input` | The input data |

**Returns:** `Buffer`

---

<a id="setlengthleft"></a>

### `<Const>` setLengthLeft

▸ **setLengthLeft**(msg: _`any`_, length: _`number`_, right?: _`boolean`_): `any`

_Defined in [index.ts:106](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L106)_

Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name                  | Type      | Default value | Description                                     |
| --------------------- | --------- | ------------- | ----------------------------------------------- |
| msg                   | `any`     | -             | the value to pad (Buffer                        | Array) |
| length                | `number`  | -             | the number of bytes the output should be        |
| `Default value` right | `boolean` | false         | whether to start padding form the left or right |

**Returns:** `any`
(Buffer|Array)

---

<a id="setlengthright"></a>

### `<Const>` setLengthRight

▸ **setLengthRight**(msg: _`any`_, length: _`number`_): `any`

_Defined in [index.ts:132](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L132)_

Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name   | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| msg    | `any`    | the value to pad (Buffer                 | Array) |
| length | `number` | the number of bytes the output should be |

**Returns:** `any`
(Buffer|Array)

---

<a id="sha256"></a>

### `<Const>` sha256

▸ **sha256**(a: _`any`_): `Buffer`

_Defined in [index.ts:242](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L242)_

Creates SHA256 hash of the input.

**Parameters:**

| Name | Type  | Description            |
| ---- | ----- | ---------------------- |
| a    | `any` | The input data (Buffer | Array | String | Number) |

**Returns:** `Buffer`

---

<a id="tobuffer"></a>

### `<Const>` toBuffer

▸ **toBuffer**(v: _`any`_): `Buffer`

_Defined in [index.ts:156](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L156)_

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters:**

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` | the value   |

**Returns:** `Buffer`

---

<a id="tochecksumaddress"></a>

### `<Const>` toChecksumAddress

▸ **toChecksumAddress**(address: _`string`_): `string`

_Defined in [index.ts:454](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L454)_

Returns a checksummed address.

**Parameters:**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

**Returns:** `string`

---

<a id="torpcsig"></a>

### `<Const>` toRpcSig

▸ **toRpcSig**(v: _`number`_, r: _`Buffer`_, s: _`Buffer`_, chainId?: _`undefined` | `number`_): `string`

_Defined in [index.ts:393](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L393)_

Convert signature parameters into the format of `eth_sign` RPC method.

**Parameters:**

| Name               | Type        |
| ------------------ | ----------- |
| v                  | `number`    |
| r                  | `Buffer`    |
| s                  | `Buffer`    |
| `Optional` chainId | `undefined` | `number` |

**Returns:** `string`
Signature

---

<a id="tounsigned"></a>

### `<Const>` toUnsigned

▸ **toUnsigned**(num: _`BN`_): `Buffer`

_Defined in [index.ts:212](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L212)_

Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| num  | `BN` |             |

**Returns:** `Buffer`

---

<a id="unpad"></a>

### `<Const>` unpad

▸ **unpad**(a: _`any`_): `any`

_Defined in [index.ts:141](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L141)_

Trims leading zeros from a `Buffer` or an `Array`.

**Parameters:**

| Name | Type  | Description |
| ---- | ----- | ----------- |
| a    | `any` | (Buffer     | Array | String) |

**Returns:** `any`
(Buffer|Array|String)

---

<a id="zeroaddress"></a>

### `<Const>` zeroAddress

▸ **zeroAddress**(): `string`

_Defined in [index.ts:92](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L92)_

Returns a zero address.

**Returns:** `string`

---

<a id="zeros"></a>

### `<Const>` zeros

▸ **zeros**(bytes: _`number`_): `Buffer`

_Defined in [index.ts:85](https://github.com/ethereumjs/ethereumjs-util/blob/dd56e02/src/index.ts#L85)_

Returns a buffer filled with 0s.

**Parameters:**

| Name  | Type     | Description                              |
| ----- | -------- | ---------------------------------------- |
| bytes | `number` | the number of bytes the buffer should be |

**Returns:** `Buffer`

---
