export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'companyNameText',
            title: 'Company Name',
            type: 'object',
            fields: [
                { name: 'en', type: 'string', title: 'English' },
                { name: 'ro', type: 'string', title: 'Romanian' }
            ]
        },
        {
            name: 'licenseStatusText',
            title: 'License Status',
            type: 'object',
            fields: [
                { name: 'en', type: 'string', title: 'English' },
                { name: 'ro', type: 'string', title: 'Romanian' }
            ]
        },
        {
            name: 'licenseText',
            title: 'License Text',
            type: 'object',
            fields: [
                { name: 'en', type: 'string', title: 'English' },
                { name: 'ro', type: 'string', title: 'Romanian' }
            ]
        },
        {
            name: 'licenseFile',
            title: 'License File (PDF)',
            type: 'file',
            options: {
                accept: '.pdf'
            }
        },
        {
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url'
        },
        {
            name: 'team',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'position', type: 'string', title: 'Position' },
                        { name: 'email', type: 'string', title: 'Email' }
                    ]
                }
            ]
        },
        {
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
                { name: 'text', type: 'string', title: 'Full Address' },
                { name: 'mapUrl', type: 'url', title: 'Google Maps URL' }
            ]
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Contact Email',
            type: 'string'
        }
    ]
};