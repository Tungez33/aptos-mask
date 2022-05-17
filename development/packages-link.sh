#!/usr/bin/env bash

bash ./packages/pontem-aptos-middleware/link.sh
bash ./packages/pontem-block-tracker/link.sh
bash ./packages/pontem-query/link.sh
bash ./packages/pontem-controllers/link.sh
bash ./packages/pontem-nonce-tracker/link.sh
bash ./packages/pontem-hdkey/link.sh
bash ./packages/pontem-util/link.sh
bash ./packages/pontem-wallet/link.sh
bash ./packages/pontem-hd-keyring/link.sh
bash ./packages/pontem-keyring-controller/link.sh

yarn link @pontem/pontem-aptos-middleware
yarn link @pontem/pontem-block-tracker
yarn link @pontem/pontem-query
yarn link @pontem/pontem-controllers
yarn link @pontem/nonce-tracker # TODO rename to @pontem/pontem-nonce-tracker
yarn link @pontem/pontem-hdkey
yarn link @pontem/pontem-util
yarn link @pontem/pontem-wallet
yarn link @pontem/pontem-hd-keyring
yarn link @pontem/pontem-keyring-controller
