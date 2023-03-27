import { AccountInfo, PublicKey } from '@safecoin/web3.js';
import { Buffer } from 'buffer';
import { Metadata } from '@leda-mint-io/lpl-token-metadata';
import { TokenMetadataProgram } from '@/programs/tokenMetadata';
import { Account, Pda } from '@/shared';

export class MetadataAccount extends Account<Metadata> {
  static async pda(mint: PublicKey): Promise<Pda> {
    return Pda.find(TokenMetadataProgram.publicKey, [
      Buffer.from('metadata', 'utf8'),
      TokenMetadataProgram.publicKey.toBuffer(),
      mint.toBuffer(),
    ]);
  }

  static fromAccountInfo(accountInfo: AccountInfo<Buffer>): MetadataAccount {
    return this.parseAccountInfo(accountInfo, Metadata) as MetadataAccount;
  }
}
