import { PROGRAM_ID } from '@leda-mint-io/lpl-candy-machine';
import { CandyMachineGpaBuilder } from './gpaBuilders';
import { Metaplex } from '@/Metaplex';

export const CandyMachineProgram = {
  publicKey: PROGRAM_ID,

  accounts(metaplex: Metaplex) {
    return new CandyMachineGpaBuilder(metaplex, this.publicKey);
  },
};
