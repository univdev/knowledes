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
    {
      type: 'category',
      label: '찰랑',
      items: [
        'charlang/index',
        'charlang/architecture',
        'charlang/features',
        'charlang/operations',
        {
          type: 'category',
          label: 'Decisions',
          items: [
            'charlang/decisions/build-as-apps-in-toss-webview',
            'charlang/decisions/use-local-device-storage-for-mvp',
            'charlang/decisions/require-branch-and-pr-flow',
            'charlang/decisions/use-safe-area-insets-for-custom-ui',
            'charlang/decisions/use-stepper-for-session-duration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '근무안심',
      items: [
        'mesh/index',
        'mesh/architecture',
        'mesh/features',
        'mesh/operations',
        {
          type: 'category',
          label: 'Decisions',
          items: [
            'mesh/decisions/use-local-first-mvp',
            'mesh/decisions/automate-ait-upload-and-protect-main',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '전역 하네스',
      items: [
        'global-harness/index',
        'global-harness/architecture',
        'global-harness/features',
        'global-harness/operations',
        {
          type: 'category',
          label: 'Decisions',
          items: [
            'global-harness/decisions/separate-knowledge-work-into-subagents',
            'global-harness/decisions/require-korean-pr-writing',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
