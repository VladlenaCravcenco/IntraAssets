export default {
  name: 'whatWeDo',
  title: 'What We Do Section',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ro', title: 'Romanian', type: 'text' },
      ],
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', type: 'string', title: 'Number (e.g. 01)' },
            {
              name: 'text',
              title: 'Card Text',
              type: 'object',
              fields: [
                { name: 'en', type: 'string', title: 'English' },
                { name: 'ro', type: 'string', title: 'Romanian' },
              ],
            },
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};