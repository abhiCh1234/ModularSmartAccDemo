export const ChainId = {
  MAINNET: 1, // Ethereum
  GOERLI: 5,
  POLYGON_MUMBAI: 80001,
  POLYGON_MAINNET: 137,
  ARBITRUM_GOERLI: 421613,
};

export let activeChainId = ChainId.POLYGON_MUMBAI;
export const paymasterApi = "https://paymaster.biconomy.io/api/v1/80001/WEX9LXdFW.13107308-4631-4ba5-9e23-2a8bf8270948";
export const bundlerUrl = "https://bundler.biconomy.io/api/v2/80001/WEX9LXdFW.13107308-4631-4ba5-9e23-2a8bf8270948";

export const supportedChains = [
  ChainId.GOERLI,
  ChainId.POLYGON_MAINNET,
  ChainId.POLYGON_MUMBAI,
  ChainId.ARBITRUM_GOERLI
];

export const getRPCProvider = (chainId: number) => {
  switch (chainId) {
    case 1:
      return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
    case 5:
      return "https://eth-goerli.alchemyapi.io/v2/lmW2og_aq-OXWKYRoRu-X6Yl6wDQYt_2";
    case 80001:
      return "https://polygon-mumbai.g.alchemy.com/v2/Q4WqQVxhEEmBYREX22xfsS2-s5EXWD31";
    case 137:
      return "https://polygon.llamarpc.com";
    default:
      return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
  }
};

export const getExplorer = (chainId: number) => {
  switch (chainId) {
    case 1:
      return "https://etherscan.io";
    case 5:
      return "https://goerli.etherscan.io";
    case 80001:
      return "https://mumbai.polygonscan.com";
    case 137:
      return "https://polygonscan.com";
    case 421613:
      return "https://goerli.arbiscan.io/";  
    default:
      return "https://mumbai.polygonscan.com";
  }
};
