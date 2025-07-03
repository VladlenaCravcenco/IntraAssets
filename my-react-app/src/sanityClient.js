import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '3iowxmww',      // ← из https://sanity.io/manage
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}