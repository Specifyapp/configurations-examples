# Tailwind / Windi

## What is this directory?
Find ready to use examples of Specify parser pipeline configurations to generate the correct files to use the design tokens in a Tailwind/Windi environment.
There are several exemples you can copy/paste, being more or less complex.

## Available examples
- `theme` > Only generate the theme file for Tailwind / Windi
- `theme-with-fonts` > Generate the theme file + Download and create the font assets file + Create the CSS file that creates the `@font-face` rules for your font assets
- `theme-with-fonts-json` > The same as `theme-with-fonts` but written in json format
- `theme-with-fonts-github` > The same as `theme-with-fonts-json` but with Github specific options

## How to test the examples

### theme / theme-with-fonts

1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Put your data in the new `.env` file
3. In `examples/tailwind-windi`, launch `npm i` or `yarn`
4. In the same directory launch `npm run generate:theme` or `npm run generate:theme-fonts` (`yarn generate:theme` or `yarn generate:theme-fonts`)

All the files will appear in the directory of the example you have selected.

### theme-with-fonts-json

1. In the `examples/tailwind-windi/theme-with-fonts-json`, complete the data of repository and personal access token
2. In `examples/tailwind-windi`, launch `npm i` or `yarn`
3. In the same directory launch `npm run generate:theme-fonts-json` (`yarn generate:theme-fonts-json`)

All the files will appear in the directory `theme-with-fonts-json`.

### theme-with-fonts-github

1. Create a `.specifyrc.json` in a Github repository containing the content of our `theme-with-fonts-github/specifyrc.json` in it and link to Specify
2. A pull request will be created by Specify containing your theme and your font assets.

## From example to project
Satisfied with your test configuration? It's now time to use it into a real project.

To do this:
1. Copy your Specify configuration file and paste it inside your real project.
2. Generate your theme by running: `npm run specify pull -C YOUR_CONIG_FILE` (`yarn specify pull -C YOUR_CONIG_FILE`)
3. Use the generated files by Specify

## Parsers used in the examples
- [to-tailwind](https://github.com/Specifyapp/parsers/tree/master/parsers/to-tailwind)
- [convert-font](https://github.com/Specifyapp/parsers/tree/master/parsers/convert-font)
- [to-css-font-import](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-font-import)