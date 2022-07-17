import { Transaction } from '@leda-mint-io/lpl-core';
import {
  PublicKey,
  SystemProgram,
  TransactionCtorFields,
  TransactionInstruction,
} from '@safecoin/web3.js';
import { config } from '@leda-mint-io/lpl-core';
import { Buffer } from 'buffer';

type PayForFilesParams = {
  lamports: number;
  fileHashes: Buffer[];
  arweaveWallet?: PublicKey;
};

export class PayForFiles extends Transaction {
  constructor(options: TransactionCtorFields, params: PayForFilesParams) {
    const { feePayer } = options;
    const { lamports, fileHashes, arweaveWallet } = params;

    super(options);

    this.add(
      SystemProgram.transfer({
        fromPubkey: feePayer,
        toPubkey: arweaveWallet ?? new PublicKey(config.arweaveWallet),
        lamports,
      }),
    );

    fileHashes.forEach((data) => {
      this.add(
        new TransactionInstruction({
          keys: [],
          programId: new PublicKey(config.programs.memo),
          data,
        }),
      );
    });
  }
}
