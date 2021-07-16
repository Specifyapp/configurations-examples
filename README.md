# Configurations examples

## What is Specify?

Specify helps you unify your organization's brand identity at scale by collecting, storing and distributing design tokens and assets — automatically.

## What is this repository?

This repository helps you easily set up your Specify parser pipeline by supplying ready to use configurations on specific environments.
With it, you can bootstrap your Specify pipeline in seconds and customize it to fit your needs.

This example repository also shows how to combine and configure the parsers and show more real-world examples.

## How does it work?

The `/examples` directory contains a directory for each environment. Those examples work independently and give you access to some commands to have the result of the examples they give.
Each example environment supply a `README.md` to give you more context and more informations.

## What is the .env file?
We recommend you to store and use your personal access token from an `.env` file.
You will only be able to use this `.env` file inside a Specify configuration written in JavaScript.

However, Specify can have its configuration is JSON in the following cases:
- If you want to
- If your configuration is meant to be read used inside a Github repository.

To try the examples, you need to:
1. Setup a Specify repository
2. Generate a personal access token

So that you can try every examples only from a single repository and a single personal access token, the `.env` file is in the root directory and will be used in the examples.

## Environment examples available
- [Tailwindcss / Windicss](https://github.com/Specifyapp/configurations-examples/tree/main/examples/tailwind-windi)
