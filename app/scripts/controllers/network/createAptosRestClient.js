import { createScaffoldMiddleware, mergeMiddleware } from 'json-rpc-engine';
import {
  createBlockRefMiddleware,
  createRetryOnEmptyMiddleware,
  createBlockCacheMiddleware,
  createInflightCacheMiddleware,
  createBlockTrackerInspectorMiddleware,
  providerFromMiddleware,
} from 'eth-json-rpc-middleware';

import { createFetchMiddleware } from '@pontem/pontem-aptos-middleware';
import { PollingBlockTracker } from '@pontem/pontem-block-tracker';

export default function createAptosRestClient({ rpcUrl, chainId, network }) {
  const aptosMiddleware = createFetchMiddleware({
    rpcUrl,
    maxAttempts: 5,
  });
  const provider = providerFromMiddleware(aptosMiddleware);
  const blockTracker = new PollingBlockTracker({ provider });

  const networkMiddleware = mergeMiddleware([
    createChainIdAndNetworkMiddleware(chainId, network),
    createBlockCacheMiddleware({ blockTracker }),
    createInflightCacheMiddleware(),
    createBlockRefMiddleware({ blockTracker, provider }),
    createRetryOnEmptyMiddleware({ blockTracker, provider }),
    createBlockTrackerInspectorMiddleware({ blockTracker }),
    aptosMiddleware,
  ]);
  return { networkMiddleware, blockTracker };
}

function createChainIdAndNetworkMiddleware(chainId, network) {
  return createScaffoldMiddleware({
    eth_chainId: chainId,
    net_version: network,
  });
}
