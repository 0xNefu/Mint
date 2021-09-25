import React, { useState } from 'react';
import { CONTRACT, CONTRACT_ABI, WEIPRICE } from '../data/ChainData';
import { TransactionButton } from '../web3/components';
import { useConnectedAccount } from '../web3/hooks';

const Mint = () => {
  const [amount, setAmount] = useState(1)
  const {account,} = useConnectedAccount();

  const selectHandler = (e) => {
    setAmount(e.target.value)
  }
  return (
    <div>
      <div>
        <label for="amount">Select amount: &nbsp; </label>
        <select name="amount" id="amount" onChange={selectHandler}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
      </div>
      <div>
      <TransactionButton 
        address={CONTRACT}
        abi={CONTRACT_ABI}
        method={'mint'}
        args={[account, amount]}
        confirmations={1}
        text={'Mint'}
        value={amount*WEIPRICE}
      />
      </div>
    </div>
  );
}

export default Mint;