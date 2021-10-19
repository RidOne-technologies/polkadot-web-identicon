# Polkadot Web Identicon building guide 🏗

For Those wo want to build from this project or tweak it here is a guide of how the packages are built for release.

Note that the web component is based on the `polkadot-angular-identicon` component.

1)Make sure to have the Angular cli installed or install it with `npm i -g @angular/cli`

2) Clone the project `polkadot-web-identicon` to open it into your favorite IDE.

3) Install dependencies with `npm i`

4) Open your IDE's terminal and type `ng build` to build the web component library.

A `dist` folder containing `polkadot-web-identicon` folder is created.
Inside the `dist/polkadot-web-identicon` you can see a couple of generated files :

![built files](assets/built.png)

The `relevant` files are the following:

    - ...
    - main.[hash].js
    - polyfills.[hash].js
    - runtime.[hash].js 
    - ...

A this point you can use the components

just by including in your html file like

```javascript
<script type="text/javascript" src="path/to/main-xxx.js"></script>
<script type="text/javascript" src="path/to/polyfills-xxx.js"></script>
<script type="text/javascript" src="path/to/runtime-xxx.js"></script>
```

and call the web component

```html 
    <polkadot-web-identicon address="5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty" theme="jdenticon" size="120"></polkadot-web-identicon>
```





