# Tailwind / Windi

## What is this directory?

Within this directory, you will find ready to use examples of specify parser pipeline configuration to generate the correct files to use the design tokens in a Tailwind/Windi environment.
There are several exemples you can copy/paste, being more or less complex.

## Available examples

- `theme` > Only generates the theme file for Tailwind / Windi
- `theme-with-fonts` > Generate the theme file + download and create the font assets file + create the css file that creates font-face for the font assets
- `theme-with-fonts-json` > The same as `theme-with-fonts` but written in json format.
- `theme-with-fonts-github` > The same as `theme-with-fonts-json` but with github specific options

## How to test the examples

### theme and theme-with-fonts

- In the root directory, there is a `.env.example`. Copy it in a `.env` file (`cp .env.example .env`) 
- Put your data in the `.env`
- In `examples/tailwind-windi`, launch `npm i` or `yarn`
- In the same directory launch `npm run extract:theme` or `npm run extract:theme-fonts` (`yarn extract:theme` or `yarn extract:theme-fonts`)

All the files will appear in the directory of the example you have selected.

### theme-with-fonts-json

- In the `examples/tailwind-windi/theme-with-fonts-json`, complete the data of repository and personal access token
- In `examples/tailwind-windi`, launch `npm i` or `yarn`
- In the same directory launch `npm run extract:theme-fonts-json` (`yarn extract:theme-fonts-json`)

All the files will appear in the directory `theme-with-fonts-json`.

### theme-with-fonts-github

There is currently no way to easily test this. You will have to create a `.specifyrc.json` in a Github repository containing the content of our `theme-with-fonts-github/specifyrc.json` in it and link to Specify.

## From example to project

When you're satisfied with your testing, you can easily copy/paste the content of the file you have decided to use in your own project and use `npm run specify pull -C myfile` (`yarn specify pull -C myfile`) and the same content will appear in your own project.

## Parsers used in the examples

- [to-tailwind](https://github.com/Specifyapp/parsers/tree/master/parsers/to-tailwind)
- [convert-font](https://github.com/Specifyapp/parsers/tree/master/parsers/convert-font)
- [to-css-font-import](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-font-import)