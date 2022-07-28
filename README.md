# Tailwind Theme Variables

Generate a JS/TS file that allows you to reference the properties of your Tailwind theme.


### Usage
Simply install the package and run `tw-theme` to generate the file. By default, it looks for `./tailwind.config.js` and outputs to `./tailwind.js`

Install the package
```js
npm i -D ryantbrown/tailwind-theme-vars
```

Generate the theme file
```js
tw-theme
```

### Options

Specify the config and output files.
```js
tw-theme --config "./tailwind.config.js" -output "./theme.js"

tw-theme -c "./tailwind.config.js" -o "./tailwind.js"
```

