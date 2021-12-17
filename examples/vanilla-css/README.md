# Vanilla CSS

## What is this directory?
This directory contains ready to use examples of Specify configurations generating design tokens as CSS variables.

Some examples are more complex than others. Feel free to update them as you wish.

## Available examples
### colors-and-text-styles
This configuration is the most simple one. It is written JavaScript and will get the Specify repository and the personal access token through environment variables.

This configuration helps you generate specific CSS files containing your:
- colors
- text styles

In addition it will also:
1. Download font files in the `assets/` folder
2. Create your CSS `@font-face` declarations to import your font files

### all-design-tokens-and-assets
This configuration is the most complete one. It is written JavaScript and will get the Specify repository and the personal access token through environment variables.

This configuration helps you generate specific CSS files containing your:
- colors
- borders
- depths
- durations
- gradients
- measurements
- shadows
- text styles

In addition it will also:
1. Download vectors and optimize them thanks to the [svgo parser](https://github.com/Specifyapp/parsers/tree/master/parsers/svgo) in the `assets/` folder
2. Download font files in the `assets/` folder and create your CSS `@font-face` declarations to import your font files. 
3. Download bitmaps in the `assets/` folder

### all-design-tokens-and-assets-json
Same as [`all-design-tokens-and-assets`](###all-design-tokens-and-assets) but written in `json` format.

### all-design-tokens-and-assets-github
Same as [`all-design-tokens-and-assets-json`](###all-design-tokens-and-assets-json) but with Github specific options.

## How to use the examples

### colors-and-text-styles
1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Update the new `.env` file by:
  1. Setting the Specify repository you're pulling design data from
  2. Setting your personal access token
3. In `examples/vanilla-css`, run `npm i` or `yarn`
4. In the same directory, run `npm run generate:colors-and-text-styles` or `yarn generate:colors-and-text-styles`

All the files will appear in the directory of the example you have selected.

### all-design-tokens-and-assets

1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Update the new `.env` file by:
  1. Setting the Specify repository you're pulling design data from
  2. Setting your personal access token
3. In `examples/vanilla-css`, run `npm i` or `yarn`
4. In the same directory, run `npm run generate:all-design-tokens-and-assets` or `yarn generate:all-design-tokens-and-assets`

All the files will appear in the directory of the example you have selected.

### all-design-tokens-and-assets-json

1. In the `examples/vanilla-css/all-design-tokens-and-assets-json/specifyrc.json`:
  1. Set the Specify repository you're pulling design data from
  2. Set your personal access token
2. In `examples/vanilla-css`, launch `npm i` or `yarn`
3. In the same directory launch `npm run generate:all-design-tokens-and-assets-json` (`yarn generate:all-design-tokens-and-assets-json`)

All the files will appear in the directory `all-design-tokens-and-assets-json`.
### all-design-tokens-and-assets-github
1. Check Specify has access to your GitHub repository. See [our dedicated article](https://help.specifyapp.com/en/articles/4722440-add-github-as-a-destination).
2. Create a `.specifyrc.json` in your GitHub repository set as a destination to your Specify repository.
3. Paste the content of the `all-design-tokens-and-assets-github/.specifyrc.json` in it.
4. A pull request will be created by Specify containing your design tokens and assets.

## From example to project
Satisfied with your test configuration? It's now time to use it into a real project.

To do this:
1. Copy your Specify configuration file and paste it inside your real project.
2. Generate design tokens and assets by running: `npm run specify pull -C YOUR_CONFIG_FILE` (`yarn specify pull -C YOUR_CONFIG_FILE`)
3. Use the generated files by Specify

## Parsers used in the examples
- [to-css-custom-properties](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-custom-properties)
- [convert-font](https://github.com/Specifyapp/parsers/tree/master/parsers/convert-font)
- [to-css-font-import](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-font-import)
- [svgo](https://github.com/Specifyapp/parsers/tree/master/parsers/svgo)