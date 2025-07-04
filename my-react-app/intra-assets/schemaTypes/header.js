export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' }
      ]
    },
    {
      name: 'logoImage',
      title: 'Logo Image (optional)',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'object',
      fields: [
        {
          name: 'about',
          title: 'About',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' }
          ]
        },
        {
          name: 'activity',
          title: 'Activity',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' }
          ]
        },
        {
          name: 'services',
          title: 'Services',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' }
          ]
        },
        {
          name: 'contacts',
          title: 'Contacts',
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ro', type: 'string', title: 'Romanian' }
          ]
        }
      ]
    }
  ]
};