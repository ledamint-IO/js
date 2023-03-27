import { PublicKey } from '@safecoin/web3.js';
import { Collection, Creator, Uses } from '@leda-mint-io/lpl-token-metadata';
import { Operation, Signer } from '@/shared';
import { Nft } from '../models';

export class UpdateNftOperation extends Operation<UpdateNftInput, UpdateNftOutput> {}

export interface UpdateNftInput {
  nft: Nft;

  // Data.
  name?: string;
  symbol?: string;
  uri?: string;
  sellerFeeBasisPoints?: number;
  creators?: Creator[];
  collection?: Collection;
  uses?: Uses;
  newUpdateAuthority?: PublicKey;
  primarySaleHappened?: boolean;
  isMutable?: boolean;

  // Signers.
  updateAuthority?: Signer;
}

export interface UpdateNftOutput {
  transactionId: string;
}
