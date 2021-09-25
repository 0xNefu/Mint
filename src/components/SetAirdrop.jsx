import React from 'react';
import { CONTRACT, CONTRACT_ABI } from '../data/ChainData';
import { userlist } from '../data/userlist'
import { TransactionButton } from '../web3/components';

const SetAirdrop = () => {
  return (
    <>
      <TransactionButton
        address={CONTRACT}
        abi={CONTRACT_ABI}
        method={'setAirdropList'}
        args={[userlist]}
        confirmations={1}
        text={'set Airdroplist'}
      />
    </>
  );
}

export default SetAirdrop;