import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/technology',
    '/video',
    '/team',
    '/gallery',
    '/patents',
    '/investor',
    '/contacts',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
