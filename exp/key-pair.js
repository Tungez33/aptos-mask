const Nacl = require('tweetnacl');
const SHA3 = require('js-sha3');
const sigUtil = require('eth-sig-util');

class Account {
  constructor(seed) {
    if (seed) {
      this.signingKey = Nacl.sign.keyPair.fromSeed(seed);
    } else {
      this.signingKey = Nacl.sign.keyPair();
    }
  }

  /** Returns the address associated with the given account */
  address() {
    return this.authKey()
  }

  /** Returns the authKey for the associated account */
  authKey() {
    let hash = SHA3.sha3_256.create();
    hash.update(Buffer.from(this.signingKey.publicKey));
    hash.update("\x00");
    return hash.hex();
  }

  /** Returns the public key for the associated account */
  pubKey() {
    return Buffer.from(this.signingKey.publicKey).toString("hex");
  }
}

// const ppk = '209f16608785d6f23cbc87681c07c1d0bee773a9770878a026a1d02a6789c077'; // 0x6C22d192947d7000c0c581377dbAA76A
// const ppk = '396df8efb5900a5ab795afd48cec9f4b466debad527ffbb8a316291a9a9942e9'; // 0x6C22d192947d7000c0c581377dbAA76A
const ppk = '4a880d738074dd6f67a3f595139f6489213afd54925b26329f3ada4911c6d2f3'; // 0x6C22d192947d7000c0c581377dbAA76A
                                                                                //   178641155281aba2b55f69951033f82a34a00767131bdb7fa42904042dd39b0b
const ppkunit8 = Uint8Array.from(Buffer.from(ppk, 'hex'));

const seed = '2b292cc438546682299359e88b2620988964ff762bffc97bb4c2043a187ac606'; // 0x94268B3b4EC53af9A03a27Be03744185
const seedUint = Uint8Array.from(Buffer.from(seed, 'hex'));
const account = new Account(
  ppkunit8
  // seedUint
)

console.dir({
  account: account.address(),
  key: account.authKey(),
  keypair: account.signingKey,
  // ppkunit8,
  secret: Buffer.from(account.signingKey.secretKey).toString('hex'),
  // address: sigUtil.normalize(Uint8Array.from(Buffer.from(account.address(), 'hex')))
});
