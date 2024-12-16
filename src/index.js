import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import App from './App';
import Routers from './route';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'e489cd9d43d5d2eac184b6ad121ef4fb';


const bscMainnet = {
  chainId: 56,
  name: 'Binance Smart Chain Mainnet',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://red-special-sea.bsc.quiknode.pro/71805dc676a9b32991fd57b913fd3b7b6dff75f2'
};


const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mybusinessclub.com/',
  icons: ['https://mybusinessclub.com/assets/MBC_logo.png']
};

const bscTestnet = {
  chainId: 97,
  name: "Binance Testent",
  currency: "BNB",
  explorerUrl: "https://testnet.bscscan.com/tx/",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

const modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [bscMainnet],
  themeMode: 'dark',
  projectId,
  enableEmail: true,
  defaultChain: bscMainnet,
  enableAnalytics: true
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routers />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
