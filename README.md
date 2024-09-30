
# Mush 'n' Kush Shop: A Privacy-First, Decentralized Transparent Marketplace

## Overview

### Problem Statement

In the medical cannabis industry, many consumers face significant privacy concerns when purchasing products online. Personal information, such as medical conditions and identity, is often stored and shared with third parties, raising confidentiality risks. Additionally, the reliance on intermediaries in traditional marketplaces can lead to delays, higher costs, and reduced privacy for both buyers and sellers. Trust in product quality, payment security, and delivery is also a major concern, as patients often pay upfront without guarantees on product authenticity or delivery timelines.

### Solution

Our solution is a decentralized medical cannabis e-commerce platform that prioritizes user privacy and transparency. By leveraging blockchain technology, we create a secure, anonymous marketplace where patients can purchase cannabis products without fear of being tracked or having their medical information exposed. Transactions are secured through smart contracts, with payments held in escrow and only released after delivery is confirmed by both the buyer and the shipper.  
Importantly, sensitive data such as shipping addresses is never stored, ensuring full privacy for users. The platform provides transparency in the transaction and product verification process, ensuring trust between buyers and sellers while maintaining the highest standards of privacy and security.

## Key Features

- **Anonymous Shopping**  
  - No personal data is stored on the platform, and shipping addresses are not retained.
  - Users can browse and purchase products without fear of being tracked or targeted.

- **Escrow Payments**  
  - Payments are held in escrow until the product is confirmed by both the buyer and the shipper.
  - Ensures trust in the transaction process and reduces fraud.

- **Order Tracking Without Personal Data**  
  - Orders can be tracked by both buyers and sellers without saving sensitive information, providing transparency in the delivery process.

- **Automatic Payment Deployment**  
  - Once the shipper confirms drop-off and the buyer confirms receipt, the payment is automatically deployed from escrow.

## Technology Stack

### Backend

- **Scroll zkEVM Layer-2 Blockchain**: Used for deploying the smart contracts that manage escrow, order tracking, and payment release.
- **Alchemy**: Used as an RPC provider to interact with the Ethereum blockchain, ensuring efficient and reliable access to the network.

### Frontend

- **Next.js**: A React framework that provides server-side rendering and static site generation for faster performance and SEO optimization.
- **Tailwind CSS**: A utility-first CSS framework used for building custom user interfaces quickly and efficiently, providing flexibility with predefined styles.
- **Wagmi**: A collection of React hooks for easy interaction with Ethereum and EVM-compatible blockchains.

## Tenets of the dApp

### Transparency

All transactions and product listings are recorded on the blockchain, providing a tamper-proof history that enhances trust between buyers and sellers.

### Security

Smart contracts handle the transactions and escrow automatically, ensuring that payments are only released once both parties confirm the successful delivery. This eliminates the need for intermediaries and reduces the risk of fraud.

### Privacy

User privacy is a core focus. Shipping addresses are never saved, and the platform requires minimal personal information compared to traditional e-commerce systems.

### Decentralization

All critical processes—such as order tracking, payments, and product listing—are decentralized, removing reliance on a central authority and ensuring more equitable participation from sellers and buyers alike.

### Lower Costs

The absence of intermediaries and reduced overhead costs result in lower prices for consumers, and sellers keep a larger share of their revenue.

### Instant Transactions

Blockchain technology allows for faster, secure payments that are held in escrow and released immediately once both parties confirm delivery.

### Quality Assurance

Buyers can track products from sellers, verifying authenticity and quality via immutable blockchain records.

### Community Engagement

A decentralized marketplace encourages community-driven improvements, allowing users to propose changes, vote on platform features, or even suggest new product offerings.

### Regulatory Compliance

Smart contracts can be programmed to ensure compliance with local laws and regulations, providing both consumers and sellers with legal security.

### Our Approach

#### Phase 1: Problem Definition and Requirements Gathering

**Objective:** Understand the key challenges in the current medical cannabis marketplace, particularly in privacy protection, product quality assurance, and transaction transparency.

**Approach:**

- Conduct in-depth research to identify pain points from consumers, sellers, and regulatory bodies within the medical cannabis space.
- Gather insights on how privacy, security, and regulatory compliance impact buyer and seller behavior.
- Define the core requirements for a decentralized medical cannabis marketplace, including user anonymity, secure product transactions, privacy-preserving age verification, and escrow-managed payments.
- Design the system architecture to meet these needs and create UI/UX wireframes that focus on ease of use, accessibility, and secure interactions.

#### Phase 2: Smart Contract Development

**Objective:** Develop and deploy smart contracts to ensure privacy, transparency, and trust throughout the buying and selling process.

**Approach:**

- Create a smart contract for escrow services to manage payment flow, ensuring that funds are only released to sellers once delivery is confirmed by both the shipper and buyer.
- Develop a product verification contract, allowing buyers to authenticate the quality and origin of medical cannabis products on the blockchain.
- Implement age-verification using zero-knowledge proof (ZK Proof) technology, allowing buyers to prove they meet the minimum age requirement (21+) without revealing sensitive personal data.
- Use advanced cryptographic techniques like ECDSA to anonymize user transactions, protecting buyer identities throughout the transaction process.
- Thoroughly test all smart contracts on Ethereum testnets to ensure functionality and security before deploying them to the mainnet.

#### Phase 3: Frontend Development

**Objective:** Build an intuitive and secure interface that enhances user experience while interacting with the decentralized marketplace.

**Approach:**

- Develop the frontend using **Next.js** to optimize performance and SEO, ensuring the platform is both fast and user-friendly.
- Implement **React.js** to create a dynamic, responsive interface that simplifies the shopping process for patients and sellers.
- Integrate **Wagmi** to manage secure blockchain interactions, such as wallet connections, payment transactions, and ZK Proof verifications.
- Utilize **Web3.js** to facilitate seamless communication between the frontend and the deployed smart contracts, ensuring real-time updates for product availability, transaction status, and escrow management.
- Ensure the platform accommodates a wide range of user needs by developing user flows for product search, order tracking, and rating system interaction.

#### Phase 4: Testing, Security Audit, and Deployment

**Objective:** Guarantee a secure, reliable, and scalable platform by conducting rigorous testing and audits prior to deployment.

**Approach:**

- Conduct comprehensive testing, including unit, integration, and end-to-end tests, to ensure every aspect of the platform performs optimally under various conditions.
- Engage with third-party security firms to perform smart contract audits, identifying vulnerabilities and ensuring the integrity of the escrow, age-verification, and anonymization processes.
- Deploy the smart contracts on Ethereum mainnet after all testing and security audits have passed.
- Launch the frontend application on a cloud-based service (e.g., **Vercel**, **Netlify**) or a decentralized hosting platform (e.g., **IPFS**) to enhance availability, security, and censorship resistance.

#### Phase 5: Maintenance and Future Enhancements

**Objective:** Continuously monitor and enhance the platform based on user feedback, industry trends, and evolving technological standards.

**Approach:**

- Monitor platform performance post-launch, ensuring the system functions smoothly under real-world conditions, and quickly resolve any issues that arise.
- Implement new features based on user feedback and market demands, such as location-based product suggestions, improved escrow mechanisms, or enhanced product filtering options.
- Expand the platform’s reach by integrating multi-language support and additional region-specific features to better serve a global customer base.
- Plan for scaling the system to accommodate larger marketplaces and integrate with more sellers, products, and additional blockchain-based services as the platform grows. Regularly update security protocols and implement real-time analytics to ensure the platform remains at the cutting edge of decentralized e-commerce.

## Future Development Plans

We are continually working on enhancing the platform with new features that improve the user experience, security, and functionality. Below are the upcoming developments we plan to implement:

### 1. **Track Sellers and Product Ratings**

- **Seller Ratings**: Allow buyers to rate and review sellers, providing transparency and trust within the platform. Sellers will receive feedback based on factors like product quality, delivery time, and customer service.
- **Product Ratings**: Buyers will also be able to rate individual products, helping future buyers make informed decisions about what to purchase.

### 2. **Zero-Knowledge Proof (ZK Proof) Implementations**

- **Age Verification (Age > 21)**: Implement ZK proof technology to securely verify that a buyer is over the age of 21 without revealing other personal details. This feature will be crucial for regulatory compliance, especially when selling age-restricted products.
- **Location Verification**: Using ZK proof to confirm the location of a product in relation to a buyer’s area. This will enable the platform to suggest the nearest available products to the buyer without compromising the buyer's privacy.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- NPM or Yarn
- Next.js
- Tailwind CSS
- Hardhat

### Installation

#### Clone the Repository

```bash
git clone 'https://github.com/user/DecentralizedShop.git'
cd DecentralizedShop
```

#### Install Dependencies

```bash
npm install
# or
yarn install
```

#### Configure Alchemy RPC Provider

1. Sign up for an Alchemy account and create a new app on the Ethereum network.
2. Copy your Alchemy API key and add it to a `.env` file in the project root as follows:

```txt
ALCHEMY_API_KEY=<Your_Alchemy_API_Key>
```

#### Configure Next.js

Ensure that your development environment is set up for Next.js. Next.js is already included in the project's dependencies, so you can start the development server using:

```bash
npm run dev
# or
yarn dev
```

#### Tailwind CSS Setup

1. Install Tailwind CSS by running:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. In the `tailwind.config.js` file, configure the paths for all files using Tailwind:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the following to your `./styles/globals.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Deploy Smart Contracts

- **Smart Contracts**: Deploy to the Scroll testnet or mainnet using Hrdhat or Foundry. Youmay also or interact with the already deployed contract stored in ```./contract/address.txt```.
- **Frontend Application**: Deploy the Next.js app on a cloud service (e.g., Vercel/Netlify) or decentralized hosting (e.g., IPFS or Fleek).

#### Run the Application

```bash
npm run dev
# or
yarn dev
```

## Contributing

We welcome contributions from the community! Feel free to fork the repository, make your changes, and submit a pull request. Ensure that all code is well-documented and thoroughly tested.

## License

This project is licensed under the MIT License.

## Acknowledgments

We extend our thanks to the developers behind Alchemy, Scroll, and all open-source contributors who have helped make this decentralized marketplace possible.
