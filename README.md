# Step by step for setting up project

```bash
yarn add @types/node --dev
```

```bash
yarn add @emotion/react @emotion/styled @eslint/js @mui/icons-material @mui/material @tanstack/react-query-devtools @tanstack/react-query axios bignumber.js buffer crypto-token-icon date-fns jotai react-router-dom react-toastify uuid
```

## 1. Public folder

`public/images/logo` ⇒ logo images of app

`public/appicon.png` and `public/favicon.ico` ⇒ icon of app in tab menu

`public/bg.png` ⇒ thumbnail of app when paste link in social app (discord, tele, facebook,...)

`public/robots.txt` ⇒ replace APP_URL by your app base url (ex: https://app.orchai.io/sitemap.xml)

`public/sitemap.xml` ⇒ declare all page url of your project for gg search can read all routes of your project

## 2. Change index.html file

Search and change these following keys:

**`URL_WEBSITE`** ⇒ link web of production

```html
<meta property="og:url" content="https://app.orchai.io" />
```

**`TITLE_OF_APP`** ⇒ title of app (ex: Orchai, Centic, Thorn, ....)

```html
<meta property="og:title" content="Orchai" />

<title>Orchai</title>
```

**`DESCRIPTION_OF_APP`** ⇒ desc of app (ex: Orchai - DeFi Orchestrator Powered by AI built on Oraichain Mainnet and for Oraichain ecosystem.)

**`LINK_FONT_FAMILY_OF_APP`** ⇒ link font family of app (ex: https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap)

**`THUMBNAIL_WIDTH`** ⇒ width of thumbnail image (in pixel unit) (ex: 6251)

**`THUMBNAIL_HEIGHT`** ⇒ height of thumbnail image (in pixel unit) (ex: 2084)

**`KEYS_FOR_GG_SEARCH`** => for gg search, list keys words relative with project

```html
<meta name="keywords" content="Orchai, lend, borrow, crypto, lowcode defi, Oraichain, Blockchain, marketplace, loans, best profit, AI, Lending Platform, ecosystem, AI Oracle." />
```

## 3. Folder constants

-   Change logo url
-   in file constants/index.ts provide font family of app, and project WalletConnect id
    -   WalletConnect id get from _`https://cloud.reown.com/`_ (store all in account devops.tovchain@gmail.com)
    -   ask Leader to get WalletConnect id from Devops team

## 4. Folder services

-   in file baseUrl.ts ⇒ update api backend domain
-   in file apiUrl.ts ⇒ update api backend
-   in file callApi.ts ⇒ call api, or seprate to multi file in 1 folder call-apis, view detail in file

## 5. State Management

### Using Jotai

-   Example in folder `states/modal`, `states/themes` ⇒ follow convention of state data

## 6. Config theme

-   Detail in `states/themes`
-   Config 1 or many themes in themes/configs (in case app have more than 1 themes)

## 7. Connect Wallet

-   choose type of blockchain that app using (ex: cosmos ecosystem, evm, tron, solana)

### Cosmos ecosystem

```bash
yarn add chain-registry @cosmos-kit/cosmos-extension-metamask @cosmos-kit/keplr @cosmos-kit/leap @cosmos-kit/owallet @cosmos-kit/react-lite
```

### EVM ecosystem

```bash
yarn add wagmi viem
```

### Tron ecosystem

```bash
yarn add tronweb @tronweb3/tronwallet-adapter-react-hooks @tronweb3/tronwallet-adapter-tronlink
```

### Solana ecosystem

```bash
yarn add @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-wallets @solana/web3.js @solana/spl-token
```
