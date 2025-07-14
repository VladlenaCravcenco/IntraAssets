
import seo from './seo';

export default {
  name: 'whoWeAre',
  title: 'Who We Are Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'text' }] },
        { name: 'ro', title: 'Romanian', type: 'array', of: [{ type: 'text' }] },
      ],
    },
    {
      name: 'image1',
      title: 'Left Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'image2',
      title: 'Right Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    }
  ],
};