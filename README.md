# Configurations examples

## What is Specify?

Specify helps you unify your organization's brand identity at scale by collecting, storing and distributing design tokens and assets — automatically.

See Specify as a design API helping organizations manage their branding within their design system.
## What is this repository?

This repository helps you configure Specify and define a custom transformation pipeline for your design data. Find in this repository ready to use Specify configurations on specific environments (e.g. Style Dictionary, CSS Variables, Tailwind, Theme UI...).

Bootstrap pipelines to synchronize and transform your design tokens and assets in seconds.

👉 Feel free to clone the repository to customize those configurations as you wish.

This example repository helps you understand how to combine and configure Specify's parsers with real-world examples.

## How does it work?

The `/examples` directory contains a directory for each environment. Those examples work independently from each other. Each of them give you access to some commands to help you get the same output they present.
All examples are detailed by their own `README.md`.

## What is the .env file?
We recommend you to store and use your personal access token thanks to an `.env` file.

ℹ️ You will only be able to use this `.env` file inside a Specify configuration written in JavaScript.

However, Specify can have its configuration is JSON if:
- You want to
- Your configuration is meant to be used inside a Github repository

## How to try configuration examples?
To try the provided examples, you need to:
1. [Setup a Specify repository](https://help.specifyapp.com/en/articles/4722413-create-a-repository)
2. [Generate a personal access token](https://help.specifyapp.com/en/articles/4722408-manage-your-personal-access-tokens)
3. Clone this repo
4. Create a `.env` file from the `.env.example` in the root directory: `cp .env.example .env`
5. Update the new `.env` file by:
  1. Setting the Specify repository you're pulling design data from using the following format `@yourspecifyorganisation/yourspecifyrepository`
  2. Setting your personal access token

You can now try all examples from this repository with a single personal access token.

## Other available environment examples
- [Tailwindcss / Windicss](https://github.com/Specifyapp/configurations-examples/tree/main/examples/tailwind-windi)
