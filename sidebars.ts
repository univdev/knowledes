import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Repository',
      items: ['repository/workflow'],
    },
    {
      type: 'category',
      label: 'Writing Guide',
      items: ['writing/project-structure'],
    },
  ],
};

export default sidebars;
