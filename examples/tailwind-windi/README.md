# Tailwind / Windi

## What is this directory?
This directory contains ready to use examples of Specify configurations generating a Tailwind theme. The generated theme is also  compatible with [Windi](https://windicss.org/guide/configuration.html).

Some examples are more complex than others. Feel free to update them as you wish.

## Available examples
- `theme`: only generates the theme file for Tailwind / Windi
- `theme-with-fonts`:
  1. Generates the theme file
  2. Downloads and creates the font files
  3. Creates the CSS file containing your `@font-face` import rules for your font assets
- `theme-with-fonts-json`: Same as `theme-with-fonts` but written in `json` format
- `theme-with-fonts-github`: Same as `theme-with-fonts-json` but with Github specific options

## How to use the examples

### theme / theme-with-fonts

1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Update the new `.env` file by:
   1. Setting the Specify repository you're pulling design data from
   2. Setting your personal access token
3. In `examples/tailwind-windi`, run `npm i` or `yarn`
4. In the same directory, run `npm run generate:theme` or `npm run generate:theme-fonts` (`yarn generate:theme` or `yarn generate:theme-fonts`)

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
2. Generate your theme by running: `npm run specify pull -C YOUR_CONFIG_FILE` (`yarn specify pull -C YOUR_CONFIG_FILE`)
3. Use the generated files by Specify

## Parsers used in the examples
- [to-tailwind](https://github.com/Specifyapp/parsers/tree/master/parsers/to-tailwind)
- [convert-font](https://github.com/Specifyapp/parsers/tree/master/parsers/convert-font)
- [to-css-font-import](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-font-import)