# Step by step for setting up project

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
<meta property="og:title" content="Orchai" /> <title>Orchai</title>
```

**`DESCRIPTION_OF_APP`** ⇒ desc of app (ex: Orchai - DeFi Orchestrator Powered by AI built on Oraichain Mainnet and for Oraichain ecosystem.)

**`LINK_FONT_FAMILY_OF_APP`** ⇒ link font family of app (ex: https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap)

**`THUMBNAIL_WIDTH`** ⇒ width of thumbnail image (in pixel unit) (ex: 6251)

**`THUMBNAIL_HEIGHT`** ⇒ height of thumbnail image (in pixel unit) (ex: 2084)

**`KEYS_FOR_GG_SEARCH`** => for gg search, list keys words relative with project

```html
<meta name="keywords" content="Orchai, lend, borrow, crypto, lowcode defi, Oraichain, Blockchain, marketplace, loans, best profit, AI, Lending Platform, ecosystem, AI Oracle." />
```
