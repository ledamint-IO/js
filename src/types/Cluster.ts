import { Connection } from '@safecoin/web3.js';

export type Cluster =
  | 'mainnet-beta'
  | 'devnet'
  | 'testnet'
  | 'localnet'
  | 'custom';

const MAINNET_BETA_DOMAINS = [
  'api.mainnet-beta.safecoin.org',
];
const DEVNET_DOMAINS = [
  'api.devnet.safecoin.org',
];
const TESTNET_DOMAINS = ['api.testnet.safecoin.org'];
const LOCALNET_DOMAINS = ['localhost', '127.0.0.1'];

export const resolveClusterFromConnection = (
  connection: Connection
): Cluster => {
  return resolveClusterFromEndpoint(connection.rpcEndpoint);
};

export const resolveClusterFromEndpoint = (endpoint: string): Cluster => {
  const domain = new URL(endpoint).hostname;
  if (MAINNET_BETA_DOMAINS.includes(domain)) return 'mainnet-beta';
  if (DEVNET_DOMAINS.includes(domain)) return 'devnet';
  if (TESTNET_DOMAINS.includes(domain)) return 'testnet';
  if (LOCALNET_DOMAINS.includes(domain)) return 'localnet';
  return 'custom';
};
