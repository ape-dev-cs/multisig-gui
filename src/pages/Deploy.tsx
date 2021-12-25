import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { PrimaryButton } from '../components/Button';
import { HeaderSpacer } from '../components/Header';
import { ContentWrapper, OutlinedContainer, PageContentWrapper, PageWrapper } from '../components/layout/Common';
import { TextField } from '../components/TextField';
import { Multisig__factory } from '../contracts';
import { getProviderOrSigner } from '../hooks/useContracts';

const StepsContainer = styled(OutlinedContainer)`
  display: block;
  margin: auto;
  margin-top: 45px;
`;

const DeployPage = () => {
  const navigate = useNavigate();
  const { account, library } = useWeb3React<Web3Provider>();
  const [signers, setSigners] = useState<string[]>([]);
  const [neededSigs, setNeededSigs] = useState<string>('');
  const deployMultisig = async () => {
    if (library && account) {
      const MultisigFactory = new Multisig__factory(library.getSigner(account));
      const result = await MultisigFactory.deploy(signers, neededSigs);
      console.log(result);
      toast.info('Awaiting TX confirmation...');
      await result.deployed();
      toast.success('Multisig created!');
      navigate(`/multisig/${result.address}`);
    } else {
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <PageWrapper>
        <HeaderSpacer />
        <PageContentWrapper>
          <ContentWrapper>
            <StepsContainer>
              <div style={{ marginBottom: 24, marginTop: 24 }}>
                <TextField
                  label="Signers (comma delimited)"
                  placeholder="0xd8da6bf26964af9d7eed9e03e53415d37aa96045,0x34cfac646f301356faa8b21e94227e3583fe3f5f"
                  onChange={(e) => setSigners(e.split(','))}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <TextField label="Signatures required" placeholder="2" onChange={(e) => setNeededSigs(e)} />
              </div>

              <PrimaryButton
                style={{ marginBottom: '16px', maxWidth: '180px' }}
                isDisabled={!account || signers === [] || neededSigs === '' || isNaN(parseInt(neededSigs))}
                onPress={() => deployMultisig()}
              >
                Deploy
              </PrimaryButton>
            </StepsContainer>
          </ContentWrapper>
        </PageContentWrapper>
      </PageWrapper>
    </>
  );
};

export { DeployPage };
