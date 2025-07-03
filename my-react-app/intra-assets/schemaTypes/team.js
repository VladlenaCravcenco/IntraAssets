export default {
    name: 'team',
    title: 'Team Section',
    type: 'document',
    fields: [
        {
            name:'title',
            title:'Section Title',
            type: 'object',
            fields: [
                {name: 'en', title: 'English', type: 'string'},
                {name: 'ro', title: 'Romanian', type: 'string'}
            ]
        },
        {
            name: 'members',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'name',title: 'Name', type: 'string'},
                        {
                            name: 'role',
                            title: 'Role',
                            type: 'object',
                            fields: [
                                {name:'en', title:'English', type:'string'},
                                {name:'ro', title:'Romanian', type:'string'}
                            ]
                        },
                        {name:'email', title:'Email', type:'string'}
                    ]
                }
            ]
        }
    ]
}