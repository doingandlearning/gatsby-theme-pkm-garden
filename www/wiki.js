const _ = require('lodash')
const path = require('path')

function createWiki({ allMdx, createPage }) {
  const wikiPath = '/wiki'

  const toNotesPath = (node) => {
    const { dir } = path.parse(node.parent.relativePath)
    return path.join(wikiPath, dir, node.parent.name)
  }

  const Note = require.resolve('./src/templates/note')
  const Topics = require.resolve('./src/templates/topics-template')
  const notes = allMdx.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === 'wiki'
  )

  // Create notes pages
  notes.forEach(({ node }) => {
    createPage({
      path: toNotesPath(node),
      context: {
        ...node,
        topic: node.parent.name,
      },
      component: Note,
    })
  })

  const notesUrls = notes.map(({ node }) => toNotesPath(node))

  const groupedNotes = notes.reduce((acc, { node }) => {
    const { dir } = path.parse(node.parent.relativePath)
    if (!dir) {
      return acc
    }

    acc[dir] = acc[dir] || []
    acc[dir].push({
      pagePath: path.join(wikiPath, dir),
      url: toNotesPath(node),
      ...node,
    })

    return acc
  }, {})

  Object.entries(groupedNotes).map(([dir, notes]) => {
    createPage({
      path: path.join(wikiPath, dir),
      context: {
        urls: notes.map((v) => v.url),
        groupedNotes,
      },
      component: Topics,
    })
  })

  createPage({
    path: wikiPath,
    context: {
      urls: notesUrls,
      groupedNotes,
    },
    component: Topics,
  })
}

module.exports = { createWiki }
