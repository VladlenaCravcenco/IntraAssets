export default {
  name: 'whereWeOperate',
  title: 'Where We Operate Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'description',
      title: 'Description under subtitle',
      type: 'object',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'ro', type: 'text', title: 'Romanian' },
      ],
    },
    {
      name: 'countries',
      title: 'Countries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'object', title: 'Country Name', fields: [
              { name: 'en', type: 'string', title: 'English' },
              { name: 'ro', type: 'string', title: 'Romanian' },
            ] },
            { name: 'description', type: 'object', title: 'Country Description', fields: [
              { name: 'en', type: 'string', title: 'English' },
              { name: 'ro', type: 'string', title: 'Romanian' },
            ] },
          ],
        },
      ],
    },
    {
      name: 'mapImage',
      title: 'Map Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'licenseFile',
      title: 'License PDF',
      type: 'file',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
  ],
};