import { JsonRpcProvider, JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';

import { DEFAULT_CHAIN_ID, EXCHANGE_ADDRESS, RPC_URLS } from '../config/config';
import { Multisig__factory } from '../contracts';
// import { CliptoExchange__factory, ERC721__factory } from '../contracts';

export const getSigner = (library: Web3Provider, account: string): JsonRpcSigner => {
  return library.getSigner(account).connectUnchecked();
};

export const getProviderOrSigner = (
  library?: Web3Provider,
  account?: string | null,
): JsonRpcProvider | JsonRpcSigner => {
  return account && library
    ? getSigner(library, account)
    : new JsonRpcProvider(RPC_URLS[DEFAULT_CHAIN_ID], DEFAULT_CHAIN_ID);
};

export const useMultisig = (multisigAddress: string, withSignerIfPossible = false) => {
  const { account, library } = useWeb3React<Web3Provider>();
  return useMemo(() => {
    const provider = getProviderOrSigner(library, withSignerIfPossible && account ? account : undefined);
    return Multisig__factory.connect(multisigAddress, provider);
  }, [account, library, withSignerIfPossible]);
};
