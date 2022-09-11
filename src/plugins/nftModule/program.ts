import { PROGRAM_ID } from '@leda-mint-io/lpl-token-metadata';
import { MetadataV1GpaBuilder } from './gpaBuilders';
import { Metaplex } from '@/Metaplex';

/** @group Programs */
export const TokenMetadataProgram = {
  publicKey: PROGRAM_ID,

  metadataV1Accounts(metaplex: Metaplex) {
    return new MetadataV1GpaBuilder(metaplex, this.publicKey);
  },
};
