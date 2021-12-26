// SPDX-License-Identifier: GPL-3.0-or-later
// this is the deployed implementation used in the app, compiled with 0.8.4, 1000 optimizer runs
pragma solidity >=0.8.4;
/// @notice Simple gas-optimized multi-signature contract.
contract Multisig {
    event Propose(address indexed proposer, uint256 indexed proposal);
    event Sign(address indexed signer, uint256 indexed proposal);
    event Execute(uint256 indexed proposal);

    error NotSigner();
    error Signed();
    error InsufficientSigs();
    error ExecuteFailed();

    uint256 public sigsRequired;
    uint256 public proposalCounter;

    mapping(address => bool) public signer;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public signed;

    struct Proposal {
        address target;
        uint256 value;
        bytes payload;
        uint256 sigs;
    }

    constructor(address[] memory signers_, uint256 sigsRequired_) {
        // cannot realistically overflow on human timescales
        unchecked {
            for (uint256 i; i < signers_.length; i++) {
                signer[signers_[i]] = true;
            }
        }     
        sigsRequired = sigsRequired_;
    }

    function propose(address target, uint256 value, bytes calldata payload) external {
        // cannot realistically overflow on human timescales
        unchecked {
            uint256 proposal = proposalCounter++;

            proposals[proposal] = Proposal({
                target: target,
                value: value,
                payload: payload,
                sigs: 0
            });

            emit Propose(msg.sender, proposal);
        }
    }

    function sign(uint256 proposal) external {
        if (!signer[msg.sender]) revert NotSigner();
        if (signed[proposal][msg.sender]) revert Signed();
        
        // cannot realistically overflow on human timescales
        unchecked {
            proposals[proposal].sigs++;
        }
        
        signed[proposal][msg.sender] = true;

        emit Sign(msg.sender, proposal);
    }

    function execute(uint256 proposal) external returns (bool success, bytes memory result) {
        Proposal storage prop = proposals[proposal];

        if (prop.sigs < sigsRequired) revert InsufficientSigs();

        (success, result) = prop.target.call{value: prop.value}(prop.payload);

        if (!success) revert ExecuteFailed();
        
        delete proposals[proposal];

        emit Execute(proposal);
    }

    receive() external payable virtual {}
}