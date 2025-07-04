export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'licenseText',
      title: 'License Text (multilang)',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ro', type: 'string', title: 'Romanian' }
      ]
    },
    {
      name: 'licenseUrl',
      title: 'License PDF URL',
      type: 'url'
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Full Name' },
            { name: 'position', type: 'string', title: 'Position' },
            { name: 'email', type: 'string', title: 'Email' }
          ]
        }
      ]
    }
  ]
}