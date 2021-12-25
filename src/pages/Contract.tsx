import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { PrimaryButton } from '../components/Button';
import { HeaderSpacer } from '../components/Header';
import {
  ContentWrapper,
  HorizontalRule,
  OutlinedContainer,
  PageContentWrapper,
  PageWrapper,
} from '../components/layout/Common';
import { ProposalList } from '../components/ProposalList';
import { TextField } from '../components/TextField';
import { Multisig__factory } from '../contracts';
import { Multisig } from '../contracts/Multisig';
import { Text } from '../styles/typography';

const ContractContainer = styled(OutlinedContainer)`
  display: block;
  margin: auto;
  margin-top: 45px;
  max-width: 80%;
`;

interface Proposal {
  bytecode: string;
  value: string;
  to: string;
  sigs: string;
}

const ContractPage = () => {
  const { account, library } = useWeb3React<Web3Provider>();
  const { contract } = useParams();

  const [multisig, setMultisig] = useState<Multisig>();
  const [proposal, setProposal] = useState<Proposal>({} as Proposal);
  const [proposalCounter, setProposalCounter] = useState<number>();
  const [sigsRequired, setSigsRequired] = useState<number>();
  const [blockNumber, setBlockNumber] = useState<number>();

  useEffect(() => {
    const getProposals = async () => {
      if (multisig) {
        setProposalCounter((await multisig.proposalCounter()).toNumber());
        setSigsRequired((await multisig.sigsRequired()).toNumber());
      }
    };
    getProposals();
  }, [multisig, blockNumber]);

  useEffect(() => {
    if (account && library) {
      setMultisig(Multisig__factory.connect(contract, library.getSigner(account)));
    }
  }, [account, library, contract]);

  useEffect(() => {
    if (library) {
      library.on('block', (blockNumber) => {
        setBlockNumber(blockNumber);
      });
    }
  }, [library]);

  const makeProposal = async () => {
    const result = await multisig.propose(proposal.to, ethers.utils.parseEther(proposal.value), proposal.bytecode);
    toast.info('Awaiting TX confirmation...');
    await result.wait();
    toast.success('Proposal created!');
  };

  const isProposalEntered = () => {
    return Object.keys(proposal).length === 3;
  };

  return (
    <>
      <PageWrapper>
        <HeaderSpacer />

        <PageContentWrapper>
          <ContentWrapper>
            <ContractContainer>
              <Text style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '24px' }}>Multisig at {contract}</Text>

              {multisig && proposalCounter && sigsRequired && (
                <ProposalList multisig={multisig} proposalCounter={proposalCounter} sigsRequired={sigsRequired}></ProposalList>
              )}
              <HorizontalRule />
              <Text style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '20px' }}>Propose a new transaction</Text>

              <div style={{ marginBottom: 18, marginTop: 24 }}>
                <TextField
                  onChange={(e) => setProposal({ ...proposal, to: e })}
                  label="To"
                  placeholder="0x34cfac646f301356faa8b21e94227e3583fe3f5f"
                />
              </div>
              <div style={{ marginBottom: 18, marginTop: 24 }}>
                <TextField
                  onChange={(e) => setProposal({ ...proposal, value: e })}
                  label="Value (in ether)"
                  placeholder="0.420"
                />
              </div>
              <div style={{ marginBottom: 24, marginTop: 24 }}>
                <TextField onChange={(e) => setProposal({ ...proposal, bytecode: e })} label="Data" placeholder="0x" />
              </div>

              <PrimaryButton
                isDisabled={!isProposalEntered()}
                onPress={() => makeProposal()}
                style={{ marginBottom: '16px', maxWidth: '180px' }}
              >
                Propose
              </PrimaryButton>
            </ContractContainer>
          </ContentWrapper>
        </PageContentWrapper>
      </PageWrapper>
    </>
  );
};

export { ContractPage };
