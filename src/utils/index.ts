import { ethers } from 'ethers';

export const toFloat = (bn:any, decimals:any) => {
  if (bn == undefined) {
    return;
  }
  return ethers.utils.formatUnits(bn, decimals);
};

export const toBN = (num:any, decimals:any) => {
  return ethers.utils.parseUnits(`${num}`, decimals);
};
