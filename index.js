#!/usr/bin/env node

/**
 * Return the command line arguments.
 */
 const getArgs = () => {
    return require('yargs/yargs')(process.argv.slice(2))
        .usage('Usage: $0 [options]')
        .options({
            config: {
                description: 'Tailwind config file',
                requiresArg: false,
                alias: 'c',
                default: './tailwind.config.js'
            },
            output: {
                description: 'Output file',
                requiresArg: false,
                alias: 'o',
                default: './tailwind.js'
            },
        })
        .argv;
}

/**
 * Generate the file.
 */
try {
    const args = getArgs();
    const {theme} = require('tailwindcss/resolveConfig')(require(args.config));

    require('fs').writeFileSync(
        require('path/resolve')(process.cwd(), args.output),
        require('prettier').format(
            `const theme = ${JSON.stringify(theme)},
            export default theme`,

            {parser: 'babel'},
        ), 'utf-8',
    );
} catch (e) {
    console.log(e.message);
}