ng build polkadot-web-identicon --prod --extra-webpack-config webpack.partial.js --output-hashing=none --single-bundle true
mv dist/polkadot-web-identicon/main.js demo/polkadot-web-identicon.js
mv dist/polkadot-web-identicon/polyfills.js demo