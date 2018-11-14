export default [
    {
        id: 1,
        ownerId: null,
        status: 1,
        title: 'BBG',
        slug: 'bbg',
        scope: 12,
        workouts: [
            {
                id: 'c9d97cfa-cc2c-42d7-918a-fd3cce8f5252',
                order: 1,
                title: 'Jump Start',
                duration: 'about 35 minutes',
                exercises: [
                    { id: 3, value: 30 }, // pushups
                    { id: 5, value: 30 }, // high-knees
                    { id: 2, value: 30 }, // plaml
                ],
            },
        ],
        payload: {},
    },
    {
        id: 2,
        ownerId: null,
        status: 1,
        title: 'Total Body Blast',
        slug: 'total-body-blast',
        scope: 10,
        workouts: [
            {
                id: '570476eb-cdfc-4c81-bcf1-81f1c71ea321',
                order: 1,
                title: 'Week1 // Monday',
                duration: 'about 28 minutes',
                exercises: [
                    { id: 3, value: 30 }, // pushups
                    { id: 5, value: 30 }, // high-knees
                    { id: 2, value: 30 }, // plaml
                ],
            },
            {
                id: '92de8c12-8c25-4e54-b704-a21e3c170685',
                order: 2,
                title: 'Week1 // Tuesday',
                duration: 'about 28 minutes',
                exercises: [
                    { id: 4, value: 30 }, // supermans
                    { id: 5, value: 30 }, // high-knees
                    { id: 1, value: 30 }, // rest
                ],
            },
        ],
        payload: {},
    },
]
