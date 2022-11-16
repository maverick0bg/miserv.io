export default {
  title: 'My custom title',
  description: 'Just playing around.',
    themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ],
	footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Evgeniy Hristov'
    },
	algolia: {
      appId: '2OOIGY80VU',
      apiKey: 'fec5b03dbb9ec32368c34d3b660cfda3',
      indexName: 'miservio-docs'
    }
  }
}

