# Tailwind Theme Variables

Generate a JS/TS file that allows you to reference the properties of your Tailwind theme.


### Usage
Simply install the package and run `tw-theme` to generate the file. By default, it looks for `./tailwind.config.js` and outputs to `./tailwind.js`

```js
# Install the package
npm i -D ryantbrown/tailwind-theme-vars

# Generate the theme file
tw-theme
```

### Options

```
# Specify the config and output files.
tw-theme --config "./tailwind.config.js" -output "./theme.js"

# Use the short flags
tw-theme -c "./tailwind.config.js" -o "./tailwind.js"
```

