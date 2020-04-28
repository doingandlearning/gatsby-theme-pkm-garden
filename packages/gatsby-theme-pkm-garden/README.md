## Description

This creates a wiki from your file system

#### Inspiration

There has been a lot of inspiration for this and we'll keep digging into more and more ways to make this a richer experience. Here are some of the sources:

[Andy Matuschak’s notes](https://notes.andymatuschak.org/)
[Joel Hooks’ thoughts digital garden post](https://joelhooks.com/digital-garden)
[Tom Critchlow’s digital garden](https://tomcritchlow.com/2019/02/17/building-digital-garden/)

## Conventions

SCREENSHOT

We use `Topic` to denote groups of `Notes`. Here is an overview of the component structure.

```js
<Breadcrumbs />
<Topics>

  <TopicList>
    <Topics>
  </TopicList>

  <NotesList>
    <Notes>
      <Note />
    <Notes>
  </NotesList>

</Topics>
```

Topics can be infinitely nested.

Notes are in `.md` and `.mdx` format in relevant directories.

### Dependencies (optional)

- `gatsby-plugin-mdx`
- `lodash`
- `is-present`

Note, the original styling is using Tailwind classes so you'll need to implement your own here.

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

At the moment, the top-level component has the content that was extracted from the original blog.

I'm working on making the components more flexible but for the moment, if you want to get going, you need to shadow `src/components/TopicList.js` in your own Gatsby project.

This is what the current one looks like:

```js
export default ({ directories, location }) => {
  const isTopLevel = _.get(location, 'pathname', '/') === '/wiki'
  return (
    <div>
      <div className="content">
        <h1 className="text-center text-3xl py-6">Personal Wiki</h1>
        <Breadcrumbs location={location} />
        {isTopLevel && (
          <div className="py-4">
            <p className="py-2">
              This is my attempt to plant and grow a `digital garden`. I'll
              attempt to gather things I'm learning and groups of topics where
              my thinking is growing. The hope is this will be useful for me and
              for you.
            </p>
            <p className="py-2">
              This is an experiment at the moment but hopefully can grow into
              something useful. There are some placeholder topics to show how it
              will work with more content.
            </p>
            <p className="pt-4">Here are my next tasks:</p>
            <ol className="list-disc ml-4 py-4">
              <li className="line-through">
                Have something similar to{' '}
                <a href="https://busterbenson.com/piles/">piles</a> on each
                topic card.{' '}
              </li>
              <li>Deal with images in directories</li>
              <li>Improve styling</li>
            </ol>
          </div>
        )}
        <TopicList directories={directories} location={location} />
        {!isTopLevel && (
          <NoteList directories={directories} location={location} />
        )}
      </div>
    </div>
  )
}
```

You can change the content in the `isTopLevel` render to personalize your version more.

TODO:

- Custom wiki path
- Other types of content (images, snippets, etc)
- Specific pages for types of content (Books, Lectures, Websites, Talks, Courses, etc)
-

## When do I use this plugin?

When creating your digital garden (see links up above).

## Examples of usage

[@dolearning](https://www.kevincunningham.co.uk/wiki) - personal knowledge base to curate digital notes.

## How to query for data (source plugins only)

At the moment we're using a set query - going forward it would be good to have this customized.

## How to run tests

TODO

## How to develop locally

Clone the repo and run `yarn workspace www develop` to run the example version.

## How to contribute

Raise an issue on the repo.
