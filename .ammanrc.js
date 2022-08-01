const { LOCALHOST, tmpLedgerDir } = require('@j0nnyboi/amman');
const path = require('path');
const MOCK_STORAGE_ID = 'js-next-sdk';

const { accountProviders } = require('./dist/cjs/accountProviders.cjs');

function localDeployPath(programName) {
  return path.join(__dirname, 'test', 'programs', `${programName}.so`);
}

const programIds = {
  metadata: 'WbMTNyvtk8vSMu2AmXV7mKuYrADRNw9GSkNtWKsZ7qe',
  vault: '9sfa9YXCZKvzMcpRFfaW3kudtqoqW4jKTfjsn5Q3fp8N',
  auction: 'ETy2M4RHk1K9fXtzP5wuvP7iUZPazbsgsTvAWFDigkj4',
  metaplex: 'LeDzYVjEBhN5Cms2ZcvPLCaY8ENX7cc3RJCnEXM6ZAo',
  fixedPriceSaleToken: 'SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo',
  candyMachine: 'CaNucwHEE2Mc7CPMSbNkrqPEx2iDoMs1uCDtS4mPdDq7',
  auctionHouse: 'Co8pmAyxUyCwep4zhnPWzkL6fwvPPHU59r1t5eM6gXjZ',
};

const programs = [
  {
    label: 'Token Metadata',
    programId: programIds.metadata,
    deployPath: localDeployPath('lpl_token_metadata'),
  },
  {
    label: 'Candy Machine',
    programId: programIds.candyMachine,
    deployPath: localDeployPath('lpl_candy_machine'),
  },
  {
    label: 'Auction House',
    programId: programIds.auctionHouse,
    deployPath: localDeployPath('lpl_auction_house'),
  },
];

module.exports = {
  validator: {
    killRunningValidators: true,
    programs,
    jsonRpcUrl: LOCALHOST,
    websocketUrl: '',
    commitment: 'confirmed',
    ledgerDir: tmpLedgerDir(),
    resetLedger: true,
    verifyFees: false,
  },
  relay: {
    accountProviders,
  },
  storage: {
    storageId: MOCK_STORAGE_ID,
    clearOnStart: true,
  },
  snapshot: {
    snapshotFolder: path.join(__dirname, 'snapshots'),
  },
};
