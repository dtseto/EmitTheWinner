//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
//interface to interact with external contract
interface ExtContractToCall{
  function attempt() external;
}
//proxy smart contract call attempt on target
contract EmitTheWinnerEvent{
  function emitTheWinnerEvent(address contractAddress) public {
    ExtContractToCall(contractAddress).attempt();
  }
}
