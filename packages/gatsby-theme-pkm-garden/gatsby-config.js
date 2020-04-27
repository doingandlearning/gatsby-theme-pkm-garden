module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `content/wiki`,
        name: 'wiki',
      },
    },
  ],
}
