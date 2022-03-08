# Tailwind / Windi

## What is this directory?
This directory contains ready to use examples of Specify configurations generating a Tailwind theme. The generated theme is also compatible with [Windi](https://windicss.org/guide/configuration.html).

Some examples are more complex than others. Feel free to update them as you wish.

## Available examples
- `theme`: only generates the theme file for Tailwind / Windi
- `theme-with-assets`:
  1. Generates the theme file
  2. Downloads and creates the font files
  3. Creates the CSS file containing your `@font-face` import rules for your font assets
- `theme-with-assets-json`: Same as `theme-with-assets` but written in `json` format
- `theme-with-assets-github`: Same as `theme-with-assets-json` but with Github specific options

## How to use the examples

### theme / theme-with-assets

1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Update the new `.env` file by:
   1. Setting the Specify repository you're pulling design data from
   2. Setting your personal access token
3. In `examples/tailwind-windi`, run `npm i` or `yarn`
4. In the same directory, run `npm run generate:theme` or `npm run generate:theme-assets` (`yarn generate:theme` or `yarn generate:theme-assets`)

All the files will appear in the directory of the example you have selected.

### theme-with-assets-json

1. In the `examples/tailwind-windi/theme-with-assets-json`, complete the data of repository and personal access token
2. In `examples/tailwind-windi`, launch `npm i` or `yarn`
3. In the same directory launch `npm run generate:theme-assets-json` (`yarn generate:theme-assets-json`)

All the files will appear in the directory `theme-with-assets-json`.

### theme-with-assets-github
1. Check Specify has access to your GitHub repository. See [our dedicated article](https://help.specifyapp.com/en/articles/4722440-add-github-as-a-destination).
2. Create a `.specifyrc.json` in your GitHub repository set as a destination to your Specify repository.
3. Paste the content of the `theme-with-assets-github/.specifyrc.json` in it.
4. A pull request will be created by Specify containing your design tokens and assets.

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
- [svgo](https://github.com/Specifyapp/parsers/tree/master/parsers/svgo)
