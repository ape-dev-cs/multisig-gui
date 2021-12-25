import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Multisig } from '../contracts/Multisig';
import { PrimaryButton } from './Button';
import { OutlinedContainer } from './layout/Common';

export interface ProposalProps {
  multisig: Multisig;
  proposalNumber: number;
  sigsRequired: number;
}

const ProposalContainer = styled(OutlinedContainer)`
  display: block;
  margin: auto;
  margin-top: 0px;
  max-width: 95%;
  margin-bottom: 25px;
`;

interface SigProposal {
  target: string;
  value: BigNumber;
  payload: string;
  sigs: BigNumber;
}

export const Proposal: React.FC<ProposalProps> = (props) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const [proposal, setProposal] = useState<SigProposal | undefined>(undefined);
  const [blockNumber, setBlockNumber] = useState<number>();

  useEffect(() => {
    const getProposal = async () => {
      const prop = await props.multisig.proposals(props.proposalNumber);
      setProposal(prop);
    };
    getProposal();
  }, [blockNumber]);

  useEffect(() => {
    if (library) {
      library.on('block', (blockNumber) => {
        setBlockNumber(blockNumber);
      });
    }
  }, [library]);

  const signOrExceute = async () => {
    if (!proposal) {
      return;
    }
    if (proposal.sigs.toNumber() >= props.sigsRequired) {
      const result = await props.multisig.execute(props.proposalNumber);
      toast.info('Awaiting TX confirmation...');
      await result.wait();
      toast.success('Proposal executed!');
    } else {
      const result = await props.multisig.sign(props.proposalNumber);
      toast.info('Awaiting TX confirmation...');
      await result.wait();
      toast.success('Proposal signed!');
    }
  };

  return (
    <ProposalContainer>
      {proposal && (
        <>
          <p style={{ fontWeight: 'bold' }}>Proposal #{props.proposalNumber}</p>
          <p>To: {proposal.target}</p>
          <p>Value: {ethers.utils.formatEther(proposal.value)} ether</p>
          <p>Payload: {proposal.payload}</p>
          <p>Signatures: {proposal.sigs.toString()}</p>

          <PrimaryButton style={{ marginTop: '16px', maxWidth: '100px' }} size="small" onPress={() => signOrExceute()}>
            {proposal.sigs.toNumber() >= props.sigsRequired ? 'Execute' : 'Sign'}
          </PrimaryButton>
        </>
      )}
    </ProposalContainer>
  );
};
