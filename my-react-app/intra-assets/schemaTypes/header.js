export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
            { name: 'en', title: 'English', type: 'string' },
            { name: 'ro', title: 'Romanian', type: 'string' },
          ],
        },
        {
          name: 'activity',
          title: 'Activity',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'ro', title: 'Romanian', type: 'string' },
          ],
        },
        {
          name: 'services',
          title: 'Services',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'ro', title: 'Romanian', type: 'string' },
          ],
        },
        {
          name: 'contacts',
          title: 'Contacts',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'ro', title: 'Romanian', type: 'string' },
          ],
        },
      ],
    },
  ],
};