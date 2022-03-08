# Color Themes

## What is this directory?
Find ready to use examples of Specify configurations to generate design tokens and assets compatible with a light and dark themes.
There are several exemples you can copy/paste, being more or less complex.

This directory assumes you have the following repository structure inside Specify:
| General     | Light Theme | Dark Theme |
|-------------|-------------|------------|
| Text style  | Color       | Color      |
| Measurement | Gradient    | Gradient   |
| Vector      | Border      | Border     |
| Duration    | Shadow      | Shadow     |
| Depth       |             |            |
| Font        |             |            |

This repository will help you generate the following design data:
```
🗂 assets
└── 🗂 styles
│   └── 🗂 borders
│   │   └── dark-theme.css
│   │   └── light-theme.css
│   └── 🗂 colors
│   │   └── dark-theme.css
│   │   └── light-theme.css
│   └── 🗂 gradients
│   │   └── dark-theme.css
│   │   └── light-theme.css
│   └── 🗂 shadows
│   │   └── dark-theme.css
│   │   └── light-theme.css
│   ├── depths.css
│   ├── durations.css
│   ├── fonts.css
│   ├── measurements.css
│   └── text-styles.css
├── 🗂 fonts
└── 🗂 icons
```

## Available examples
- `color-themes` > Specify configuration files written in JavaScript generating design tokens and assets compatible with light and dark themes.
- `color-themes-json` > Specify configuration files written in JSON generating design tokens and assets compatible with light and dark themes

## How to test the examples

### theme / theme-with-assets

1. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
2. Put your data in the new `.env` file
3. In `examples/color-themes`, launch `npm i` or `yarn`
4. In the same directory launch `npm run generate:theme` or `npm run generate:theme-json` (`yarn generate:theme` or `yarn generate:theme-json`)

All the files will appear in the directory of the example you have selected.

### color-themes-json

1. In the `examples/color-themes/color-themes-json`, set your specify repositories and personal access token
2. In `examples/color-themes`, launch `npm i` or `yarn`
3. In the same directory launch `npm run generate:theme-json` (`yarn generate:theme-json`)

All the files will appear in the directory `color-themes-json`.

## From example to project
Satisfied with your test configuration? It's now time to use it into a real project.

To do this:
1. Copy your Specify configuration file and paste it inside your real project
2. Generate your theme by running: `npm run specify pull -C YOUR_CONFIG_FILE` (`yarn specify pull -C YOUR_CONFIG_FILE`)
3. Use the generated files by Specify

## Parsers used in the examples
- [sort-by](https://github.com/Specifyapp/parsers/tree/master/parsers/sort-by)
- [to-css-custom-properties](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-custom-properties)
- [to-css-text-style](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-text-style)
- [convert-font](https://github.com/Specifyapp/parsers/tree/master/parsers/convert-font)
- [to-css-font-import](https://github.com/Specifyapp/parsers/tree/master/parsers/to-css-font-import)
- [svgo](https://github.com/Specifyapp/parsers/tree/master/parsers/svgo)