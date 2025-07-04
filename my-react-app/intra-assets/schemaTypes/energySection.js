export default {
  name: 'energySection',
  title: 'Energy Section',
  type: 'document',
  fields: [
    {
      name: 'title1',
      title: 'Title Line 1',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'title2',
      title: 'Title Line 2',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'ro', type: 'text', title: 'Romanian' },
      ],
    },
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'submitText',
      title: 'Submit Button Text',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'licenseText',
      title: 'License Button Text',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' },
      ],
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'formPlaceholders',
      title: 'Form Placeholders',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name Field',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' },
          ],
        },
        {
          name: 'email',
          title: 'Email Field',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' },
          ],
        },
        {
          name: 'phone',
          title: 'Phone Field',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' },
          ],
        },
        {
          name: 'message',
          title: 'Message Field',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' },
          ],
        },
      ],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'formRecipientEmail',
      title: 'Recipient Email',
      type: 'string',
      description: 'Email address where form submissions should be sent',
    },
  ],
};