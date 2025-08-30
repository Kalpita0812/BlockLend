# 🚀 How to Run Your DeFi Lending Application

## 📋 Prerequisites

- ✅ Node.js (v16 or higher)
- ✅ npm or yarn
- ✅ Python 3.7+ (for risk engine)
- ✅ MetaMask wallet with Monad testnet configured

## 🔧 Setup Steps

### 1. Install Dependencies

```bash
# Install all dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Configure Environment

Your environment is already configured with:
- ✅ Monad testnet RPC URL
- ✅ Private key for contract interactions
- ✅ Deployed contract addresses

### 3. Configure MetaMask for Monad Testnet

Add Monad testnet to MetaMask:
- **Network Name**: Monad Testnet
- **RPC URL**: `https://testnet-rpc.monad.xyz`
- **Chain ID**: `10143`
- **Currency Symbol**: `MONAD`
- **Block Explorer**: `https://explorer.testnet.monad.xyz`

## 🖥️ Running the Application

### Option 1: Run Backend Only

```bash
# Start the backend server
npm run dev:backend
```

**Backend will run on**: `http://localhost:3000`

### Option 2: Run Frontend Only

```bash
# Start the frontend development server
npm run dev:frontend
```

**Frontend will run on**: `http://localhost:5173`

### Option 3: Run Both (Recommended)

Open **two terminal windows**:

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

## 🌐 Application Access

### Frontend URLs:
- **Main Application**: http://localhost:5173
- **Landing Page**: http://localhost:5173/
- **Login**: http://localhost:5173/login
- **Register**: http://localhost:5173/register

### Backend API Endpoints:
- **Health Check**: http://localhost:3000/health
- **KYC Submit**: http://localhost:3000/kyc/submit
- **Loan Requests**: http://localhost:3000/loans/request
- **Property Submit**: http://localhost:3000/properties/submit

## 👤 User Roles & Testing

### 1. **Borrower**
- Register/Login with MetaMask
- Submit KYC information
- Request loans with collateral
- View loan status

### 2. **Lender**
- Register/Login with MetaMask
- Browse available loans
- Fund loans
- Earn interest

### 3. **Property Owner**
- Submit property details
- Get property verified
- Use property as collateral

### 4. **Government Official**
- Approve KYC applications
- Verify property documents
- Handle disputes

## 🔗 Smart Contract Integration

Your application is now connected to the deployed contracts on Monad testnet:

- **CreditNFT**: `0x03D96454beCbe5Ccd0df7a80aBc42f60F85CD87E`
- **LoanManager**: `0xB8F4f80606E1899D1ec54D69eF98bd4E76812638`
- **DaoPool**: `0x2a9A1F1d3A8393bcbd8d6b9C9ed501D6B149aD74`
- **InsurancePool**: `0x7053B258A1946688F9e121C942E4E44DD944Ad62`
- **LandRegistry**: `0x7Bb06A24b62C60e7E61Ea06263b56B8e87903f9F`

## 🧪 Testing the Application

### 1. **Connect MetaMask**
- Open the application in your browser
- Click "Connect Wallet" or "Login with MetaMask"
- Approve the connection

### 2. **Complete KYC**
- Navigate to KYC section
- Fill in your details
- Submit for approval

### 3. **Test Loan Functionality**
- As a borrower: Request a loan
- As a lender: Browse and fund loans
- Monitor loan status and repayments

### 4. **Test Property Registry**
- Submit property details
- Get verification from officials
- Use property as collateral

## 🐛 Troubleshooting

### Common Issues:

1. **MetaMask Connection Failed**
   - Ensure MetaMask is installed
   - Check if Monad testnet is added
   - Refresh the page

2. **Backend Not Starting**
   - Check if port 3000 is available
   - Verify all dependencies are installed
   - Check console for error messages

3. **Frontend Not Loading**
   - Check if port 5173 is available
   - Verify frontend dependencies
   - Check browser console for errors

4. **Contract Interactions Failing**
   - Ensure you have testnet tokens
   - Check if contracts are properly deployed
   - Verify RPC connection

### Debug Commands:

```bash
# Check if ports are in use
netstat -ano | findstr :3000
netstat -ano | findstr :5173

# Check Node.js version
node --version

# Check npm version
npm --version

# Clear npm cache if needed
npm cache clean --force
```

## 📱 Application Features

### ✅ **Implemented Features:**
- User authentication with MetaMask
- KYC submission and approval
- Loan request and management
- Property registration
- Smart contract integration
- Real-time blockchain interactions

### 🔄 **Workflow:**
1. User registers/logs in
2. Completes KYC process
3. Submits loan request or property
4. Officials approve/reject
5. Smart contracts execute transactions
6. Users can track status

## 🎯 Next Steps

After running the application:

1. **Test all user flows**
2. **Verify smart contract interactions**
3. **Test with multiple users**
4. **Monitor transaction logs**
5. **Gather feedback and iterate**

---

**🚀 Your DeFi lending platform is now ready to use on Monad testnet!**

