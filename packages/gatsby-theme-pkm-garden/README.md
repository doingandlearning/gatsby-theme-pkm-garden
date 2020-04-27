## Description

This creates a wiki from your file system

#### Inspiration

    [Andy Matuschak’s notes](https://notes.andymatuschak.org/)
    [Joel Hooks’ thoughts digital garden post](https://joelhooks.com/digital-garden)
    [Tom Critchlow’s digital garden](https://tomcritchlow.com/2019/02/17/building-digital-garden/)

## Conventions

SCREENSHOT

We use `Topic` to denote groups of `Notes`.

Topics can be infinitely nested.

Notes are in `.md` and `.mdx` format in relevant directories.

### Dependencies (optional)

`gatsby-plugin-mdx`
`lodash`
`is-present`

### Learning Resources (optional)

## How to install

- npm install gatsby-theme-pkm-garden

* Add the module to your gatsby-config.js

```
module.exports = {
  ...
  plugins: [
    ...
    'gatsby-theme-pkm-garden'
    ...
  ]
}
```

- Create the directory `/content/wiki` which will store your wiki.

## Available options (if any)

TODO:

- Custom wiki path
- Other types of content (images, snippets, etc)

## When do I use this plugin?

When creating your digital garden (see links up above).

## Examples of usage

[@dolearning](https://www.kevincunningham.co.uk/wiki) - personal knowledge base to curate digital notes.

## How to query for data (source plugins only)

At the moment we're using a set query - going forward it would be good to have this customized.

## How to run tests

TODO

## How to develop locally

## How to contribute

Raise an issue on the repo.
