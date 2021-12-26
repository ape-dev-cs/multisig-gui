import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PrimaryButton } from '../components/Button';
import { HeaderSpacer } from '../components/Header';
import { ContentWrapper, HorizontalRule, OutlinedContainer, PageContentWrapper, PageWrapper } from '../components/layout/Common';
import { TextField } from '../components/TextField';
import { Text } from '../styles/typography';

const StepsContainer = styled(OutlinedContainer)`
  display: block;
  margin: auto;
  margin-top: 45px;
`;

const StepLabel = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
`;


const HomePage = () => {
  const navigate = useNavigate();
  const { account } = useWeb3React<Web3Provider>();

  const [contract, setContract] = useState(``);
  return (
    <>
      <PageWrapper>
        <HeaderSpacer />
        <PageContentWrapper>
          <ContentWrapper>
            <StepsContainer>
              <StepLabel>Deploy a new multisig</StepLabel>
              <PrimaryButton
                onPress={() => {
                  navigate('/multisig-gui/deploy');
                }}
                style={{
                  maxWidth: '180px',
                  marginTop: '30px',
                  marginBottom: '30px',
                }}
              >
                Deploy
              </PrimaryButton>
              <HorizontalRule />
              <div style={{ marginBottom: 24, marginTop: 24 }}>
                <TextField
                  onChange={(e) => setContract(e)}
                  label="Or use an existing one"
                  placeholder="0x34cfac646f301356faa8b21e94227e3583fe3f5f"
                />
              </div>

              <PrimaryButton
                onPress={() => navigate(`/multisig-gui/multisig/${contract}`)}
                style={{ marginBottom: '16px', maxWidth: '180px' }}
              >
                Use
              </PrimaryButton>
            </StepsContainer>
          </ContentWrapper>
        </PageContentWrapper>
      </PageWrapper>
    </>
  );
};

export { HomePage };
