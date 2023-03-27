import { Connection } from '@safecoin/web3.js';
import { PROGRAM_ID } from '@leda-mint-io/lpl-token-metadata';
import { TokenMetadataGpaBuilder } from './gpaBuilders';

export const TokenMetadataProgram = {
  publicKey: PROGRAM_ID,

  accounts(connection: Connection) {
    return new TokenMetadataGpaBuilder(connection, this.publicKey);
  },

  metadataV1Accounts(connection: Connection) {
    return this.accounts(connection).metadataV1Accounts();
  },
};
