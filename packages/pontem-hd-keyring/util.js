const Nacl = require('tweetnacl');

function signMessage({ message, privateKey }) {
  const toSign = Buffer.from(message.substring(2), "hex");
  const signingKey = Nacl.sign.keyPair.fromSeed(privateKey);
  const signature = Nacl.sign(toSign, signingKey.secretKey);
  return Buffer.from(signature).toString("hex").slice(0, 128);
}

module.exports = {
  signMessage,
}
