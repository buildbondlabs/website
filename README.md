# BuildBond Website

The official landing page for BuildBond.

## 🌐 Website

- **Production**: Coming soon
- **Development**: [http://localhost:5555](http://localhost:5555)

## 🚀 About BuildBond

BuildBond is a decentralized launch platform where verified software developers can issue tokens backed by reputation and locked collateral.

### Core Principle

Only real builders can launch tokens, and they must stake assets and follow vesting rules.

### Key Features

- **Developer Verification**: GitHub/GitLab repository ownership proof
- **Smart Contract Launch**: Token launch with bonding curve on Solana
- **Staking & Vesting**: Developers must stake collateral with locked vesting periods
- **AI Repo Review**: Automated quality and credibility scoring
- **Anti-Scam Protection**: Built-in safeguards against rug pulls

### How It Works

1. Developer verifies repository ownership
2. AI reviews repo quality and credibility
3. Developer stakes collateral (SOL)
4. Token launches with bonding curve
5. Upon graduation, token lists on DEX

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start development server on port 5555
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                 # Next.js app router pages
│   └── components/          # React components
│       ├── Hero.tsx         # Main hero section
│       ├── Problem.tsx      # Problem statement
│       ├── HowItWorks.tsx   # Step-by-step guide
│       ├── Features.tsx     # Platform features
│       ├── Community.tsx    # Community section
│       └── ...
└── package.json
```

## 🔗 Related Projects

| Project | Description | Directory |
|---------|-------------|-----------|
| Frontend App | Main application | `../frontend/` |
| Backend API | Go backend service | `../backend/` |
| Smart Contracts | Solana programs | `../contracts/` |

## 📝 License

Private project - All rights reserved.
