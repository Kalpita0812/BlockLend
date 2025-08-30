Monad Hackathon: Micro-Lending & Land Registry

End-to-end demo with Solidity contracts, Node backend, Python risk engine, and simple frontend.

## Prerequisites
- Node.js >= 18
- Python 3.9+
- Yarn or npm

## Install
```
npm install
```

## Configure
Create `.env` in the project root with:
```
RPC_URL=https://your-monad-rpc
PRIVATE_KEY=0x...
CREDIT_NFT_ADDRESS=0x...
LOAN_MANAGER_ADDRESS=0x...
DAO_POOL_ADDRESS=0x...
INSURANCE_POOL_ADDRESS=0x...
LAND_REGISTRY_ADDRESS=0x...
```

To generate ABIs and a template addresses file, deploy once locally/testnet:
```
npx hardhat compile
npx hardhat run deploy/deploy.js --network monadTestnet
```
This writes ABIs to `backend/abi/` and outputs `.env.generated` with contract addresses.

## Run
- Risk Engine (Python):
```
npm run dev:risk
```
- Backend (Node):
```
npm run dev:backend
```
- Frontend (static):
```
npm run dev:frontend
```
Open http://localhost:5174

## Features
- Borrower creates loan request; lender funds; repay; liquidation admin path
- Credit NFT placeholder mint/update (owner-only)
- DAO pool contribute/disburse; insurance pool premium/claim (owner-only)
- Land registry upload/verify/list/buy (buy via contract directly for now)
- Dispute storage in SQLite; simple review

## Notes
- Contracts are simplified for demo; add checks, events, access controls as needed.
- Use a stable ERC20 for Loan token, DAO, Insurance.

