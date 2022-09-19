import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Lancernix的博客空间',
  description: '一个更新有点慢的个人笔记，希望您在这里有所收获',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  outDir: '../dist',

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    // logo: '',
    // nav: [],
    siteTitle: "Lancernix's Blog",
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
    outlineTitle: '本文目录',
    outline: 'deep',
    lastUpdatedText: '更新时间',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: 'Released under the MIT License | Powered by Vitepress',
      copyright: 'Copyright © 2022-present Lancernix',
    },
  },
});
