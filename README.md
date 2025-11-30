# Crypto Stats

Crypto data and insights, at your fingertips.

## Features

- Cryptocurrency prices from multiple exchanges
- Crypto news from leading sources
- List of cryptocurrency exchanges
- Cryptocurrency charts
- And more!

## What’s inside

- React SPA using Ant Design and React Router with pages for home, cryptocurrencies, coin details, and news.
- RTK Query data layer calling RapidAPI (Coinranking for market data, Bing News for articles) via `src/services/features/`.
- Redux store setup in `src/services/app/store.js`; app wrapped with `Provider` and `BrowserRouter` in `src/index.js`.
- UI components live in `src/components/` (including `Navbar`, `CryptoCurrencies`, `CryptoDetails`, `News`, `Loader`, `Banned`); styles in `src/App.css`.
- CRA tooling: `npm start`, `npm test`, `npm run build`.

## Installation

To install Crypto Stats, simply clone the repository:

```sh
git clone https://github.com/samanhoseinpour/crypto-stats.git
```

Once the repository is cloned, you can install the dependencies:

```
cd crypto-stats
npm install
```

## Usage

To start Crypto Stats, simply run the following command:

```
npm start
```

Crypto Stats will then start running on port 3000. You can access it at http://localhost:3000 in your web browser.

## API keys

Both the coins data and news feed use RapidAPI. You need your own RapidAPI key (with access to Coinranking and Bing News Search) for the app to work:

- Create a `.env` in the project root with `REACT_APP_RAPIDAPI_KEY=<your-key>`.
- Update `src/services/features/coinsApi.js` and `src/services/features/newsApi.js` to use your key (the repo value is just a placeholder).
- Restart the dev server after changing the key.

If the News page shows the error screen, it usually means the Bing News RapidAPI subscription/key is missing or rejected.

## Support

If you have any questions or problems with Crypto Stats, please feel free to open an issue.

## Roadmap

- Support for more cryptocurrency exchanges
- Historical cryptocurrency data
- Cryptocurrency price alerts
- And more!

## Contributions

Contributions to Crypto Stats are welcome and appreciated. To contribute, simply fork the repository and create a pull request.

## Thanks

Thanks to all of the contributors to Crypto Stats!
