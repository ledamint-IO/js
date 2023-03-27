import { PublicKey } from '@safecoin/web3.js';
import { bignum } from '@j0nnyboi/beet';
import { createCreateMasterEditionV3Instruction } from '@leda-mint-io/lpl-token-metadata';
import { TransactionBuilder, Signer } from '@/shared';

export interface CreateMasterEditionV3BuilderParams {
  maxSupply?: bignum;
  payer: Signer;
  mintAuthority: Signer;
  updateAuthority: Signer;
  mint: PublicKey;
  metadata: PublicKey;
  masterEdition: PublicKey;
  instructionKey?: string;
}

export const createMasterEditionV3Builder = (
  params: CreateMasterEditionV3BuilderParams
): TransactionBuilder => {
  const {
    maxSupply = null,
    payer,
    mintAuthority,
    updateAuthority,
    mint,
    metadata,
    masterEdition,
    instructionKey = 'createMasterEditionV3',
  } = params;

  return TransactionBuilder.make().add({
    instruction: createCreateMasterEditionV3Instruction(
      {
        edition: masterEdition,
        mint,
        updateAuthority: updateAuthority.publicKey,
        mintAuthority: mintAuthority.publicKey,
        payer: payer.publicKey,
        metadata,
      },
      { createMasterEditionArgs: { maxSupply } }
    ),
    signers: [payer, mintAuthority, updateAuthority],
    key: instructionKey,
  });
};
