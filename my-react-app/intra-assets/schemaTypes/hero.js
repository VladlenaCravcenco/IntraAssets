export default {
  name: 'hero',
  title: 'Hero Section',
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
      name: 'cta1',
      title: 'CTA Button 1',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'cta2',
      title: 'CTA Button 2',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}