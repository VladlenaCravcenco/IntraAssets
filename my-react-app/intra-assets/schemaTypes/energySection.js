export default {
  name: 'energySection',
  title: 'Energy Section (Contact)',
  type: 'document',
  fields: [
    {
      name: 'title1',
      title: 'Title Line 1',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'title2',
      title: 'Title Line 2',
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
      name: 'formTitle',
      title: 'Form Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'submitText',
      title: 'Submit Button Text',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
    {
      name: 'licenseText',
      title: 'PDF Button Text',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ro', title: 'Romanian', type: 'string' },
      ],
    },
  ],
};