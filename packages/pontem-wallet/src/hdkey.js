const HDKey = require('@pontem/pontem-hdkey')
// const HDKey = require('@starcoin/stc-hdkey')
const Wallet = require('./index.js')

function AptosHDKey() {
}

/*
 * Horrible wrapping.
 */
function fromHDKey(hdkey) {
  var ret = new AptosHDKey()
  ret._hdkey = hdkey
  return ret
}

AptosHDKey.fromMasterSeed = function (seedBuffer) {
  return fromHDKey(HDKey.fromMasterSeed(seedBuffer))
}

AptosHDKey.fromExtendedKey = function (base58key) {
  return fromHDKey(HDKey.fromExtendedKey(base58key))
}

AptosHDKey.prototype.privateExtendedKey = function () {
  if (!this._hdkey.privateExtendedKey) {
    throw new Error('This is a public key only wallet')
  }
  return this._hdkey.privateExtendedKey
}

AptosHDKey.prototype.publicExtendedKey = function () {
  return this._hdkey.publicExtendedKey
}

AptosHDKey.prototype.derivePath = function (path) {
  return fromHDKey(this._hdkey.derive(path))
}

AptosHDKey.prototype.deriveChild = function (index) {
  return fromHDKey(this._hdkey.deriveChild(index))
}

AptosHDKey.prototype.getWallet = function () {
  return Wallet.fromPrivatePublic(this._hdkey._privateKey, this._hdkey._publicKey)
}

module.exports = AptosHDKey
