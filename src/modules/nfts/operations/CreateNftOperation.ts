import { PublicKey } from '@safecoin/web3.js';
import { bignum } from '@j0nnyboi/beet';
import { Creator, Collection, Uses } from '@leda-mint-io/lpl-token-metadata';
import { Operation, Signer } from '@/shared';

export class CreateNftOperation extends Operation<CreateNftInput, CreateNftOutput> {}

export interface CreateNftInput {
  // Data.
  uri: string;
  name?: string;
  symbol?: string;
  sellerFeeBasisPoints?: number;
  creators?: Creator[];
  collection?: Collection;
  uses?: Uses;
  isMutable?: boolean;
  maxSupply?: bignum;
  allowHolderOffCurve?: boolean;

  // Signers.
  mint?: Signer;
  payer?: Signer;
  mintAuthority?: Signer;
  updateAuthority?: Signer;

  // Public keys.
  owner?: PublicKey;
  freezeAuthority?: PublicKey;

  // Programs.
  tokenProgram?: PublicKey;
  associatedTokenProgram?: PublicKey;
}

export interface CreateNftOutput {
  mint: Signer;
  metadata: PublicKey;
  masterEdition: PublicKey;
  associatedToken: PublicKey;
  transactionId: string;
}
