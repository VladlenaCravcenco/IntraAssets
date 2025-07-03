import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '3iowxmww',      // ← из https://sanity.io/manage
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
})