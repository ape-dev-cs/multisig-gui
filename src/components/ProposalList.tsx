import { Multisig } from '../contracts/Multisig';
import { Proposal } from './Proposal';

export interface ProposalListProps {
  multisig: Multisig;
  proposalCounter: number;
  sigsRequired: number;
}

export const ProposalList: React.FC<ProposalListProps> = (props) => {
  const proposals = [];
  for (let i = 0; i < props.proposalCounter; i++) {
    proposals.push(
      <Proposal key={i.toString()} multisig={props.multisig} proposalNumber={i} sigsRequired={props.sigsRequired} />,
    );
  }

  return <>{proposals}</>;
};
