import {withMermaid} from "vitepress-plugin-mermaid";

export default withMermaid({
  title: 'MiServ.io',
  description: 'Microservices dojo.',
  base: '/miserv.io/',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          {text: 'SDLC', link: '/sdlc'},
          {text: 'Planning', link: '/planning'}
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
});



